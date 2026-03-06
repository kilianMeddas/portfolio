import me from "./assets/me.jpg"
import EPITA from "./assets/EPITA.png"
import IA_Institut from "./assets/IA_Institut.png"
import Griffith from "./assets/Griffith.jpg"

import "./css/About.css"
const About = () => {
    return (
        
        <body>
            <div className="logo">
                <img src={EPITA} alt="EPITA" className="EPITA"/>
                <img src={me} alt="me" />
                <img src={Griffith} alt="Griffith" className="Ecole"/>
                <img src={IA_Institut} alt="IA_Institut" className="Ecole"/>
            </div>

            
                <section>
                    <p>
                        I'm currently studying computer science, with a focus on machine learning and backend development.<br />
                        I enjoy building intelligent systems, APIs, and scalable applications that solve real-world problems.
                    </p>
                </section>
                <section> 
                    <h2>
                        What I like to do 
                    </h2>
                    <p>
                        - Machine learning models<br/>
                        - Dockerized APIs<br/>
                        - AI-powered applications<br/>
                        - Create something really used after and not only here to keep busy myself<br/>
                    </p>
                </section>
                <section>
                    <h2>
                    What am I currently doing
                    </h2>
                    <p>
                    - Learning Java & advanced backend concepts<br/>
                    - Working on ML projects with PyTorch<br/>
                    - Exploring cloud & DevOps<br/>
                    </p>
                </section>
            </body>

    )
}

export default About;