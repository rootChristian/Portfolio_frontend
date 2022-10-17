import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetUsersQuery } from '../../features/users/usersSlice';
import {
    AboutContainer, Content, ContentLogo, ContentParagrah,
    Div,
    Header, Logo, Paragraph, Span
} from '../../styles/styledAbout/About.Styled';
import { Hearts, Grid } from 'react-loading-icons'

const About = () => {

    const { userId } = useParams()

    const {
        user,
        isLoading: isLoadingUser,
        isSuccess: isSuccessUser,
        isError: isErrorUser,
        error: errorUser
    } = useGetUsersQuery('getUsers', {
        selectFromResult: ({ data, isLoading, isSuccess, isError, error }) => ({
            user: data?.entities[userId],
            isLoading,
            isSuccess,
            isError,
            error
        })
    });

    let aboutMe1, aboutMe2, image, question, content;


    if (isLoadingUser) {
        question = <Header>Whoami?</Header>
        aboutMe1 = <Div ><Hearts fill="#d52344" stroke='#841a1a' height='3em' speed={1} />Loading...</Div>

        content = (
            <Content>
                {question}
                {aboutMe1}
            </Content>
        )
    } else if (isSuccessUser) {
        question = <Header>Whoami?</Header>
        aboutMe1 = <Paragraph> <Span>{user?.name}</Span>👨🏾‍💻 {user?.aboutMe1} </Paragraph>
        aboutMe2 = <Paragraph> {user?.aboutMe2} </Paragraph>
        image = <Logo src={user?.image} alt='Avatar' />

        content = (
            <ContentParagrah>
                {question}
                {aboutMe1}
                {aboutMe2}
            </ContentParagrah>
        )
    } else if (isErrorUser) {
        question = <Header>Whoami?</Header>
        aboutMe1 = <Div><Grid fill="#d52344" stroke='#841a1a' height='3em' speed={1} />Error!!!</Div>

        content = (
            <Content>
                {question}
                {aboutMe1}
            </Content>
        )
    }

    return (
        <AboutContainer>
            <ContentLogo>
                {image}
                {content}
            </ContentLogo>
        </AboutContainer>
    )
}

export default About
