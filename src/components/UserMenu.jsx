import { useDispatch } from "react-redux";
import { logOut } from "../redux/auth/authOperations";
import { useAuth } from "hooks/useAuth";
import { UserMenuContainer, UserMenuGreetings } from "../styled/styled-userMenu";
import { LogoutButton } from "../styled/styled-userMenu";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <UserMenuContainer>
            <UserMenuGreetings>Welcome, {user.name}</UserMenuGreetings>
            <LogoutButton type="button" onClick={() => dispatch(logOut())}>
                Logout
            </LogoutButton>
        </UserMenuContainer>
    );
};