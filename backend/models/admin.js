import mongoose, {Schema} from 'mongoose'

const adminSchema = new Schema({
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
    avatar: {
        type: String
    }
});

const Admin = mongoose.model("Admin", adminSchema)
export default Admin;