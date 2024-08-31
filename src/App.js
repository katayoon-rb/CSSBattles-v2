import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainPage from './components/MainPage';
import DailyTargets from './components/DailyTargets'
import Month from './components/DailyTargets/Month';
import Battles from './components/Battles'
import Battle from './components/Battles/Battle'

function App() {
  return (
    <Router>
      <div className='container'>
        <Routes>
          <Route exact path='/' element={ <MainPage /> }/>
          <Route path='/DailyTargets' element={ <DailyTargets /> } />
          <Route path='/DailyTargets/:params' element={ <Month /> } />
          <Route path='/Battles' element={ <Battles /> } />
          <Route path='/Battles/:params' element={ <Battle /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
