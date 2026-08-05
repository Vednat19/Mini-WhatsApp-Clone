const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError.js");


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));


main().then(() => {
    console.log("Connection is Succesfull");
}).catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
// }

// MAKING A WRAPFUNCTION FOR ASYNC ERROR HANDLING

function wrapAsync(fn) {
    return function(req,res,next) {
        fn(req,res,next).catch(e => next(e));
    }
};


//ADDING ERROR HANDILING
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

app.get("/chats",  wrapAsync(async (req,res) => {

    let chats = await Chat.find();
    // console.log(chats);
    res.render("index.ejs", {chats});
  
}));

// NEW CHAT

app.get("/chats/new", (req,res) => {
    // throw new ExpressError(404, "Page not found");
    res.render("new.ejs");
});

app.post("/chats", wrapAsync(async (req,res,next) => {
        let {from, to, message} = req.body; 
        let newChat = new Chat ({
        from: from,
        to: to,
        message: message,
        created_at: new Date() 
    });
     await newChat.save();
     res.redirect("/chats");
}));

//EDIT

app.get("/chats/:id/edit", async (req,res) => {
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", {chat});
});

//UPDATE
app.put("/chats/:id",  wrapAsync(async (req, res) => {
        let { id } = req.params;
    let { message } = req.body;

    console.log(message);

    let updatedChat = await Chat.findByIdAndUpdate(
        id,
        { message },
        { runValidators: true, new: true }
    );

    console.log(updatedChat);

    res.redirect("/chats");
    
}));

//DESTRYE

app.delete("/chats/:id", wrapAsync(async (req,res) => {
        let { id } = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
    
}));


//SHOW ROUTE for asycn error handling
app.get("/chats/:id",  wrapAsync(async (req,res,next) => {
        let {id} = req.params;
    let chat = await Chat.findById(id);
    if(!chat) {
        next(new ExpressError(404, "Chat not found"));
    }
    res.render("edit.ejs", {chat});
    
}));


//ERROR WITH THE DIFFERENT NAME
const handleValidationError = err => {
    console.log("This is a Validation Error");
    console.dir(err.message);
    return err;
}

app.use((err,req,res,next) => {
    console.log(err.name);
    if(err.name === "ValidationError") {
        err = handleValidationError(err);
    }
    next(err);
});

// Writing the Error Handler code
 app.use((err,req,res,next) => {
    let {status=500, message="SOME ERROR"} = err;
    res.status(status).send(message); // Show the Error Message and Statuscode in the page
 });

app.listen(3000, () => {
    console.log("Server is running on the port 3000");
});


app.get("/", (req,res) => {
    res.send("server is running");
});