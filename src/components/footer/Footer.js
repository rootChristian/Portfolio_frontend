import React from 'react';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillYoutube,
  AiFillFacebook
} from 'react-icons/ai';
import {
  FooterLink,
  FooterLinkTitle,
  FooterLinksContainer,
  FooterLinksItems,
  FooterLinksWrapper,
  FooterContainer,
  SocialIcons,
  Logo,
  FooterWrapper,
  FooterLeft,
  FooterCenter,
  FooterRight,
  SocialItems,
  LogoH4
} from '../../styles/styledFooter/Footer.Styled';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>SOCIAL MEDIA</FooterLinkTitle>
            <FooterLink to='/experiences/educational'>Github</FooterLink>
            <FooterLink to='/experiences/personal'>Linkedin</FooterLink>
            <FooterLink to='/experiences/professional'>Twitter</FooterLink>
            <FooterLink to='/experiences/professional'>Instagram</FooterLink>
            <FooterLink to='/privacy'>Privacy Theme</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>ABOUT ME</FooterLinkTitle>
            <FooterLink to='/experiences/educational'>Educational Path</FooterLink>
            <FooterLink to='/experiences/personal'>Personal Experience</FooterLink>
            <FooterLink to='/experiences/professional'>Professional Experience</FooterLink>
            <FooterLink to='/privacy'>Privacy Theme</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>CONTACT ME</FooterLinkTitle>
            <FooterLink to='/sending'>Sending a Message</FooterLink>
            <FooterLink to='/privacy'>Privacy Theme</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <FooterWrapper>
        <FooterLeft to='/'>
          <Logo src="https://firebasestorage.googleapis.com/v0/b/chagest-eshop.appspot.com/o/Logo%2Flogo.png?alt=media&token=9b7a9042-f7d7-46c7-b321-bc5cd40cd335" alt='logo' />
          <LogoH4>CHAGEST</LogoH4>
        </FooterLeft>
        <FooterCenter>
          © Copyright 2022 - All Rights Reserved by Christian KEMGANG 👨🏾‍💻
        </FooterCenter>
        <FooterRight>
          <SocialItems>
            <SocialIcons href="https://google.com">
              <AiFillGithub size="1.5rem" />
            </SocialIcons>
            <SocialIcons href="https://google.com">
              <AiFillLinkedin size="1.5rem" />
            </SocialIcons>
            <SocialIcons href="https://google.com">
              <AiFillTwitterSquare size="1.5rem" />
            </SocialIcons>
            <SocialIcons href="https://google.com">
              <AiFillInstagram size="1.5rem" />
            </SocialIcons>
            <SocialIcons href="https://google.com">
              <AiFillFacebook size="1.5rem" />
            </SocialIcons>
            <SocialIcons href="https://google.com">
              <AiFillYoutube size="1.5rem" />
            </SocialIcons>
          </SocialItems>
        </FooterRight>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;