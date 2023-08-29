import './App.css';
import Navbar from './components/navbar/navbar.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/home-page/home-page.component';
import AboutMe from './components/about-me/about-me.component';
import SkillsPage from './pages/skills-page.component/skills-page.component';



function App() {
  return (
    <div className="App">


        <Routes>
          <Route path = '/'  element = {<Navbar/>} >
            <Route index element = {<HomePage/>} />
            <Route path='/aboutme' element = {<SkillsPage/>} />
          </Route>
        </Routes>



    </div>
  );
}

export default App;
