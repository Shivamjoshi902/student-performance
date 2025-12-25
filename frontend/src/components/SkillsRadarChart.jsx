import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const SkillsRadarChart = ({ scores }) => {
  const data = {
    labels: ['Pronunciation', 'Fluency', 'Vocabulary', 'Grammar'],
    datasets: [
      {
        label: 'Score',
        data: [
          scores.pronunciation,
          scores.fluency,
          scores.vocabulary,
          scores.grammar
        ],
        backgroundColor: 'rgba(59, 130, 246, 0.3)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(59, 130, 246, 1)',
      }
    ]
  };

  const options = {
    scales: {
      r: {
        min: 0,
        max: 9,
        ticks: { stepSize: 1 }
      }
    },
    plugins: {
      legend: { display: false }
    }
  };

  return (
    <div style={{ width: '300px', margin: '0 auto' }}>
      <Radar data={data} options={options} />
    </div>
  );
};

export default SkillsRadarChart;
