import React from 'react'
import {
    ExperienceItems,
    ExperienceItem,
    ExperienceContainer,
    ExperienceWrapper,
    Title,
    Item,
    Title2
} from '../../styles/styledExperiences/Experiences.Styled';

const Experiences = () => {
    return (
        <ExperienceContainer>
            <ExperienceWrapper>
                <Title>Experiences</Title>
            </ExperienceWrapper>
            <ExperienceItems>
                <ExperienceItem>
                    <Title2>Professional</Title2>
                    <Item>⏺ 2021</Item>
                    <Item>⏺ 2022</Item>
                </ExperienceItem>
                <ExperienceItem>
                    <Title2>Personal</Title2>
                    <Item>🔘 2021</Item>
                    <Item>🔘 2022</Item>
                </ExperienceItem>
                <ExperienceItem>
                    <Title2>Educational</Title2>
                    <Item>⏺ 2020</Item>
                    <Item>⏺ 2021</Item>
                    <Item>⏺ 2022</Item>
                </ExperienceItem>
            </ExperienceItems>
        </ExperienceContainer>
    )
}

export default Experiences;
