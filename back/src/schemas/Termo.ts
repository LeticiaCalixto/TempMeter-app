import{Schema, model} from 'mongoose'

const TermoSchema = new Schema({
    model: String,
    temp: Number
}, {
    timestamps: true
})

export default model ('Termo', TermoSchema)