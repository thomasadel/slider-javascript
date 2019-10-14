/*
var productNameInp = document.getElementById("productName");
var productPriceInp = document.getElementById("productPrice");
var productCompanyInp = document.getElementById("productCompany");
var productDescriptionInp = document.getElementById("productDescription");
var addBtn =document.getElementById("addBtn");


var continar= [] ; 


addBtn.onclick=function(){       
 addProduct ();
}


function addProduct (){
    var product  =

 {
     name:productNameInp.value,
     price:productPriceInp.value,
     company:productCompanyInp.value,
     description:productDescriptionInp.value
     
     
     
 }
     continar.push(product);

     display();
}

var trs="";
function display(){
    for(var i=0 ;i<continar.length ; i++){
    trs +="<tr><td>"+continar[i].name+"</td><td>"+continar[i].price+"</td><td>"+continar[i].company+"</td><td>"+continar[i].description+"</td></tr>"
}
document.getElementById("tableBody").innerHTML=trs
}
    

------------------------------------------------

var productNameInp =document.getElementById("productName");
var productPriceInp =document.getElementById("productPrice");
var productCompanyInp =document.getElementById("productCompany");
var productDescrInp =document.getElementById("productDescription");
var btn =document.getElementById("addBtn");
var trs ="";




var continerobjects=[];
btn.onclick=function(){
addItem();
clearForm();
}
function addItem(){
    var productItem =
    {
        name:productNameInp.value,
        price:productPriceInp.value,
        company:productCompanyInp.value,
        description:productDescrInp.value
        
    }
    continerobjects.push(productItem);
    displayItem();
}



function displayItem(){
    trs="";
    for(var i=0; i<continerobjects.length;i++){
        
    trs +='<div class="col-md-3"><div class="product"><h3>'+continerobjects[i].name+'</h3><p>'+continerobjects[i].description+'</p><p class="text-danger">'+continerobjects[i].price+'</p><p class="text-info">'+continerobjects[i].company+'</p><button onclick="deletItem('+i+')" class="btn btn-danger">delete</button></div></div>'
    }
    document.getElementById('rowData').innerHTML=trs
}



function clearForm(){

var inputs = document.getElementsByClassName("form-control");
    for(var i=0; i<inputs.length;i++)
    {
        inputs[i].value="";

    }
}

function deletItem(id){

    continerobjects.splice(id,1);
    
}





var productNameInp= document.getElementById("productName");
var productPriceInp= document.getElementById("productPrice");
var productCompanyInp=document.getElementById("productCompany");
var productDescriptionInp= document.getElementById("productDescription");
var btn= document.getElementById("addBtn");
var trs="";
var itemContiner;

if(localStorage.getItem("itemContiner")==null){
    
    itemContiner=[];
    
}
else{
    
    itemContiner=JSON.parse(localStorage.getItem("itemContiner"));
displayProduct();
}




btn.onclick= function(){
    addproduct();
    displayProduct();
   //clearForm();
    
}


function addproduct(){
    var item =  {
        name:productNameInp.value,
        price:productPriceInp.value,
        company:productCompanyInp.value,
        description:productDescriptionInp.value,
        
    }
    itemContiner.push(item);
    localStorage.setItem("itemContiner",JSON.stringify(itemContiner));
}

function displayProduct(){
    trs="";
    
    for(var i= 0; i<itemContiner.length;i++){
   trs +='<div class="col-md-3"><div class="product"><h3>'+itemContiner[i].name+'</h3><p>'+itemContiner[i].description+'</p><p class="text-danger">'+itemContiner[i].price+'</p><p class="text-info">'+itemContiner[i].company+'</p><button class="btn btn-danger" onclick="deletItem('+i+')">delete</button></div></div>'
    } 
    document.getElementById("rowData").innerHTML=trs;
    
}

function clearForm(){
    
    var inputs = document.getElementsByClassName("form-control");
    for(var i=0; i<inputs.length;i++){
        
        inputs[i].value="";
    }
}

function deletItem(id){
    
    itemContiner.splice(id,1);
        localStorage.setItem("itemContiner",JSON.stringify(itemContiner));

    displayProduct();
    
}

*/

var h1s = document.getElementsByTagName("h1");


for(var i=0;i<h1s.length;i++){
    
    h1s[i].addEventListener("click",function(){
        
        alert("ay7aga")
        
    })
}




var imgs =document.getElementsByTagName("img");
var lightboxcontiner=document.querySelector(".lightbox-continer");
var slider= document.querySelector(".slider");
var imgArray=[];
var currentindex=0;



    
for(var i=0;i<imgs.length;i++){
    imgArray.push( imgs[i]);    
    imgs[i].addEventListener("click",function(e){
        
        lightboxcontiner.classList.add("show");
        var ay7aga= e.target.src;
        slider.style.backgroundImage="url("+ay7aga+")";
     currentindex =imgArray.indexOf(e.target);
        
    
})
}




var next=document.querySelector("#next");

next.addEventListener("click",function(){
  
        currentindex++;

    if (currentindex == imgArray.length){
       
       currentindex= 0;
        
   }
    slider.style.backgroundImage="url("+imgArray[currentindex].src+")";

    
    
})
var prev=document.querySelector("#prev");

prev.addEventListener("click",function(){
   
    currentindex--;
    
    if (currentindex < 0){
       
       currentindex= imgArray.length-1;
        
   }
    slider.style.backgroundImage="url("+imgArray[currentindex].src+")";

    
    
})




var close= document.getElementById("wClose");
close.addEventListener("click",function(){
    
            lightboxcontiner.classList.remove("show");
    
})































