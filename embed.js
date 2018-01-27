var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

//POST - title, content

var postSchema = new mongoose.Schema({
   title: String,
   content: String
});

var Post = mongoose.model("Post", postSchema);

//USER - email, name

var userSchema = new mongoose.Schema({
   email: String,
   name: String,
   posts: [postSchema]
});

var User = mongoose.model("User", userSchema);



/*var newUser = new User({
   email: "hermonie@granger.edu",
   name: "Hermonie Granger"
});

newUser.posts.push({
    title: "How to brew polyjuice potion",
    content: "Just kidding, go to potions class"
});

newUser.save(function(err, user){
    if(err){
        console.log(err);
    } else {
        console.log(user);
    }
});*/

/*var newPost = new Post({
   title: "Reflections on Apples",
   content: "They are delicious"
});

newPost.save(function(err, post){
    if(err){
        console.log(err);
    } else {
        console.log(post);
    }
});*/

User.findOne({name: "Hermonie Granger"}, function(err, user){
   if(err){
       console.log(err);
   } else {
       user.posts.push({
           title: "Things I really hate",
           content: "Voldemort, and voldemort.."
       });
       
       user.save(function(err, user){
           if(err){
               console.log(err);
           } else {
               console.log(user);
           }
       });
   }
});