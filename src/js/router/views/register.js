import { onRegister } from "../../ui/auth/register.js";

const form = document.forms.register;

console.log('register form detected', form);


form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("form submitted");

    onRegister(event);
});
