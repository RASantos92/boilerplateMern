const mongoose = require("mongoose");

const WidgetSchema = new mongoose.Schema({
    title:{
        type: String,
        required:[true,"hey you need a title"],
        minlength:[6,"need more characters"],
        maxlength:[55,"needs to be less than 55 characters"]
        
    },
    firstName:{
        type:String,
        required:[true,"needs a name"],
        minlength:[2,"need to be more than 2 characters"]
    },
    lastName:{
        type:String,
        required:[true,"needs a last name"]
    }

},{timestamps:true})

const Widget = mongoose.model("Widget",WidgetSchema);

module.exports = Widget;