// import logo from './logo.svg';

import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-content-wrapper">
          <Routes>
            <Route path='/' Component={Profile} />
            <Route path='/dialogs' Component={Dialogs} />
            <Route path='/dialogs/qvifle' Component={Dialogs} />
            <Route path='/dialogs/artcevvv' Component={Dialogs} />
            <Route path='/dialogs/triki' Component={Dialogs} />
            <Route path='/dialogs/shish' Component={Dialogs} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}


export default App;
