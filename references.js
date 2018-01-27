var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

//using module exports to dry up code
var Post = require("./models/post.js");
var User = require("./models/users.js");

//USER - email, name

/*User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
    if(err){
        console.log(err);
    } else {
        console.log(user);
    }
});*/

Post.create({
    title: "How to create burgers pt 4",
    content: "balgadgadgadg REDHEADS"
}, function(err, post){
    User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
        if(err){
            console.log(err);
        } else {
            foundUser.posts.push(post);
            foundUser.save(function(err, data){
                if(err){
                    console.log(err);
                } else {
                    console.log(data);
                }
            });
        }
    }); 
});

/*User.create({
    email: "bob@gmail.com",
    name: "bob biatch"
});*/