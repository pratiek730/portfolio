import './intro.styles.css'
function Intro() {
    return ( 
        <div className="intro-container">
            <div className="intro-textbox">
                <div className="intro-text-head">{'<'}I am a Web Developer {'/>'} </div>
                <div className="intro-text-sub">I Turn Code into Captivating Online Experiences</div>
                {/* <input type="button" value="About Me" className="intro-button-1" />
                <input type="button" value="Projects" className="intro-button-2" /> */}
            </div>
        </div>
        
     );
}

export default Intro;