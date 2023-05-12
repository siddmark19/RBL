import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IndexPage from '../components/IndexPage';
//importing chart libraries
import { Line, Pie } from 'react-chartjs-2';
import 'chart.js/auto';



const ViewPage = () => {
  const [formData, setFormData] = useState([]);
  


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/view');
      setFormData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getResult = (entry) => {
    const { chol, fbs, restecg } = entry;
    const result = parseInt(chol) > 200 || parseInt(fbs) > 120 || parseInt(restecg) === 2 ? 'Positive' : 'Negative';

    return result;
  };

  const highlightKeyword = (result) => {
    if (result === 'Positive') {
      return <span className="text-danger">{result}</span>;
    } else if (result === 'Negative') {
      return <span className="text-success">{result}</span>;
    } else {
      return result;
    }
  };

  //implementing chart
  const generateChartData = () => {
    const positiveData = [];
    const negativeData = [];

    formData.forEach((entry) => {
      const result = getResult(entry);
      const { chol, fbs, restecg } = entry;

      if (result === 'Positive') {
        positiveData.push(parseInt(chol) + parseInt(fbs) + parseInt(restecg));
        negativeData.push(null);
      } else {
        positiveData.push(null);
        negativeData.push(parseInt(chol) + parseInt(fbs) + parseInt(restecg));
      }
    });

    return {
      labels: formData.map((entry, index) => `Entry ${index + 1}`),
      datasets: [
        {
          label: 'Positive',
          data: positiveData,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
        {
          label: 'Negative',
          data: negativeData,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };
  };

  //implementing Pie Chart
  const generatePieChartData = () => {
    const positiveCount = formData.filter((entry) => getResult(entry) === 'Positive').length;
    const negativeCount = formData.filter((entry) => getResult(entry) === 'Negative').length;

    return {
      labels: ['Positive', 'Negative'],
      datasets: [
        {
          data: [positiveCount, negativeCount],
          backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(75, 192, 192, 0.2)'],
          borderColor: ['rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)'],
          borderWidth: 1,
        },
      ],
    };
  };

  const pieChartData = generatePieChartData();

  const chartData = generateChartData();

  

  return (
    <div>
      <IndexPage/>
      <br/>
      <div>
      <h2>View Form Data</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            {Object.keys(formData[0] || {}).map((field, index) => (
              <th key={index}>{field}</th>
            ))}
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((entry, index) => (
            <tr key={index}>
              {Object.values(entry).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
              <td>{highlightKeyword(getResult(entry))}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="card mx-2 mb-2 flex-grow-1">
            <div className="card-header">
              <h5>Line Graph</h5>
            </div>
            <div className="card-body">
              <Line data={chartData} options={{ responsive: true }} />
            </div>
            </div>
              <div className="card mx-2 mb-2 flex-grow-1">
              <div className="card-header">
              <h5>Pie Chart</h5>
            </div>
            <div className="card-body">
              <Pie data={pieChartData} options={{ responsive: true }} />
            </div>
        </div>
      </div>
    </div>

    </div>
    
  );
};

export default ViewPage;















  