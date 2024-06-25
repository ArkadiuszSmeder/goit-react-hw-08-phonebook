import { HomeContainer, HomeTitle, HomeParagraph } from "../styled/styled-homePage";

const Home = () => {
    return (
        <HomeContainer>
            <HomeTitle>Welcome to Phonebook App</HomeTitle>
            <HomeParagraph>This is a free application that allows you to store your friends' contact numbers.</HomeParagraph>
            <HomeParagraph>If you are a new user, click on the Register button and enter the required data.</HomeParagraph>
            <HomeParagraph>Then you can use the application after logging in!</HomeParagraph>
        </HomeContainer>
    )
}

export default Home;