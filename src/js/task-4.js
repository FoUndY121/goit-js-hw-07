const form = document.querySelector(".login-form");
form.addEventListener("submit", function (event){
    event.preventDefault();
    const email=form.elements.email.value.trim();
const password=form.elements.password.value.trim();
if (email===""||password===""){
    return alert("Please fill in all fields");

}
const formData={
     email,
   password,
}
console.log(formData);
});