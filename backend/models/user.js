import mongoose, {Schema} from 'mongoose'

const userSchema = new Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    avatar: {
        type: String
    },
    orders:[
        {
            type: Schema.Types.ObjectId,
            ref: "Product"
        }
    ]
});

const User = mongoose.model("User", userSchema)
export default User;