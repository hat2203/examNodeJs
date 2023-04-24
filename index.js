const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log("Sever is running...");
})

app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",function (req,res){
    // res.send("Hello world!!!")
    let student = {
        name: "Nguyen Thi Van Anh",
        age: 18
    };
    let classRoom = {
        name: "T2204M",
        room: "B16"
    }
    res.render("home",{
        student: student,
        classRoom: classRoom
    });
});