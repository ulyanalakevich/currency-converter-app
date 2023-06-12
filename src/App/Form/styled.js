import styled from "styled-components";

export const Fieldset = styled.fieldset`

    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 10px;
    padding: 10px;

    @media (max-width: 767px) {
        text-align: center;
      margin: 10px;
  }
`;

export const Header = styled.h2`
    padding: 5px;
    text-align: center;
    color: ${({ theme }) => theme.colors.green};
`;

export const LabelText = styled.span`
    margin: 0 5px;
    width: 100%;
    max-width: 300px;
    margin-right: 10px;
    display: inline-block;

    @media (max-width: 767px) {
      margin-bottom: 10px;
  }
`;

export const Component = styled.select`
    width: 150px;
    padding: 5px;
    border: 1px solid ${({ theme }) => theme.colors.green};
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 10px;
`;

export const Paragraph = styled.div`
    text-align: center;
`;

export const ButtonStyle = styled.button`
    color: ${({ theme }) => theme.colors.white};
    background-color: #016551;
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

export const Text = styled.p`
   color: grey;
   font-size: 70%;
`;

export const Loading = styled.p`
    color: ${({ theme }) => theme.colors.green};
`;

export const Fail = styled.p`
    color: crimson;
`;

export const Triangle = styled.div`
height: 0;
width: 0;
border-style: solid;
border-width: 30px 30px 50px 30px;
border-color: transparent transparent black transparent;
margin: 50px auto;
animation-name: triangle;
animation-iteration-count: infinite;
animation-duration: 1s;
transform-origin: 30px 60px ;
filter: drop-shadow(-2px -4px 2px rgba(0,0,0,0.5));

@keyframes triangle {
    from {
        transform: rotate(0deg);
        border-bottom-color: #bbb;
    }
    to {
        transform: rotate(360deg);
       border-bottom-color: ${({ theme }) => theme.colors.green};
    }
}
`