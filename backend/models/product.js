import mongoose, {Schema} from 'mongoose'

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    image:{
        type: String,
    },
    description:{
        type: String,
        required:true
    },
    quantity:{
        type: Number,
        default: 0
    },
    shipping:{
        type: Boolean,
        default: false
    }
});

const Product = mongoose.model("Product", productSchema)
export default Product;