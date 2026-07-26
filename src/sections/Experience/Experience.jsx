import "./Experience.css";
import experience from "../../data/experience";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience__container">
        <div className="experience__heading">
          <p className="experience__eyebrow">Professional Experience</p>

          <h2>Supporting users, systems, and security operations</h2>

          <p>
            Hands-on experience across technical support, Microsoft cloud
            administration, endpoint management, and cybersecurity incident
            response.
          </p>
        </div>

        <div className="experience__list">
          {experience.map((job) => (
            <ExperienceCard
              key={job.id}
              company={job.company}
              role={job.role}
              level={job.level}
              dates={job.dates}
              location={job.location}
              summary={job.summary}
              highlights={job.highlights}
              technologies={job.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;