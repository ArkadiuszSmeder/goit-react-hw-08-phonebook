import { Helmet } from "react-helmet";
import { RegisterForm } from "components/RegisterForm";
import { RegisterContainer } from "../styled/styled-registerPage";

const Register = () => {
    return (
        <RegisterContainer>
            <Helmet>
                <title>Registration</title>
            </Helmet>
            <RegisterForm/>
        </RegisterContainer>
    );
};

export default Register;