import "./Skills.css";
import skills from "../../data/skills";
import SkillCard from "../../components/SkillCard/SkillCard";

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills__container">
        <div className="skills__heading">
          <p className="skills__eyebrow">Capabilities</p>
          <h2>Technical skills built through support and security work</h2>
          <p>
            A combination of hands-on IT operations, Microsoft administration,
            cybersecurity investigations, networking, and frontend development.
          </p>
        </div>

        <div className="skills__grid">
          {skills.map((skill) => (
            <SkillCard
              key={skill.id}
              category={skill.category}
              description={skill.description}
              items={skill.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;