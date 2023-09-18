import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Wallet from './pages/Wallet';
import Dashboard from './dashboardpages/Dashboard';
import Customer from './dashboardpages/Customer';
import Transactions from './dashboardpages/Transactions'
import AddcoinModal from './dashboardpages/AddcoinModal';
import Africoin from './dashboardpages/Africoin';
import EditCoin from './dashboardpages/EditCoin';

function App() {

  return (

    <div   className='h-full w-full' >
    <Router>
    
        <Routes>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/' element={<LandingPage/>}/>
       <Route  path='/wallet' element={ <Wallet/>}/>
       <Route  path='/dashboard' element={ <Dashboard/>}/>
       <Route  path='/customers' element={ <Customer/>}/>
       <Route path='/transactions' element={<Transactions/>}/>
       <Route path='/addcoinmodal' element={<AddcoinModal/>}/>
       <Route path='/africoin' element={<Africoin/>}/>
       <Route path='/edit-coin' element={<EditCoin/>}/>


        </Routes>
    
     </Router>
    </div>
  
  )
}

export default App
