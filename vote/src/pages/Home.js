import {StyledSubTitle, StyledTitle,Avater,StyledButton} from './../components/Styles';
import voteimg from'./../assets/voteimg.png';

const Home = () => {
  localStorage.setItem('adress',null)
  return (
    <div>
<div style={{
    position:"absolute",
    top:0,
    left:0,
    backgroundColor: "transparent",
    width:"100%",
    padding:"15px",
    display:"flex",
    justifyContent:"flex-start",
}}>
    <Avater image={voteimg}/>
</div>
<StyledTitle size={65}>
Welcome to AABE vote 
</StyledTitle>
<StyledSubTitle size={27}>
  login to vote 
</StyledSubTitle>
<StyledButton size={300} to="/login">login</StyledButton>
    </div>
  );
}

export default Home