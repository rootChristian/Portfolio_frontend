import React, { useState } from 'react';
import {
    DarkMode, H1scrool, HeaderCenter, HeaderContainer,
    HeaderLeft, HeaderRight, HeaderRightItems, HeaderWrapper,
    HeaderWrapperLinks, Logo, LogoH1, MobileIcon, NavItem, NavLinks,
    NavMenu, SocialIcons, SocialItems
} from '../../styles/styledHeader/Header.Styled';
import Typical from "react-typical";
import Flip from 'react-reveal/Flip';
import { FaBars, FaTimes } from 'react-icons/fa';
import {
    AiFillGithub,
    AiFillInstagram,
    AiFillLinkedin,
    AiFillTwitterSquare,
    AiFillYoutube,
    AiFillFacebook,
} from 'react-icons/ai';
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";

const Header = () => {

    const [click, setClick] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const handleClick = () => setClick(!click);
    const handleDarkMode = () => setDarkMode(!click);

    return (
        <HeaderContainer>
            <HeaderWrapper>
                <HeaderLeft to='/'>
                    <Logo src="https://firebasestorage.googleapis.com/v0/b/chagest-eshop.appspot.com/o/Logo%2Flogo.png?alt=media&token=9b7a9042-f7d7-46c7-b321-bc5cd40cd335" alt='logo' />
                    <LogoH1>CHAGEST</LogoH1>
                </HeaderLeft>
                <HeaderCenter>
                    <Flip center>
                        <H1scrool $mode="title">
                            {' '}
                            <Typical
                                loop={Infinity}
                                steps={[
                                    "Ethusiastic IT ❤️‍🔥",
                                    1000,
                                    "Full Stack Developper 💻",
                                    1000,
                                    "Open to other experience 💻",
                                    1000,
                                ]}
                            />
                        </H1scrool>
                    </Flip>
                </HeaderCenter>
                <HeaderRight>
                    <HeaderRightItems>
                        <DarkMode onClick={handleDarkMode} darkMode={darkMode}>
                            {darkMode ? <HiMoon /> : <CgSun />}
                        </DarkMode>
                        <SocialItems>
                            <SocialIcons href="https://google.com">
                                <AiFillGithub size="1.8rem" />
                            </SocialIcons>
                            <SocialIcons href="https://google.com">
                                <AiFillLinkedin size="1.8rem" />
                            </SocialIcons>
                            <SocialIcons href="https://google.com">
                                <AiFillTwitterSquare size="1.8rem" />
                            </SocialIcons>
                            <SocialIcons href="https://google.com">
                                <AiFillInstagram size="1.8rem" />
                            </SocialIcons>
                            <SocialIcons href="https://google.com">
                                <AiFillFacebook size="1.8rem" />
                            </SocialIcons>
                            <SocialIcons href="https://google.com">
                                <AiFillYoutube size="1.8rem" />
                            </SocialIcons>
                        </SocialItems>
                    </HeaderRightItems>
                </HeaderRight>
            </HeaderWrapper>
            <HeaderWrapperLinks>
                <NavMenu onClick={handleClick} click={click}>
                    <NavItem>
                        <NavLinks to='/'>Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/experiences'>Experiences</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/about'>About Me</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/contact'>Contact Me</NavLinks>
                    </NavItem>
                </NavMenu>
                <MobileIcon onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </MobileIcon>
            </HeaderWrapperLinks>
        </HeaderContainer>
    )
}

export default Header
