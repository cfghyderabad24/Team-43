import mongoose, {Schema} from 'mongoose'

const eventSchema = new Schema({
    eventname: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    pin:{
        type: Number,
        required: true
    },
    avatar: {
        type: String
    }
});

const Event = mongoose.model("Event", eventSchema)
export default Event;