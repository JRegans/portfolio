import "./ExperienceCard.css";

function ExperienceCard({
  company,
  role,
  level,
  dates,
  location,
  summary,
  highlights,
  technologies,
}) {
  return (
    <article className="experience-card">
      <div className="experience-card__header">
        <div>
          <p className="experience-card__company">{company}</p>
          <h3>{role}</h3>
          <p className="experience-card__level">{level}</p>
        </div>

        <div className="experience-card__meta">
          <span>{dates}</span>
          <span>{location}</span>
        </div>
      </div>

      <p className="experience-card__summary">{summary}</p>

      <ul className="experience-card__highlights">
        {highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>

      <ul className="experience-card__technologies">
        {technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </article>
  );
}

export default ExperienceCard;