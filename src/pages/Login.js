import { Helmet } from "react-helmet";
import { LoginForm } from "components/LoginForm";
import { LoginContainer } from "../styled/styled-loginPage";

const Login = () => {
    return (
        <LoginContainer>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <LoginForm/>
        </LoginContainer>
    );   
};

export default Login;