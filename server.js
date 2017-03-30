const express= require('express');
const hbs=require('hbs');

const port=process.env.PORT || 3000;
var app=express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));

app.use((req,res,next)=>{
    var now=new Date().toString();
    console.log(now, req.method, req.url);
    next();
});

hbs.registerHelper('getCurrentYear',()=>{
    return  new Date().getFullYear()
});

app.get('/',(req,res)=>{
    res.render('home.hbs',{
        welcomeMessage:'hi world',
        pageTitle:'home',
       
    });
});

app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        pageTitle:'about',
       
    });
});

app.get('/proyects',(req,res)=>{
    res.render('proyects.hbs',{
        pageTitle:'about',
        proyectsMessage:'this is a proyect'
       
    });
});

app.listen(port, () =>{
    console.log("port ",port )
});