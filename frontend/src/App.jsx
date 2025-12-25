import { useEffect, useState } from "react";
import OverallScore from "./components/OverallScore";
import SkillScores from "./components/SkillScores";
import Feedback from "./components/Feedback";

function App() {
  const [report, setReport] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/report")
      .then(res => res.json())
      .then(data => setReport(data));
  }, []);

  if (!report) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Speaking Assessment Report</h1>
      <OverallScore score={report.overallScore} />
      <SkillScores skills={report.skills} />
      <Feedback score={report.overallScore} />
    </div>
  );
}

export default App;

