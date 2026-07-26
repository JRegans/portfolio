import "./SkillCard.css";

function SkillCard({ category, description, items }) {
  return (
    <article className="skill-card">
      <h3>{category}</h3>

      <p>{description}</p>

      <ul className="skill-card__list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

export default SkillCard;