import "./hero.css";
import Button from "../../components/Button/Button";
import profileImage from "../../assets/Profile.png";

function Hero({name, title, introduction}) {
    return (
        <section className="hero">

           <div className="hero__container">
            <div className="hero__content">
                <h1>{name}</h1>
                <h2>{title}</h2>
                <p>{introduction}</p>

                <div className="hero__actions">
                    <Button href="#contact" variant="primary">Contact Me</Button>

                    <Button
                            href={`${import.meta.env.BASE_URL}Resume.pdf`}
                            target="_blank"
                            rel="noopener noreferrer"
>
                            Resume
                    </Button>
                </div>
            </div>

            <div className="hero__visual">
                <img src={profileImage} alt="John Regan" />
            </div>

           </div>

        </section>
    );
}

export default Hero;