import { useState } from 'react';
import IndexPage from '../components/IndexPage';
//importing axios
import axios from 'axios';


const PredictPage = () => {
  const [formData, setFormData] = useState({
    age: '',
    sex: '',
    cp: '',
    trestbps: '',
    chol: '',
    fbs: '',
    restecg: '',
    thalach: '',
    exang: '',
    oldpeak: '',
    slope: '',
    ca: '',
    thal: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the form data to the backend server
      await axios.post('http://localhost:5000/predict', formData);
      console.log('Form data sent successfully');
    } catch (error) {
      console.error('Error sending form data:', error);
    }
  };

  return (
    <div>
        <IndexPage/>
        <div className="container mt-4">
            <div className="card">
                <div className="card-header">
                    <h3>Predict Heart Disease</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                    <label htmlFor="age" className="form-label">Age</label>
                    <input type="text" className="form-control" id="age" name="age" value={formData.age} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="sex" className="form-label">Sex</label>
                    <input type="text" className="form-control" id="sex" name="sex" value={formData.sex} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="cp" className="form-label">Chest Pain Type (CP)</label>
                    <input type="text" className="form-control" id="cp" name="cp" value={formData.cp} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="trestbps" className="form-label">Resting Blood Pressure (Trestbps)</label>
                    <input type="text" className="form-control" id="trestbps" name="trestbps" value={formData.trestbps} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="chol" className="form-label">Serum Cholesterol (Chol)</label>
                    <input type="text" className="form-control" id="chol" name="chol" value={formData.chol} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="fbs" className="form-label">Fasting Blood Sugar (FBS)</label>
                    <input type="text" className="form-control" id="fbs" name="fbs" value={formData.fbs} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="restecg" className="form-label">Resting Electrocardiographic Results (Restecg)</label>
                    <input type="text" className="form-control" id="restecg" name="restecg" value={formData.restecg} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="thalach" className="form-label">Maximum Heart Rate Achieved (Thalach)</label>
                    <input type="text" className="form-control" id="thalach" name="thalach" value={formData.thalach} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exang" className="form-label">Exercise Induced Angina (Exang)</label>
                    <input type="text" className="form-control" id="exang" name="exang" value={formData.exang} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="oldpeak" className="form-label">ST Depression Induced by Exercise Relative to Rest (Oldpeak)</label>
                    <input type="text" className="form-control" id="oldpeak" name="oldpeak" value={formData.oldpeak} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="slope" className="form-label">The Slope of the Peak Exercise ST Segment (Slope)</label>
                    <input type="text" className="form-control" id="slope" name="slope" value={formData.slope} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="ca" className="form-label">Number of Major Vessels Colored by Flourosopy (CA)</label>
                    <input type="text" className="form-control" id="ca" name="ca" value={formData.ca} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="thal" className="form-label">Thalassemia (Thal)</label>
                    <input type="text" className="form-control" id="thal" name="thal" value={formData.thal} onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Predict</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    
  )
}
export default PredictPage;

  
  