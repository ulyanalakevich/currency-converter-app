import styled from "styled-components";

export const Fieldset = styled.fieldset`
    background-color: #fff;
    border-radius: 10px;
    padding: 10px;
`;

export const Header = styled.h2`
    padding: 5px;
    text-align: center;
    color: rgb(1, 101, 81);
`;

export const LabelText = styled.span`
    margin: 0 5px;
    width: 100%;
    max-width: 300px;
    margin-right: 10px;
    display: inline-block;
`;

export const Component = styled.select`
    width: 150px;
    padding: 5px;
    border: 1px solid rgb(1, 101, 81);
    background-color: rgba(1, 101, 81, 0.037);
`;

export const Paragraph = styled.div`
    text-align: center;
`;

export const ButtonStyle = styled.button`
    color: rgb(255, 255, 255);
    background-color: rgb(1, 101, 81);
    border: none;
    box-shadow: 2px 2px 8px #aaa;
    transition: 0.5s;
    border-radius: 5px;
    padding: 5px;
    width: 100%;

     &:hover {
      background-color: hsl(168, 98%, 25%);
      transform: scale(1.02);
      border: none;
    }

     &:active {
      background-color: hsl(168, 98%, 30%);
      transform: scale(1.02);
    }
`;