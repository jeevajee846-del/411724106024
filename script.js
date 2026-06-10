

const first=1
const second=2
console.log(first)
const str="pakka"
console.log(str)
const furit=["banan","apple"]
console.log(furit[1])
const arr=[1,"name",false,2.3]
console.log(arr)
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}
const fourth=document.getElementById("ptag")
fourth.innerHTML="this is my fourth"
function newfunction(){
    console.log(" write somthing")
}
const input = document.getElementById("eventlistener")
const output =document.getElementById("Ptag")
input.addEventListener("input",()=>{
    output.textContent= input.value

})
const newvar=document.createElement("h1");
newvar.textContent="New paragraph";
document.body.appendChild(newvar);
newvar.remove()