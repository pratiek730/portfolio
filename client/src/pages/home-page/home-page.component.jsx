import AboutMe from "../../components/about-me/about-me.component";
import Intro from "../../components/intro/intro.component";
import Skills from './../../components/skills/skills.component';
import './home-page.styles.css'

function HomePage() {
    return ( 
        <div className="home-page">
            <AboutMe/>
        </div>
     );
}

export default HomePage;