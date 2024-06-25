import { useDispatch } from "react-redux";
import { register } from "../redux/auth/authOperations";
import { FormRegister, FormRegisterLabel } from "../styled/styled-registerForm";

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        dispatch(
            register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    }

    return(
        <FormRegister onSubmit={handleSubmit}>
            <FormRegisterLabel>
                Username
                <input type="text" name="name" />
            </FormRegisterLabel>
            <FormRegisterLabel>
                Email
                <input type="text" name="email" />
            </FormRegisterLabel>
            <FormRegisterLabel>
                Password
                <input type="text" name="password" />
            </FormRegisterLabel>
            <button type="submit">Register</button>
        </FormRegister>
    );
};

