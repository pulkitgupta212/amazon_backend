const {Schema,model}=require("mongoose")

const user_signup=new Schema({

    username:{type:String , required: true },
    email:{type:String , required: true},
    password:{type:String , required: true},
    confirmPassword:{type:String , required: true},

})

module.exports=model("signup",user_signup)
