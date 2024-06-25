import { Navigation } from "./Navigation";
import { UserMenu } from "./UserMenu";
import { NavigationAuth } from "./NavigationAuth";
import { useAuth } from "hooks/useAuth";
import { AppBarHeader } from "styled/styled-appBarHeader";

export const AppBar = () => {
    const { isLoggedIn } = useAuth();
    return (
        <AppBarHeader>
            <Navigation/>
            {isLoggedIn ? <UserMenu/> : <NavigationAuth/>}
        </AppBarHeader>
    )
}