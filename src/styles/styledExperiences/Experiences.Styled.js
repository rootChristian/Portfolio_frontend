import styled from "styled-components";

export const ExperienceContainer = styled.div`
    background: linear-gradient(to bottom, #2f2360 -13%, #f5f5f5 105%);
    display: flex;
    flex-direction: column;
    border: 3px solid transparent;
    margin: 5%;
    padding: 6%;
    @media screen and (max-width: 820px) {
        align-items: center;
    } 
`;

export const ExperienceWrapper = styled.div`
    background: linear-gradient(to left, #f5f5f5 30%, #ffffff 77%);
    text-align: center;
    margin-top: -6%;
    margin-bottom: 5%;
    border: 3px solid bisque;
    border-radius: 25px;
    @media screen and (max-width: 820px){
      flex-direction: column;
    }
`;

export const Title = styled.h1`
    color: #2f2360;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.5rem;
`;
export const Title2 = styled.h2`
    color: #2f2360;
    text-transform: capitalize;
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
`;

export const ExperienceItems = styled.div`
    display: flex;
    justify-content: center;
    background: linear-gradient(to bottom, #2f2360 -13%, #f5f5f5 105%);
    border: 2px solid transparent;
    margin-top: -3%;
    margin-bottom: -5%;
    padding: 15px;
    border-radius: 25px;
    @media screen and (max-width: 820px){
      flex-direction: column;
    }
`;

export const ExperienceItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    width: 280px;
    border-radius: 25px;
    background: linear-gradient(to left, #f5f5f5 30%, #ffffff 77%);
    @media screen and (max-width: 420px){
        margin: 0;
        padding:8px;
        width: 100%;
    }
`;

export const Item = styled.ul`
    list-style-type: circle;
    font-weight: bold;
    place-self: center;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    color: #2f2360;
    padding: 2px;
    border-radius: 5px;
    &:hover {
        background: linear-gradient(to bottom, #666699 32%, #ff99cc 89%);
        transform: scale(1);
        cursor: pointer;
    }
    &:active {
        background: linear-gradient(to bottom, #2f2360 32%, #ff99cc 89%);
    };
`;



