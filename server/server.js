const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a schema and model for your data
const formDataSchema = new mongoose.Schema({
  age: String,
  sex: String,
  cp: String,
  trestbps: String,
  chol: String,
  fbs: String,
  restecg: String,
  thalach: String,
  exang: String,
  oldpeak: String,
  slope: String,
  ca: String,
  thal: String,
});

const FormEntry = mongoose.model('FormEntry', formDataSchema);

// POST endpoint for saving form data to MongoDB
app.post('/predict', (req, res) => {
  const {
    age,
    sex,
    cp,
    trestbps,
    chol,
    fbs,
    restecg,
    thalach,
    exang,
    oldpeak,
    slope,
    ca,
    thal,
  } = req.body;

  const formData = new FormEntry({
    age,
    sex,
    cp,
    trestbps,
    chol,
    fbs,
    restecg,
    thalach,
    exang,
    oldpeak,
    slope,
    ca,
    thal,
  });

  formData
    .save()
    .then(savedData => {
      console.log('Form data saved successfully:', savedData);
      res.status(200).json({ message: 'Form data saved successfully' });
    })
    .catch(err => {
      console.error('Error saving form data:', err);
      res.status(500).json({ error: 'An error occurred while saving form data' });
    });
});

// GET endpoint for retrieving form data from MongoDB
app.get('/api/view', (req, res) => {
  FormEntry.find()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      console.error('Error retrieving form data:', err);
      res.status(500).json({ error: 'An error occurred while retrieving form data' });
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});


