import {register} from "../../api/auth/register.js";

export async function onRegister(event) {
    event.preventDefault();

    const form = event.target;
    
    const formData = {
        name: form.name.value,
        email: form.email.value,
        password: form.password.value,
        bio: '',
        avatar: '',
        banner: '',
    };

    try {
        const result = await register(formData);
        console.log('Registration successful:', result);
        alert("Registration failed:", error);

    } catch (error) {
        console.log('Registration failed:', error);
        alert("Registration failed:", error);

    }
}
