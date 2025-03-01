import mongoose, {Schema} from "mongoose";

const memberSchema = new Schema({
    memberNick: { 
        type: String,
        index: { unique: true, sparse: true },
        required: true
    },
    memberPassword: {
        type: String,
        required: true
    },
    memberImage: {
        type: String
    }
},
{       
    timestamps: true
});

export default mongoose.model('Member', memberSchema);