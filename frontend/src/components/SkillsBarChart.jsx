import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SkillsBarChart = ({ scores }) => {
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
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(139, 92, 246, 0.8)'
        ],
        borderRadius: 8,
      }
    ]
  };

  const options = {
    indexAxis: 'y',
    scales: {
      x: { min: 0, max: 9 }
    },
    plugins: {
      legend: { display: false }
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '500px' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default SkillsBarChart;
