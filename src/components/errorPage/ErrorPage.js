import { Container, Text, Wrapper } from "../../styles/styledErrorPage/ErrorPage.Styled";

const ErrorPage = () => {
    return (
        <Container>
            <Wrapper>
                <Text>Error 404!</Text>
                <hr />
                <Text>Page not found...</Text>
            </Wrapper>
        </Container>
    );
};

export default ErrorPage;
