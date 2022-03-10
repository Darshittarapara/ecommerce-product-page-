let get =document.getElementById("get");
let btnone =document.getElementById("btn-1")
let btntwo =document.getElementById("btn-2")

let font =document.getElementById("btn");
font.style.fontSize="18px"
let flag=-1
let url =["./images/image-product-1.jpg","./images/image-product-2.jpg","./images/image-product-3.jpg","./images/image-product-4.jpg"];
let targetimg=document.getElementById("target-img")
let blur =document.getElementsByClassName("blur")
const silder =(a)=>{
    if(a==url.length){
        a=0;
       
    }
    for(let b of blur){
        b.style.border="0px"
        b.style.opacity="1"
    }
targetimg.src =url[a]
blur[a].style.border="3px solid orange"
blur[a].style.opacity="0.5"
}
let values =-1;
const fun =()=>{
    values +=1
    sildermoblie(values)
}
let second =url.length;
const revese =()=>{
    second--
    revesesilder(second)
}
const revesesilder =(c)=>{
  if(c<0){
      c=url.length-1;
      second=url.length

  }
    targetimg.src =url[c]
}
const sildermoblie =(b)=>{
    if(b==url.length){
        b=0;
        values=-1;
       
    }
  
targetimg.src =url[b]

}


let count =0
const increment =()=>{
    count++
    document.getElementById("get").innerText=count
}
const decrement = ()=>{
    if(count<=0){
        count=0
    }
    else {
        count--
    }

    document.getElementById("get").innerText=count
    
}
let delecticon =document.getElementById("delecticon")
let block =document.getElementById('block');
const delect =()=>{
    block.classList.toggle("abc")
    
    // delecticon.style.display="none"
}
let take =document.getElementById("take");
let img =document.getElementById("img");
let cal=document.getElementById("cal");
let firstheding=document.getElementById("headins")
let secondheding=document.getElementById("headins-two")
let thirdheding=document.getElementById("headins-three")

take.style.marginTop ="20px"
let btn =document.getElementById("btn2")

const target = () =>{
    let displayvalue =document.querySelector(".span")
    displayvalue.style.display="block"
    value()
    delecticon.style.display="block"
    mainblock.style.display="block"
    

    img.style.display="block"

    btn.style.display="block"
    let getvalue=document.getElementById("get").innerText
    let number =Number(getvalue)
    let array =["./images/image-product-1-thumbnail.jpg",number,getvalue]
    let result =125 *array[1]
    text.innerText="Fall Limited Edition Sneakers"
    img.src=array[0]
    firstheding.innerText="125  *"
    secondheding.innerHTML=array[2]
    thirdheding.innerText=result;

    
}
let mainblock =document.getElementById("main-block");
let text  =document.getElementById("text")
const removeblock= ()=>{
    let getvalues=document.getElementById("get").innerText;
    let takenS =document.getElementById("taken");
    let displayvalues =document.querySelector(".span")
    if(mainblock.style.display=="block"){
        mainblock.style.display='none'
        text.innerText='your card was Empty'
      
        displayvalues.style.display="none"
    }
    else{
        mainblock.style.display="block"
        takenS.innerText=getvalues;
        
    }
}

let taken =document.getElementById("taken");

const value=()=>{
    let getvalue=document.getElementById("get").innerText;
    taken.innerText=getvalue
}
let menubar =document.getElementById("displays");

let closeicon =document.getElementById("close")

const menu =()=>{
    
    menubar.classList.toggle("display-block");

see()
  close()
}
const see=()=>{
    if(closeicon.style.display!="block"){
        closeicon.style.display="block"
    }
    else{
        closeicon.style.display="none"
    }
}
const close =()=>{

    if(btnone.style.zIndex!="-1" &&   btntwo.style.zIndex!=="-1"){
        btnone.style.zIndex="-1"
        btntwo.style.zIndex="-1"
    }
    else {
        btnone.style.zIndex="1"
        btntwo.style.zIndex="1"
    }
    }


