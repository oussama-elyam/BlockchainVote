import React ,{useState}from 'react'
import {Avatervote,colors, StyledTh,StyledFormArea, StyledLabel1, StyledTitle, StyledButtonvote, StyledButton } from '../components/Styles';
import bg1 from'./../assets/bg1.png';
import bg11 from'./../assets/bg11.png';
import userService from '../services/userService';
const Vote = () => {
   const [Cond, setCond] = useState({
      cond:"",
      adress:""
  });
   const voting = (e,cond) =>{
      e.preventDefault();
      
      setCond({...Cond,cond});
      Cond.cond=cond;
      Cond.adress=localStorage.getItem('adress');
      userService.vote(Cond).then((response)=>{
         alert(response.data.result);
        
         
      }).catch((error) =>{
         console.log(error)
      });
    }
  return (
    <div>
    <br></br>
        <StyledButton size={200} to="/result">Result</StyledButton>   
        <StyledButton size={40} to="/home">Log Out</StyledButton> 
        <br></br><br></br><br></br>
        <StyledFormArea bg={colors.grey}>
        <StyledTitle color={colors.theme} size={30}>Member Vote</StyledTitle>
        <table>
        <thead>
            <tr>
            <StyledTh><Avatervote image={bg11}/><StyledLabel1>Fatiha</StyledLabel1><StyledButtonvote onClick={(e,cond)=>voting(e,"fatiha")} size={0}>Vote</StyledButtonvote></StyledTh>
            <StyledTh><Avatervote image={bg1}/><StyledLabel1>Driss</StyledLabel1><StyledButtonvote onClick={(e,cond)=>voting(e,"driss")} size={0}>Vote</StyledButtonvote></StyledTh>
                  </tr>
                 
                  <tr>
            <StyledTh><Avatervote image={bg11}/><StyledLabel1>Fatima</StyledLabel1><StyledButtonvote onClick={(e,cond)=>voting(e,"fatima")} size={0}>Vote</StyledButtonvote></StyledTh>
               <StyledTh><Avatervote image={bg1}/><StyledLabel1>Oussama</StyledLabel1><StyledButtonvote onClick={(e,cond)=>voting(e,"oussama")} size={0}>Vote</StyledButtonvote></StyledTh>
                  </tr>
                  </thead>    
        </table>
                
        </StyledFormArea>
        </div>
  )
}

export default Vote