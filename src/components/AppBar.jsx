import { Navigation } from "./Navigation";
import { UserMenu } from "./UserMenu";
import { NavigationAuth } from "./NavigationAuth";
import { useAuth } from "hooks/useAuth";

export const AppBar = () => {
    const { isLoggedIn } = useAuth();
    return (
        <header>
            <Navigation/>
            {isLoggedIn ? <UserMenu/> : <NavigationAuth/>}
        </header>
    )
}