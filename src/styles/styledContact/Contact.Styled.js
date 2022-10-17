import styled from "styled-components";

export const ContactContainer = styled.div`
    background: linear-gradient(to bottom, #2f2360 -13%, #f5f5f5 105%);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 5%;
    border-radius: 40%;
    border: 8px solid transparent;
    @media screen and (max-width: 820px) {
        align-items: center;
        justify-content: center;
    }
`;

export const ContactWapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 65%;
    padding-bottom: 8%;
`;

export const Label = styled.div`
    display: flex;
    flex-direction: column;
`;

export const LabelItem = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ContactInput = styled.input`
    display: block;
    justify-content: center;
    color: #2f2360;
    text-indent: 5%;
    width: 100%;
    background-color: linear-gradient(to right, #f5f5f5 30%, #ffffff 77%);//#fffff5;
    box-shadow: 0px 3px 10px 0px rgb(47, 35, 96);
    height: 35px;
    border-radius: 10px;
    margin-top: 15px;
    margin-bottom: 20px;
    margin-right: 10px;
    box-sizing: border-box;
`;

export const H2 = styled.h2`
    color: #2f2360;
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;
`;

export const ContactForm = styled.form`
    background: whitesmoke;
    border: 3px ;
    text-align: left;
    padding: 5%;
    border-radius: 25px;
    box-sizing: border-box;
    box-shadow: 0px 3px 0px 2px rgba(0,0,0,0.1), 
                0px 6px 0px 4px rgba(0,0,0,0.1), 
                0px 9px 0px 6px rgba(0,0,0,0.1), 
                0px 12px 0px 8px rgba(0,0,0,0.1),  
                5px 5px 11px 5px rgb(47, 35, 96);
`;

export const ContactTextarea = styled.textarea`
    color: #2f2360;
    text-indent: 5%;
    width: 100%;
    background-color: linear-gradient(to right, #f5f5f5 30%, #ffffff 77%);//#fffff5;
    box-shadow: 0px 0px 10px 8px rgb(47, 35, 96);
    height: 150px;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    box-sizing: border-box;
    resize: none;
`;

export const ButtonContent = styled.div`
    margin-top: 2%;
    padding: 1%;
`;

export const ContactFieldset = styled.fieldset`
    border: 2px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    margin: 20px 0;
    legend {
        padding: 0 10px;
    }
    label {
        padding-right: 20px;
    }
    input{
        margin-right: 10px;
    }
`;

export const ContactError = styled.div`
    color: red;
    margin-top: -2%;
    font-weight: 900;
`;