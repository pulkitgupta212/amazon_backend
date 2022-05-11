const express = require('express')
const database=require("./schema")
const mongoose = require('mongoose');
const jwt=require('jsonwebtoken');
const cors = require('cors');
const app = express();
app.use(express.json());

app.use(cors());

const port = process.env.PORT || 8080;

 
  mongoose.connect("mongodb+srv://amazonclone1:12345@amazonclonecluster0.z55ya.mongodb.net/myFirstDatabase")
        .then(() => console.log("database connected successfully"))
        .catch((e) => console.log(e))
 

app.get('/', async (req, res) => {
    
    const data = await database.find({});
    
    res.send({ data })
})

app.post('/signup', async (req, res) => {
    
    // database.count({}, function (err, count) {
    //     const a=count
    // })
    const {username,email,phone,password } = req.body;
    const newuser = new database({ username,email,phone,password });
    const result = await database.insertMany([newuser])
        .catch((e) => res.status(404).send(e));
    if (result) res.send({ status: 200, data: result, msg: "data added successfully" })

})

app.post('/login',async(req,res) => {
    try{

    // database.count({}, function (err, count) {
    //     const a=count
    // })
    const {emailphone,password} = req.body
    const result = await database.findOne({$and:[{$or:[{ email:emailphone },{ phone:emailphone }]},{password}]})
    console.log(result)
    if(result) {
        const token = jwt.sign({result},'email')
        res.send({ status: 200, data: req.body, msg: " Sign in successfully",token })

    }
    else{
        res.status(500).send("invalid login"); 
    }
} catch(error){
    res.status(400).send("invalid login detailss2")
}
})


// app.patch('/update/:id', async (req,res)=>{
//     try{
//     const _id =req.params.id;
    
//     const changeEmp = await database.findByIdAndUpdate(_id, req.body, { new : true});
//     res.send({ status: 200, data: changeEmp, msg: "data updated successfully" });
// }catch(e){
//     res.send({ status: 400, data: e, msg: "data can not updated successfully" })
// }
// })


// app.delete('/delete/:id', async(req, res) => {
//     try{
//         const _id =req.params.id;
//         const deleteEmp = await database.findByIdAndDelete(_id, req.body);
//         res.send({ status: 200, data: deleteEmp, msg: "data deleted successfully" });
//     }catch(e){
//         res.send({ status: 400, data: e, msg: "data can not deleted successfully" })
//     }


// })

app.listen(port, () => {
    console.log("Server is running on port 8080");
})