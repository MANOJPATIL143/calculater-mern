const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const CalculationSchema = new mongoose.Schema({
    calculation: {
        type: String,
        required: true
    }
},
    { timestamps: true }
)

module.exports = Calculation = mongoose.model('calculation', CalculationSchema);
