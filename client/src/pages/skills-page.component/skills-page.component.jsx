import Intro from "../../components/intro/intro.component";
import Skills from "../../components/skills/skills.component";
import './skills-page.styles.css'

function SkillsPage() {
    return ( 
        <div className="skills-page">
            <Intro />
            <Skills />
        </div>
     );
}

export default SkillsPage;