const {Schema,model}=require("mongoose")

const user_signup=new Schema({

    username:{type:String  },
    email:{type:String },
    phone:{type:String },
    password:{type:String },
    

})

module.exports.user_signup=model("signup",user_signup)

const single_card= new Schema({
    "title" : String,
    "img1" : String,
    "seemore" : String
})

module.exports.single_card=model("single_card",single_card)

const multi_card= new Schema({
    "title" : String,
    "img1" : String,
    "product1" : String,
    "img2" : String,
    "product2" : String,
    "img3" : String,
    "product3" : String,
    "img4" : String,
    "product4" : String,
    "seemore" : String
})

module.exports.multi_card=model("mutli_card",multi_card)

const carousel_items = new Schema({
    "img1" : String,
    "price" : String,
    "description" : String,
    "rating" : String,
    "amazonprime" : String

})

module.exports.carousel_items=model("carousel_items",carousel_items)





