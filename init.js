const mongoose = require("mongoose");
const Chat = require("./models/chat.js");


main().then(() => {
    console.log("Connection is Succesfull");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp ');
}

let allChats = [
  { from: "Neha", to: "Dipanshi", message: "Hi! How are you?", created_at: new Date() },
  { from: "Dipanshi", to: "Neha", message: "I'm good, what about you?", created_at: new Date() },
  { from: "Rahul", to: "Priya", message: "Are you coming to class today?", created_at: new Date() },
  { from: "Priya", to: "Rahul", message: "Yes, I'll be there by 10.", created_at: new Date() },
  { from: "Aman", to: "Riya", message: "Did you complete the assignment?", created_at: new Date() },
  { from: "Riya", to: "Aman", message: "Almost done!", created_at: new Date() },
  { from: "Karan", to: "Simran", message: "Let's meet for coffee.", created_at: new Date() },
  { from: "Simran", to: "Karan", message: "Sure, what time?", created_at: new Date() },
  { from: "Ankit", to: "Pooja", message: "Happy Birthday!", created_at: new Date() },
  { from: "Pooja", to: "Ankit", message: "Thank you so much!", created_at: new Date() },
  { from: "Rohit", to: "Sneha", message: "Can you send the notes?", created_at: new Date() },
  { from: "Sneha", to: "Rohit", message: "Sending them now.", created_at: new Date() },
  { from: "Vikram", to: "Nisha", message: "Where are you?", created_at: new Date() },
  { from: "Nisha", to: "Vikram", message: "On my way.", created_at: new Date() },
  { from: "Arjun", to: "Megha", message: "Good morning!", created_at: new Date() },
  { from: "Megha", to: "Arjun", message: "Morning! Have a great day.", created_at: new Date() },
  { from: "Yash", to: "Muskan", message: "Movie tonight?", created_at: new Date() },
  { from: "Muskan", to: "Yash", message: "Sounds great!", created_at: new Date() },
  { from: "Dev", to: "Sakshi", message: "Have you reached home?", created_at: new Date() },
  { from: "Sakshi", to: "Dev", message: "Yes, safely.", created_at: new Date() },
  { from: "Aditya", to: "Ishita", message: "Let's study together.", created_at: new Date() },
  { from: "Ishita", to: "Aditya", message: "Okay, see you at 5.", created_at: new Date() },
  { from: "Harsh", to: "Ananya", message: "Congratulations!", created_at: new Date() },
  { from: "Ananya", to: "Harsh", message: "Thank you!", created_at: new Date() },
  { from: "Manav", to: "Kriti", message: "Lunch?", created_at: new Date() },
  { from: "Kriti", to: "Manav", message: "Let's go!", created_at: new Date() },
  { from: "Nitin", to: "Tanya", message: "Can we talk?", created_at: new Date() },
  { from: "Tanya", to: "Nitin", message: "Sure, call me.", created_at: new Date() },
  { from: "Sahil", to: "Radhika", message: "Best of luck!", created_at: new Date() },
  { from: "Radhika", to: "Sahil", message: "Thanks!", created_at: new Date() },
  { from: "Kabir", to: "Aisha", message: "Reached the station.", created_at: new Date() },
  { from: "Aisha", to: "Kabir", message: "I'll be there soon.", created_at: new Date() },
  { from: "Tarun", to: "Bhavna", message: "Meeting postponed.", created_at: new Date() },
  { from: "Bhavna", to: "Tarun", message: "Thanks for informing.", created_at: new Date() },
  { from: "Rakesh", to: "Divya", message: "Need your help.", created_at: new Date() },
  { from: "Divya", to: "Rakesh", message: "Tell me what's up.", created_at: new Date() },
  { from: "Mohit", to: "Komal", message: "Dinner at 8?", created_at: new Date() },
  { from: "Komal", to: "Mohit", message: "Perfect!", created_at: new Date() },
  { from: "Saurabh", to: "Pallavi", message: "Project completed.", created_at: new Date() },
  { from: "Pallavi", to: "Saurabh", message: "Awesome work!", created_at: new Date() },
  { from: "Nakul", to: "Shreya", message: "Check your email.", created_at: new Date() },
  { from: "Shreya", to: "Nakul", message: "Got it.", created_at: new Date() },
  { from: "Ayush", to: "Ritu", message: "See you tomorrow.", created_at: new Date() },
  { from: "Ritu", to: "Ayush", message: "Take care!", created_at: new Date() },
  { from: "Vansh", to: "Diya", message: "Can you help me?", created_at: new Date() },
  { from: "Diya", to: "Vansh", message: "Of course.", created_at: new Date() },
  { from: "Kunal", to: "Mansi", message: "Exam was tough.", created_at: new Date() },
  { from: "Mansi", to: "Kunal", message: "Yes, especially the last question.", created_at: new Date() },
  { from: "Shiv", to: "Aarohi", message: "Good night!", created_at: new Date() },
  { from: "Aarohi", to: "Shiv", message: "Sweet dreams!", created_at: new Date() }
];

Chat.insertMany(allChats).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});


