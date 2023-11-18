var express= require ('express');
var mongodb= require ('mongoose');
var cors= require ('cors');
var bodyParser= require ('body-parser');

myproj = express();

myproj.use (cors());

myproj.use (bodyParser.urlencoded({extended: false}));

myproj.use (bodyParser.json());

mongodb.connect("mongodb+srv://Nkechi:xxxxxojiugocluster1.ipuw36e.mongodb.net/Serverdb?retryWrites=true&w=majority");

var ProjectCollectionSchema = mongodb.Schema({
    Author_Name: String,
    Blog_Title: String,
    Stitle_Blog: String,
    Body_Blog: String,
});

var ProjectCollection = mongodb.model('ProjectCollections', ProjectCollectionSchema)

myproj.get('/', async function (req, res){
    res.send ('Welcome to our homepage')
});

myproj.get('/delete_walter' , async function (req, res){
    const walt_delete = await ProjectCollection.findByIdAndRemove('64e2e90dc460dce23153ac33');

    console.log(walt_delete);
    return res.status(200).json('walter deleted')  
});
    

myproj.get("/author_data", async function (req, res) {
    const my_data = await ProjectCollection.findOne();
    //   var my_data_string = "The name of the blog author is" + " " +  my_data.Author_Name  + " "  + "and the title of the blog is" + " " + my_data.Blog_Title + " . "
    //      + "The subtitle of the blog is" +" " + my_data.Stitle_Blog + ";"  + " " +  my_data.Body_Blog
      

        if(my_data){
            var my_data_string = "The name of the blog author is" + " " +  my_data.Author_Name  + " "  + "and the title of the blog is" + " " + my_data.Blog_Title + " . "
            + "The subtitle of the blog is" +" " + my_data.Stitle_Blog + ";"  + " " +  my_data.Body_Blog
         
           
           return res.status(200).json(my_data_string);
            }
        
          else{
            var my_data_string="The blog you are looking for is not available in this website. Input the correct data and try again"
           
            return res.status(200).json(my_data_string);
            }  
});


myproj.get('/auth_fname', async function (req, res) {
    console.log(req.query.b_filter);
    var blog_filter = req.query.b_filter
    const authdata = await ProjectCollection.findOne({Author_Name: blog_filter});
//    var blog_details_str= "The name of the blog author is" + " " + authdata.Author_Name  + "and the title of the blog is" + " " + authdata.Blog_Title + " . "
//    + "The subtitle of the blog is" + authdata.Stitle_Blog + "," + "the body of the blog examines" + " " + authdata.Body_Blog

   if(authdata){
    var blog_details_str= "The name of the blog author is" + " " + authdata.Author_Name  + " " +  "and the title of the blog is " + " " + authdata.Blog_Title
    + " ; " + "the blog is subtitled  " + authdata.Stitle_Blog + " . " + " " + authdata.Body_Blog
    
   
   return res.status(200).json(blog_details_str);
    }

  else{
    var blog_details_str="The blog you are looking for is not available in this website. Input the correct data and try again"
   
    return res.status(200).json(blog_details_str);
    }
  
})

// Second url path for name and blog title

myproj.get('/blog_title', async function (req, res) {
    console.log(req.query.s_filter);
    var title_filter = req.query.s_filter
    // var auth_filter = req.query.a_filter
    const blogdata = await ProjectCollection.findOne({Author_Name:title_filter});
//    var blog_data_str= "The name of the blog author is" + " " + blogdata.Author_Name  + "and the title of the blog is" + " " + blogdata.Blog_Title + " . "
//    + "The subtitle of the blog is" + blogdatadata.Stitle_Blog + "," + "the body of the blog examines" + " " + blogdata.Body_Blog

   if(blogdata){
    var blog_data_str= "The name of the blog author is" + " " + blogdata.Author_Name  + " " +  "and the title of the blog is " + " " + blogdata.Blog_Title
    + " ; " + "the blog is subtitled  " + blogdata.Stitle_Blog + " . " + " " + blogdata.Body_Blog
    
   
   return res.status(200).json(blog_data_str);
    }

  else{
    var blog_data_str="The blog you are looking for is not available in this website. Check the Subtitle again"
   
    return res.status(200).json(blog_data_str);
    }
  
})


// Url Path for post method

myproj.post('/data_save', cors(), async function (req, res){
    console.log(req);
    console.log(req);
    console.log(req.body.user_author_name);
    var myData= new ProjectCollection({
        Author_Name: req.body.user_author_name,
        Blog_Title: req.body.user_blog_title,
        Stitle_Blog: req.body.user_stitle_blog,
        Body_Blog:req.body.user_body_blog,

    });

   
        var detail_save= await myData.save()
            //  await  myData.save().then(result => console.log("hi", result))
            // .catch(err => console.log (err))
            console.log(detail_save)
            res.send('I have saved the data')
            
});

myproj.listen(7000);