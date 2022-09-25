import styled from 'styled-components';
import background from'./../assets/bg.png';

import {Link} from 'react-router-dom';
export const colors ={
    primary:'#fff',
   theme:"#330033",
    light1:"#F3F4F6",
    light2:"#E5E7EB",
    dark1:"#1F2937",
    dark2:"#4B5563",
    dark3:"#9CA3AF",
    red:"#DC2626",
    grey:"#E5E4E2"
}
export const StyledContainer = styled.div`
margin:0;
min-height:100vh;
display:flex;
justify-content:center;
align-items:center;
background:linear-gradient(0deg, rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${background});
background-size:cover;
background-attachment:fixed;
`;
//Home
export const StyledTitle= styled.h2`
font-size: ${(props) => props.size}px;
text-align : center;
color: ${(props) => props.color ? props.color:colors.primary};
padding:5px;
margin-bottom:20px;
`;
export const StyledSubTitle = styled.p`
font-size: ${(props) => props.size}px;
text-align : center;
color: ${(props) => props.color ? props.color:colors.primary};
padding:5px;
margin-bottom:25px;
`;
export const Avater = styled.div`
width:85px;
height:85px;
border-radius:50px;
background-image: url(${props => props.image});
background-size:cover;
background-position:center;
margin:auto;
`;
export const StyledButton = styled(Link)`
padding:15px;
width:150px;
background-color : transparent;
font-size:19px;
border:3px solid ${colors.primary};
border-radius:25px;
color:${colors.primary};
text-align: center;
transition: ease-in-out 0.3s;
margin-left:${(props) => props.size}px;

&:hover{
    background-color : ${colors.primary}; 
    color:${colors.theme};
    cursor:pointer;
}
`;
export const StyledTextInput = styled.input`
width:280px;
padding:15px;
padding-left:50px;
font-size:17px;
color:${colors.dark1};
background-color : ${colors.light2};
border:1;
outline :0;
display:block;
margin:5px auto 10px auto;
transition: ease-in-out 0.3s;
${(props) => props.invalid && `background-color : ${colors.red}; color : ${colors.primary};` }
&:focus{
    background-color : ${colors.dark2}; 
    color : ${colors.primary};
}
`;
export const StyledLabel =styled.p`
text-align:left;
font-size:15px;
font-weight:bold;
`;
export const StyledFormArea = styled.div`
background-color : ${props => props.bg || colors.primary } ; 
text-align:center;
padding:45px 55px;
`;
export const  StyledFormButton = styled.button`
padding:10px;
width:150px;
background-color : transparent;
font-size:16px;
border:2px solid ${colors.theme};
border-radius:25px;
color:${colors.theme};
text-align: center;
transition: ease-in-out 0.3s;

&:hover{
    background-color : ${colors.theme}; 
    color:${colors.primary};
    cursor:pointer;
}
`;

export const ErrorMsg=styled.div`
font-size:14px;
color:${colors.red};
margin-top: -5px;
margin-bottom:10px;
text-align: left;
`;
export const ExtraText = styled.p`
font-size:${(props)=>props.size}px;
text-align: center;
color:${(props)=>(props.color? props.color : colors.dark2 )};
padding: 2px;
margin-top: 10px;
`;

export const StyedIcon = styled.p`
color: ${colors.dark1};
position: absolute;
font-size:21px;
top:35px;
${(props) => props.right && `right:15px;`}
${(props) => !props.right && `left:15px;`}

`;
export const StyledTh = styled.th`

margin-top: 5px;
margin-left:44px;
color: ${colors.theme};
width:250px;
height:140px;

`;
export const StyledLabel1 =styled.p`
margin-top :10px;
text-align:center;
font-size:20px;
font-weight:bold;

`;
export const Avatervote = styled.div`
width:150px;
height:140px;
border-radius:10px;
background-image: url(${props => props.image});
background-size:cover;
background-position:center;
margin:auto;
`;
export const StyledButtonvote = styled.button`
padding:10px;
width:150px;
background-color : ${colors.theme};
font-size:15px;
border:3px solid ${colors.primary};
color:${colors.primary};
text-align: center;
transition: ease-in-out 0.3s;
margin-left:${(props) => props.size}px;
margin-top:7px;
margin-bottom:12px;
&:hover{
    background-color : ${colors.primary}; 
    color:${colors.theme};
    cursor:pointer;
}
`;
