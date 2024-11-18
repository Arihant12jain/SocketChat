const express=require('express')
const app=express();
const http=require('http');
const io1=require('socket.io');
const cors = require('cors');
const {Server}=require('socket.io');
const path=require('path')
const server=http.createServer(app);
const io=new Server(server,{
    cors:{
        origin:'http://localhost:3000',
        methods:['GET','POST'],
    }
});
app.use(cors());
 app.use(express.static(path.resolve('./views')))
app.get('/',(req,res)=>{
   return res.sendFile('/views/index.html');
})
// io.on('connection',(socket)=>{
//     console.log('User Connected to');
//     socket.emit('message',"hello yu are connected to server")
//     socket.on('disconnect',()=>{console.log('user DisConnected')});
// socket.on('message',(message)=>{
//     console.log(message);
//    io.emit('message',message);
   
// })
// })
io.on('connection',(Socket)=>{
    console.log('user Connected');
    Socket.on('message',(message)=>{
        console.log(message);
    Socket.broadcast.emit('message',message);
    })
})
server.listen(8000,()=>console.log('server started'))