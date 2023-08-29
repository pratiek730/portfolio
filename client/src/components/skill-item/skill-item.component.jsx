import './skill-item.styles.css'

function SkillItem({icon, title, description}) {
    return ( 
        <div className="skill-item-container">
            <img src={icon} className='skill-item-icon' alt="icon here" />
            <div className="skill-item-title"> {title} </div>
            <div className="skill-item-description"> {description} </div>
        </div>
     );
}

export default SkillItem;