import io from "socket.io-client";

let socket;

export const init=()=>{
    console.log("Connecting...")
    socket=io('http://localhost:3000',{
       transports:["websocket"], 
    })
    socket.on('connect',()=>console.log("Connected!")); 
}
export const sendMessage=(message)=>{
    if(socket) socket.emit("new-message", message)
}
export const subscribeChat=(cb)=>{ //kanala abone olduk.Backend deki
    if(!socket) return;
    //socket.on ile receive kanalını dinliyorum
    socket.on('receive-message', (message)=>{
        console.log("Yeni mesaj var",message)
        cb(message);
    })
}
//varolan mesajları ekranda görebilmek için backend deki message-list kanalına abone oluyorum
//cb parametrem olacak
export const subscribeInitialMessages=(cb)=>{
if(!socket) return;
socket.on("message-list",(messages)=>{
    console.log("Yeni mesaj var", messages);
    cb(messages)
})
}