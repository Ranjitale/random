const express=require('express')
const fs=require('fs');
const app=express();
const web= fs.readFile('./index.html','utf-8',(err,data)=>{
    if (err) throw err;
    
  })
const port =8080;
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.get('/book', (req, res) => {
    res.sendFile(__dirname + '/book/book.html')
})

app.get('/about',(req,res)=>{
    res.send("<h1 style='font-style:sans-serif;'>Hello sir! this is an about page of my wesbite</h1>")
})
app.get('/services',(req,res)=>{
    res.send("<h1 style='font-style:sans-serif;'>Hello sir! this is service page of the ranjit ale 's website</h1>")
})
app.get('/contact',(req,res)=>{
    res.send("<h1 style='font-style:sans-serif;color:red;'>Hello sir! this is Contact page of the ranjit ale 's website</h1>")
})

app.listen(port);
