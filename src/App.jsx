import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Wallet from './pages/Wallet';

function App() {

  return (
   <div >

 
    <div >
    <Router>
    
        <Routes>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/' element={<LandingPage/>}/>
       <Route  path='/wallet' element={ <Wallet/>}/>
        </Routes>
    
     </Router>
    </div>
   </div>
  )
}

export default App
