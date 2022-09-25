import React from 'react'
import { Avater, colors, StyledFormArea, StyledFormButton, StyledTitle } from '../components/Styles'
import voteimg from'./../assets/voteimg.png';
import {Formik, Form} from 'formik';
import { TextInput } from '../components/FormLib';
import * as Yup from 'yup';
import {FiLock,FiUser} from 'react-icons/fi';
import userService from '../services/userService';
import {useNavigate} from "react-router-dom";
const Login = () => {
  const navigaye = useNavigate();
  return (
    <div>
    <StyledFormArea>
        <Avater image={voteimg}/>
        <StyledTitle color={colors.theme} size={30}>Member Login</StyledTitle>
    <Formik
    initialValues={{
        username:"",
        password:"", 
    }}
    validationSchema={
        Yup.object({
           password: Yup.string().min(8, "Password is too short").max(30,"Password is too long").required("Required"),
        })
    }
    
    onSubmit={(values,{setSubmitting})=>{
    userService.login(values).then((Response) =>{
      
      if(Response.data.data){
       var adresse=Response.data.data.adress;
        localStorage.setItem('adress',adresse)
        navigaye(`/vote`);
      }else{
        navigaye("/");
      }
  }).catch((error) =>{
      console.log(error);
      
  });
    }}
    >
      {() => (
        <Form>
         <TextInput 
         name="username" 
          type="text"
           label="UserName" placeholder="FAB120798"
           icon={<FiUser/>}
           />
          
           <TextInput
           name="password" 
           type="password"
            label="Password" placeholder="***********"
            icon={<FiLock/>}
            />
            <StyledFormButton type='submit'>
                Login
            </StyledFormButton>
        </Form>
      )}  
    </Formik>
    </StyledFormArea>
    </div>
  )
}

export default Login