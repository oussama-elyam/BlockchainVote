import React ,{useState,useEffect}from 'react'
import {colors,StyledFormArea, StyledTitle, StyledButton } from '../components/Styles';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import userService from './../services/userService'
ChartJS.register(ArcElement, Tooltip, Legend);

export const dataa = {
  labels: [],
  datasets: [
    {
      label: '# of Votes',
      data: [],
      backgroundColor: [
        'rgba(235, 14, 88, 0.3)',
        'rgba(54, 162, 235, 0.3)',
        'rgba(255, 206, 86, 0.3)',
        'rgba(34, 161, 59, 0.3)',
      ],
      borderColor: [
        'rgba(235, 14, 88, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(34, 161, 59, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
const Result = () => {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchDate = async ()=>{
      setLoading(true);
      try {
          const response = await userService.getResult();
       
          let length =  response.data.length;
          var labelsS=[];
          var dataS=[];
          for (let step = 0; step <length; step++) {
            labelsS.push(response.data[step].cond)
            dataS.push(response.data[step].count)
          }
          dataa.labels=labelsS;
          dataa.datasets.forEach(async (datasets) => {
            datasets.data=dataS;
          });
      }catch(error){
          console.log(error);
      }
      setLoading(false);
    };
    fetchDate();
  }, []);
  return (
    <div>
    <br></br>
        <StyledButton size={130} to="/vote">Vote</StyledButton>   
        <StyledButton size={40} to="/home">Log Out</StyledButton> 
        <br></br><br></br><br></br>
        <StyledFormArea >
        
        <StyledTitle color={colors.theme} size={30}>Result of the Vote</StyledTitle>
        {!loading && (
        <Pie data={dataa} style={{width: "380px",height:'380px' }} />)}
        </StyledFormArea>
        </div>
  )
}

export default Result