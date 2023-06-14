const mongoose = require('mongoose');

const { Schema } = mongoose;

const carrotSchema = new Schema({
    drugName: {
        type: String,
        required: true,
        unique: true,
    },

    parentCompany: {
        type: String,
        required: true,
    },

    carrots: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
            default: undefined
        }
    ]
});

const Carrot = mongoose.model('Carrot', carrotSchema);

module.exports = Carrot;