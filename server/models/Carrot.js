const mongoose = require('mongoose');

const { Schema } = mongoose; 

const carrotSchema = new Schema({
    drugName: {
        type: String,
        required: true,
        unique: true
    },

    parentCompany: {
        type: String,
        required: true,
    },

    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

const Carrot = mongoose.model('Carrot', carrotSchema);

module.exports = Carrot;