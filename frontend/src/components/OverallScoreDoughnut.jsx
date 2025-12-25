import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const OverallScoreDoughnut = ({ score }) => {
  const data = {
    labels: ['Score', 'Remaining'],
    datasets: [
      {
        data: [score, 9 - score],
        backgroundColor: ['rgba(16, 185, 129, 0.9)', 'rgba(229, 231, 235, 0.5)'],
        borderWidth: 0,
        cutout: '70%'
      }
    ]
  };

  const options = {
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false }
    }
  };

  return (
    <div style={{ width: '180px', position: 'relative' }}>
      <Doughnut data={data} options={options} />
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center'
      }}>
        <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>{score}</span>
        <span style={{ fontSize: '1rem', color: '#6b7280' }}>/9</span>
      </div>
    </div>
  );
};

export default OverallScoreDoughnut;
