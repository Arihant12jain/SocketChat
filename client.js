const socket=io();
       
socket.on('connect',()=>{console.log('user Connected')
}
);
let nammee=prompt('Enter Your name');
let textarea=document.querySelector('textarea');
let ans;
function submit(){  
console.log('Enter');
ans={
    nam:nammee,
    message:textarea.value,
}
socket.emit('message',ans);
    sendmessage(ans,'incoming');
    }
const sendmessage=(e,type)=>{
    let message=e.message;
    
    let namee=e.nam;
    textarea.value='';
let maindiv=document.createElement('div');
maindiv.classList.add(type);
let msg=`
${namee}
<p>${message}</p>`

maindiv.innerHTML=msg;
let area=document.querySelector('.message');
area.appendChild(maindiv);
}
socket.on('message',(message)=>{
    console.log(message);
    sendmessage(message,'outgoing');
})
socket.on('disconnect',()=>{console.log('Server Disconnected')});
