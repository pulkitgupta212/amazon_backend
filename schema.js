const {Schema,model}=require("mongoose")

const user_signup=new Schema({

    username:{type:String  },
    email:{type:String },
    phone:{type:String },
    password:{type:String },
    

})

module.exports=model("signup",user_signup)
