// import React, { useEffect} from "react";
// import { ContactForm } from "./components/ContactForm";
// import { Filter } from "./components/Filter";
// import { Contacts } from "./components/Contacts";
// import { AppContainer } from "styled/styled-appContainer";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchContacts } from "./redux/operations";
// import { selectError, selectIsLoading } from "./redux/selectors";

// function App() {

//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <AppContainer>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <h2>Contacts</h2>
//       {isLoading && !error && <b>Request in progress...</b>}
//       <Filter />
//       <Contacts />
//     </AppContainer>
//   );
// }

// export default App;


//===========================================================================

import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
// import { PrivateRoute } from "components/PrivateRoute";
import { RestrictedRoute } from "components/RestrictedRoute";
import { refreshUser } from "./redux/auth/authOperations";
import { useAuth } from "hooks/useAuth";
import { Layout } from "components/Layout";


const HomePage = lazy(() => import('./pages/Home'));
const RegisterPage = lazy(() => import('./pages/Register'));
const LoginPage = lazy(() => import('./pages/Login'));
// const ContactsPage = lazy(() => import(''));

export const App = () => {
    const dispatch = useDispatch();
    const { isRefreshing } = useAuth();

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);

    return isRefreshing ? (
        <b>Refreshing user...</b>
    ) : (
      <>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route 
                    path="/register" 
                    element={<RestrictedRoute redirectTo="/contacts" component={<RegisterPage/>}/>}
                />
                <Route 
                    path="/login" 
                    element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage/>}/>}
                />
                {/* <Route 
                    path="/contacts" 
                    element={<PrivateRoute redirectTo="/login" component={<ContactsPage/>}/>}
                /> */}
            </Route>
        </Routes>
      </>
    );
};