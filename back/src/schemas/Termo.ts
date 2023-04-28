import{Schema, model} from 'mongoose'

const TermoSchema = new Schema({
    device_id: {
        type: String,
        required: true
    },
    data: [{
        timestamp: {
            type: Date,
            required: true
        },
        temperature: {
        type: Number,
        required: true
        }
    }]
})

export default model ('Termo', TermoSchema)

/*
{
	"device_id": "",
	"temperature": 20
}
*/