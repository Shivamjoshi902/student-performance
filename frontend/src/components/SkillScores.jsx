const SkillScores = ({ skills }) => {
  return (
    <div>
      <h3>Skill-wise Scores</h3>
      {Object.entries(skills).map(([skill, score]) => (
        <div key={skill}>
          <p>{skill.toUpperCase()} : {score}</p>
          <progress value={score} max={9}></progress>
        </div>
      ))}
    </div>
  );
};

export default SkillScores;
