let username=document.querySelector('#username')
let emailaddress=document.querySelector('#emailaddress')
let creatpassword=document.querySelector('#creatpassword')
let confirmpassword=document.querySelector('#confirmpassword')
let creataccount=document.querySelector('#creataccount')
let login=document.querySelector('#login')
let divspan=document.querySelector('#divspan')
let container =document.querySelector('#container')
let loginn=document.querySelector('#loginn')
let passwordd=document.querySelector('#passwordd')
let usernameoremial=document.querySelector('#usernameoremial')
let userdata;



if(localStorage.userdata != null){
    datapro = JSON.parse(localStorage.userdata)
}else{
    userdata=[]
}


creataccount.onclick=function(){

let newuser ={
    username: username.value.toLowerCase(),
    emailaddress: emailaddress.value,
    creatpassword:creatpassword.value , 
}

if(Array.from(creatpassword.value).length >= 6 ){

if(creatpassword.value != confirmpassword.value)
{
    divspan.innerHTML=`<i class="fa-solid fa-xmark" ></i>
    <input type="data" required="required" id="error">
    <span id="ss">Confirm Password Is Wrong</span>`
    container.style.height = '575px' ;

}
else if(creatpassword.value = confirmpassword.value)
{
    localStorage.user= JSON.stringify(newuser) 
    caleardata()
    container.style.height = '502px' ;
}

}else{
    divspan.innerHTML=`<i class="fa-solid fa-xmark" ></i>
    <input type="data" required="required" id="error">
    <span id="ss">Password Is Short </span>`
    container.style.height = '575px'
}

}
function caleardata(){
        username.value=''
    emailaddress.value=''
   creatpassword.value=''
   confirmpassword.value=''
   divspan.innerHTML = ''
  
}
function caleardatasginin(){
    passwordd.value=''
    usernameoremial.value=''
}
loginn.onclick=function(){
    caleardatasginin()
}




































