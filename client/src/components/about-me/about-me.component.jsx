
import './about-me.styles.css'
import image from '../../assets/images/Pratiek Image.jpg'

import {socialMediaIcons} from '../../assets/icons/skills.icons'

function AboutMe() {
    return ( 
        <div className='about-me-page'>
            <div className="about-right-pane">
                <img src={image} alt="" className='about-image'/>
            </div>
            <div className="about-left-pane">
                <div className="about-left-head">Pratiek Parashar</div>
                <div className="about-left-sub">Web Developer</div>
                {/* <input type="button" value="Read My Blog" className='btn btn-primary about-blog-button'/> */}
                <div className="about-left-data">
                I am a passionate coder by day and an explorer of the Digital Frontier by night. As a dedicated full stack web developer, I thrive on translating imaginative concepts into functional digital experiences. My relentless drive for innovation is matched by my commitment to refining user experiences and turning clients' visions into reality.
                <br/><br/>
                As a backend developer, I specialize in the MERN (MongoDB, Express.js, React, Node.js) stack. This comprehensive expertise allows me to architect databases, optimize back-end processes, and create seamless connections between different components of web applications.
                <br/><br/>
                When I'm not immersed in crafting elegant code and solving complex challenges, you'll find me actively collaborating on projects that span the entire stack. Whether I'm architecting databases, creating dynamic user interfaces, or optimizing back-end processes, I am truly in my element.
                <br/><br/>
                I invite you to connect with me today to discover how I can elevate your digital initiatives with my full stack expertise.
                </div>
                <div className="social-media-links">
                    {
                        socialMediaIcons.map((icon) => (
                            <div key={icon.id} >
                                <a href={icon.link} >
                                <img className='about-icon' src={icon.image} alt={icon.name} />
                                </a>
                            </div>

                        ))
                    }
                </div>
            </div>
            
        </div>
     );
}

export default AboutMe;