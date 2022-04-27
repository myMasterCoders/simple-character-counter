
const text=document.querySelector("#myText");
const count=document.querySelector("#count");
const maxLenght=280;

text.addEventListener("keyup",(e)=>{
  count.innerHTML= e.target.value.length
  if(text.value.length <= maxLenght){
    text.style.color="green"
  }else {
    text.style.color ="red"
    alert("کلمات وارد شده بیش از حد مجاز است")
  }
})