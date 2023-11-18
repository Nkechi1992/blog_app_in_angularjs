var app = angular.module('d_app', []);

app.directive("myDirectiveTry", function(){
    return{
        restrict: "EACM",
       template: "<strong> Here you can generate names of bloggers, title of blogs and details of blogs you want to read </stong>"
    }
   } );

//    Controller for form and Manin heading
app.controller('d_control',function($scope, $http, $timeout)
{
    $scope.text_shows= "You are welcome to our Website "

    $timeout( function () {
        $scope.text_shows = "You are welcome to our Website😱"
    },2000);

    $timeout( function () {
        $scope.text_shows = "Generate your favourite blogs"
    },4000);

    $timeout( function () {
        $scope.text_shows = "Create your Blogs"
    },6000);

    $timeout( function () {
        $scope.text_shows = "Read your Blogs"
    },8000);

    $timeout( function () {
        $scope.text_shows = "Read different types of blogs"
    },10000);

    $timeout( function () {
        $scope.text_shows = "Search for your favourite bloggers"
    },12000);

    $timeout( function () {
        $scope.text_shows = "Read our existing blogs"
    },14000);

    $timeout( function () {
        $scope.text_shows = "Have fun and be excited!😂"
    },16000);


    $scope.details= "Enter and Submit Details of Blogs and Bloggers for our Website"

    $scope.d_author= "Name of Author";
    $scope.d_title= "Title of Blog";
    $scope.d_sub= "Subtitle of Blog";
    $scope.d_body= ""

    $scope.enter_data= function(){
        $scope.d_data={
            'user_author_name': $scope. u_aname,
            'user_blog_title' : $scope. u_btitle,
            'user_stitle_blog' : $scope. u_stitle,
            'user_body_blog' : $scope. u_bblog
        }

        $scope.config ={
            headers: {
                "Content-Type": "application/json"
            }
        }
        $http.post("http://localhost:7000/data_save", $scope.d_data, $scope.config). then (function(response) {
        $scope.sendPost= response.data;
    });
    }
    
});


// Controller for Image and the subheading

app.controller('img_control',function($scope, $timeout, $interval, $location)
{
    $scope.heading= "Let's get blogging "
    $scope.sub_heading= "Feel the excitement of our page as you find blog posts of many great bloggers."

    $scope.image = 'Let-Blogging.jpg'
    $timeout( function () {
        $scope.image = 'Let-Blogging.jpg'
    },2000);

    $timeout( function () {
        $scope.image = 'Blog.jpg'
    },4000);

    $timeout( function () {
        $scope.image = 'blog-connect.jpg'
    },6000);

    $scope.photo = 'blog-wallpapers.jpg'
        
    $timeout( function () {
        $scope.photo = 'blog-wallpapers.jpg'  
    },2000)   

    $timeout( function () {
        $scope.photo = 'blog-1.jpg'  
    },4000);
    
    $timeout( function () {
        $scope.photo = 'blog-dark.jpg'  
    },6000);

    $scope.d_Url= $location.absUrl();
    $scope.dPort= $location.port();
    $scope.dProtocol= $location.protocol();
    // $scope.get_info= "Type inquiry here"
        
    });
 

    // Controller for extracting information from the database
    app.controller("Get_info", function($scope, $interval, $http){

        // $scope.get_time=new Date().toLocaleTimeString();
        
        // selectedCategory= string;
        // Could not work

        // $http.get("http://localhost:7000/author_data").then (function (response){
        //     $scope.me_dey= response.data;
        // });

        $scope.blog_inuse= "Read existing blogs"
        $scope.blog_input= "Search the names of your favourite bloggers"
        $scope.authors = ["Obianuju Okoli", "Henry Walter", "Dennis Douglas", "Khloe Cole", "Brutus Gay"];
       
        $scope.get_info=""
        $scope.ret_date= function() {
        $http.get("http://localhost:7000/auth_fname/?b_filter=" +  $scope.get_info).then (function (response){
            $scope.my_data= response.data;
        });
        }

        $scope.info_data=""
        $scope.data=""
        $scope.blog_details = function() {
        $http.get("http://localhost:7000/blog_title/?s_filter=" +  $scope.info_data + "&a_filter=" + $scope.data).then (function (response){
            $scope.d_data_blog= response.data;
        });
        }

        $interval(function(){
            $scope.get_time=new Date().toLocaleTimeString();
        }, 1000);

    });

   
   
    