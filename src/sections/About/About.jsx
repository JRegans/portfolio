import "./About.css";

function About() {
  return(

    <section className="about" id='about'>
        <div className="about__container">
            <div className="about__heading">
                <p className="about__eyebrow">About Me</p>
                <h2>IT support experience with a growing security focus</h2>
            </div>

            <div className="about__content"> 
                <p>
                    I supoort users, cloud services, identities, endpoints, and 
                    security operations across Microsoft environments. 
                </p>

                <p>
                    My experience includes Microsoft 365 administration, Entra ID,
                    endpoint troubleshooting, incident response, malware remediation, 
                    account compromise investigation, and hands-on support across
                    varied client environments.
                </p>

                <p>
                    I am continuing to deepen my cybersecurity skills through
                    Security+ preperation, SOC training, and practical work with 
                    security tools and investigations. 
                </p>

            </div>
        </div>

    </section>

  );

}

export default About;