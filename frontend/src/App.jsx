import { useEffect, useState } from "react";

import OverallScore from "./components/OverallScore";
import SkillScores from "./components/SkillScores";
import Feedback from "./components/Feedback";
import SkillsRadarChart from "./components/SkillsRadarChart";
import SkillsBarChart from "./components/SkillsBarChart";
import OverallScoreDoughnut from "./components/OverallScoreDoughnut";

import "./App.css";

function App() {
  const [report, setReport] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/report")
      .then((res) => res.json())
      .then((data) => setReport(data));
  }, []);

  if (!report) {
    return <p className="loading">Loading report...</p>;
  }

  return (
    <div className="app-container">
      <div className="container">
        {/* Header */}
        <header className="app-header">
          <h1>Student Speaking Assessment Report</h1>
          <p className="subtitle">
            Detailed performance analysis based on speaking skills
          </p>
        </header>

        {/* Overall Score Section */}
        <section className="card grid-2">
          <OverallScore score={report.overallScore} />
          <OverallScoreDoughnut score={report.overallScore} />
        </section>

        {/* Skills Section */}
        <section className="card">
          <h2>Skill Breakdown</h2>
          <SkillScores skills={report.skills} />

          <div className="grid-2">
            <SkillsRadarChart scores={report.skills} />
            <SkillsBarChart scores={report.skills} />
          </div>
        </section>

        {/* Feedback Section */}
        <section className="card">
          <Feedback score={report.overallScore} />
        </section>
      </div>
    </div>
  );
}

export default App;


