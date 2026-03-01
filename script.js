const upcase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lwcase="abcdefghijklmnopqrstuvwxyz"
const num="0123456789"
const symbol="~`!@#$%^&*()_+=-{}[]<>?/\|/"
let passlen=12
let passbox=document.getElementById("passgen")

let allchar=upcase+lwcase+num+symbol

function gen(){
    let password=""
    password+=upcase[Math.floor(Math.random()*upcase.length)]
    password+=lwcase[Math.floor(Math.random()*lwcase.length)]
    password+=num[Math.floor(Math.random()*num.length)]
    password+=symbol[Math.floor(Math.random()*symbol.length)]
    console.log(password)

   while(passlen>password.length){
    password+=allchar[Math.floor(Math.random()*allchar.length)]
   }
    console.log(password)
    document.getElementById("passgen").value=password
}
function copyi(){
    let passbox=document.getElementById("passgen")
    passbox.select()
    document.execCommand("copy")
    
    
}