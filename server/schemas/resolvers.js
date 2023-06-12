const { AuthenticationError } = require('apollo-server-express');
const { User, Carrot } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('carrots');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('carrots');
        },
        me: async (parent, args, context) => {
            if(context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                .populate('carrots');
                return userData;
            }
            throw new AuthenticationError('Not logged in');
        },
        carrots: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Carrot.find(params).sort({ createdAt: -1 });
        },
        carrotsByDrugName: async (parent, { drugName }) => {
            return Carrot.find({ drugName }).sort({ createdAt: -1 });
        },
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },

        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if(!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if(!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },

        addCarrot: async (parent, args, context) => {
            const user_id = context.user ? context.user._id : args.userId;
            const carrot = await Carrot.create({ ...args, user_id });

            await User.findByIdAndUpdate(
                { _id: user_id },
                { $addToSet: { carrots: carrot._id } },
            );

            return carrot;
        },

        removeCarrot: async (parent, { carrotId }, context) => {
            const carrot = await Carrot.findOneAndDelete({ _id: carrotId });

            if(context.user) {
                const user = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { carrots: carrotId } },
                    { new: true }
                );
            }

            return context.user ? { ...carrot, user } : carrot;
        },

        removeUser: async (parent, { userId }) => {
            return User.findOneAndDelete({ _id: userId });
        },
    }

}

module.exports = resolvers;