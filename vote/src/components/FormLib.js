import { useField } from 'formik'
import { useState } from 'react';
import { StyledLabel, StyledTextInput,StyedIcon, ErrorMsg} from './Styles';
import {FiEyeOff,FiEye} from 'react-icons/fi';
export const TextInput = ({icon,...props})=>{
const [field,meta]= useField(props);
const [show, setShow] = useState(false);
return(
    <div style={{ position:"relative"}}>
        <StyledLabel htmlFor={props.name}>
{props.label}
        </StyledLabel>
        {props.type !=="password" &&
        <StyledTextInput
        {...field}
        {...props}
        />}
        {props.type ==="password" &&
        (<StyledTextInput
            {...field}
            {...props}
            type={show ? "text" : "password"}
            />
            )}
        <StyedIcon>
            {icon}
        </StyedIcon>
        {
            props.type==="password" && (
            <StyedIcon onClick={()=> setShow(!show)} right>
                {show && <FiEye/>}
                {!show &&<FiEyeOff/>}
            </StyedIcon>
        )}
        {meta.touched && meta.error ? (
            <ErrorMsg>{meta.error}</ErrorMsg>
        ):(
            <ErrorMsg style={{visibility: "hidden"}}>.</ErrorMsg>   
        )}
    </div>
)
}