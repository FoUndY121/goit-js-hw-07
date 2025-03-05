const refs={
    input: document.querySelector("#name-input"),
    span: document.querySelector("#name-output"),
};
const handelinput = event =>{
    const inputValue=event.currentTarget.value.trim();
    if(inputValue===""){
        return refs.span.textContent="Anonymous";
    }
    else {
        return refs.span.textContent=inputValue;
    }
}
refs.input.addEventListener("input",handelinput)