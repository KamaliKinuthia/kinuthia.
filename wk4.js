const header =document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY >0);
});
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll  = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};
 const sr = ScrollReveal ({
    distance: '25 px',
    duration: 2500,
    reset: true
 })

 sr.reveal('.home-text',{delay:190, origin:'bottom'})
 sr.reveal('.about,.services,.contacts',{delay:200, origin:'bottom'})

 //contact section validation 
 const form=document.getElementById("form");
 const name=document.getElementById("name");
 const email=document.getElementById("email");
 const tel=document.getElementById("tel");
 const textarea=document.getElementById("textarea");
 const submit=document.getElementById("submitbtn");
 const log=document.getElementById("log");
 let isValid = false;
let passwordMatch = false;

//validate the form
function validateform(){

    isValid=form.checkValidity();
    if (!isValid){
        message.textContent="please fill the form correctly";
        message.style.color='red';
        messageContainer.style.borderColor="red";
    }
}
// function store user information
function storeUser() {
  const user = {
    name: form.name.value,
    tel: form.tel.value,
    email: form.email.value,
    textarea: form.textarea.value,
  };
  console.log(user);
}

// procssFormData
function procssFormData(event) {
  event.preventDefault();
  validateform();
  storeUser();
}

// event listeners
form.addEventListener("submitbtn", procssFormData);

