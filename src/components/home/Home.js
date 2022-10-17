import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetUsersQuery } from '../../features/users/usersSlice'
import { BtnSuccess } from '../../styles/Button.Styled'
import { ButtonContent, Header, HomeContainer, HomeItem, HomeLogo, HomeWrapper, Logo, Paragraph, Span } from '../../styles/styledHome/Home.Styled'
import Experiences from '../experiences/Experiences'
import { Hearts, Grid } from 'react-loading-icons'


const Home = () => {

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

  let name, description, image;


  if (isLoadingUser) {
    name = <Header> <Span></Span></Header>
    //description = <Paragraph> <Hearts stroke='#98ff98' strokeWidth={10} speed={.75} /></Paragraph>
    image = <><Hearts fill="#d52344" stroke='#841a1a' height='3em' speed={1} />Loading...</>

  } else if (isSuccessUser) {
    name = <Header>Hi, i'm  <Span>{user?.name}</Span>👨🏾‍💻</Header>
    description = <Paragraph> {user?.description}</Paragraph>
    image = <Logo src={user?.image} alt='Avatar' />
  } else if (isErrorUser) {
    name = <Span>Error!!!</Span>
    //description = <Paragraph> </Paragraph>
    image = <><Grid fill="#d52344" stroke='#841a1a' height='3em' speed={1} />Error!!!</>
  }

  return (
    <HomeContainer>
      <HomeWrapper>
        <HomeLogo>
          {image}
          <HomeItem>
            {name}
            {description}
            <ButtonContent>
              <BtnSuccess>CV-Download</BtnSuccess>
            </ButtonContent>
          </HomeItem>
        </HomeLogo>
      </HomeWrapper>
      <>
        <Experiences />
      </>
    </HomeContainer>
  )
}

export default Home




/*import React from 'react';
import Experiences from '../experiences/Experiences';
import {HomeContainer,Logo,Header,HomeItem,HomeWrapper,Span,Paragraph,Button,HomeLogo} from '../../_Styles/Home.styled';
import Contact from '../contact/Contact';
const Home = () => {
  return (
    <HomeContainer>
      <HomeWrapper>
        <HomeLogo>
          <Logo src='./foto.png' alt='Christian' />
          <HomeItem>
            <Header>Hi, i'm  <Span>Christian</Span>👨🏾‍💻</Header>
            <Paragraph> Build front and back end applications.</Paragraph>
            <Button className='btn btn-success'>CV-Download</Button>
          </HomeItem>
        </HomeLogo>
      </HomeWrapper>
      <>
        <Experiences />
      </>
      <>
        <Contact />
      </>
    </HomeContainer>
)}
export default Home;*/
