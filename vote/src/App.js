import {StyledContainer} from './components/Styles';
import Home from './pages/Home';

import { BrowserRouter as Router,Route ,Routes} from 'react-router-dom';
import Login from './pages/login';
import Vote from './pages/Vote';
import Result from './pages/Result';
function App() {
  return (
    <Router>
    <StyledContainer>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/vote' element={<Vote/>}/>
  <Route path='/result' element={<Result/>}/>
</Routes>
    </StyledContainer>
    </Router>
  );
}

export default App;
