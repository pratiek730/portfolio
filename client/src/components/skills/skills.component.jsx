import { skillDisplay } from "../../assets/icons/skills.icons";
import SkillItem from "../skill-item/skill-item.component";

import './skills.styles.css'

function Skills() {
    return ( 
        <div className="skills-container">

            <div className="skills-title">
                Core Skills
            </div>





            <div className="skills-list-container">
                {skillDisplay.map((data) => (
                    <SkillItem key={data.id} icon = {data.image} title={data.title} description={data.subtitle} />
                ))}
            </div>
            
        </div>
     );
}

export default Skills;