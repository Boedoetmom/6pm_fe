import React, { useState } from 'react';
import Select from 'react-select';
import axios from 'axios';

const Register = () => {
  // State untuk menyimpan nilai dari dropdown
  const [selectedProjectType, setSelectedProjectType] = useState(null);
  const [selectedTopik, setSelectedTopik] = useState(null);
  const [selectedSubTopik, setSelectedSubTopik] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [selectedTimeBudget, setSelectedTimeBudget] = useState(null);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [selectedCompleteness, setSelectedCompleteness] = useState(null);
  const [selectedDataType, setSelectedDataType] = useState(null);
  const [output, setOutput] = useState(null); // State untuk menyimpan output dari backend

  // Fungsi untuk mengirim data ke backend
  const handleSubmit = async () => {
    try {
      const projectType = selectedProjectType.map(option => option.value);
      const topik = selectedTopik.map(option => option.value);
      const subTopik = selectedSubTopik.map(option => option.value);
      const difficulty = selectedDifficulty.map(option => option.value);
      const timeBudget = selectedTimeBudget.map(option => option.value);
      const feature = selectedFeature.map(option => option.value);
      const completeness = selectedCompleteness.map(option => option.value);
      const dataType = selectedDataType.map(option => option.value);

      const response = await axios.post('http://localhost:5000/users', {
        projectType: projectType,
        topik: topik,
        subTopik: subTopik,
        difficulty: difficulty,
        timeBudget: timeBudget,
        feature: feature,
        completeness: completeness,
        dataType: dataType
      });

      // Mengupdate state output dengan nilai dari respons backend
      setOutput(response.data.output);
    } catch (error) {
      console.error(error);
    }
  };

  // Opsi untuk setiap dropdown
  const projectTypeOptions = [
    { value: 'Front-End', label: 'Front-End' },
    { value: 'Back-End', label: 'Back-End' },
    { value: 'Machine Learning', label: 'Machine Learning' }
  ];

  const topikOptions = [
    { value: 'Back-End [Back-End]', label: 'Back-End' },
    { value: 'Data Engineering [Back-End]', label: 'Data Engineering' },
    { value: 'Front-End [Front-End]', label: 'Front-End' },
    { value: 'Classification & Regression [ML]', label: 'Classification & Regression' },
    { value: 'Computer Vision [ML]', label: 'Computer Vision' },
    { value: 'NLP [ML]', label: 'NLP' },
    { value: 'Speech / Audio [ML]', label: 'Speech / Audio' },
    { value: 'Time-series [ML]', label: 'Time-series' }
  ];

  const subTopikOptions = [
    { value: 'Node.js [Back-End]', label: 'Node.js' },
    { value: 'Express.js [Back-End]', label: 'Express.js' },
    { value: 'Django [Back-End]', label: 'Django' },
    { value: 'Data Warehousing [Back-End]', label: 'Data Warehousing' },
    { value: 'React [Front-End]', label: 'React' },
    { value: 'Vue.js [Front-End]', label: 'Vue.js' },
    { value: 'Angular [Front-End]', label: 'Angular' },
    { value: 'Classification [ML]', label: 'Classification' },
    { value: 'Regression [ML]', label: 'Regression' },
    { value: 'Image Classification [ML]', label: 'Image Classification' },
    { value: 'Object Detection [ML]', label: 'Object Detection' },
    { value: 'Sentiment Analysis [ML]', label: 'Sentiment Analysis' },
    { value: 'Speech Recognition [ML]', label: 'Speech Recognition' },
    { value: 'Time-series Forecasting [ML]', label: 'Time-series Forecasting' }
  ];

  const difficultyOptions = [
    { value: 'Beginner', label: 'Beginner' },
    { value: 'Intermediate', label: 'Intermediate' },
    { value: 'Advanced', label: 'Advanced' }
  ];

  const timeBudgetOptions = [
    { value: '1-2 weeks', label: '1-2 weeks' },
    { value: '2-4 weeks', label: '2-4 weeks' },
    { value: '1-2 months', label: '1-2 months' },
    { value: '2-3 months', label: '2-3 months' },
    { value: '3-4 months', label: '3-4 months' },
    { value: '4-6 months', label: '4-6 months' },
    { value: '6+ months', label: '6+ months' }
  ];

  const featureOptions = [
    { value: 'Authentication', label: 'Authentication' },
    { value: 'Authorization', label: 'Authorization' },
    { value: 'Database Integration', label: 'Database Integration' },
    { value: 'Third-party API Integration', label: 'Third-party API Integration' },
    { value: 'Real-time Communication', label: 'Real-time Communication' },
    { value: 'Payment Integration', label: 'Payment Integration' },
    { value: 'Data Visualization', label: 'Data Visualization' },
    { value: 'Chatbot', label: 'Chatbot' },
    { value: 'Image Processing', label: 'Image Processing' },
    { value: 'Audio Processing', label: 'Audio Processing' },
    { value: 'Natural Language Processing', label: 'Natural Language Processing' },
    { value: 'Time-series Analysis', label: 'Time-series Analysis' }
  ];

  const completenessOptions = [
    { value: 'Partial', label: 'Partial' },
    { value: 'Complete', label: 'Complete' }
  ];

  const dataTypeOptions = [
    { value: 'Structured', label: 'Structured' },
    { value: 'Unstructured', label: 'Unstructured' }
  ];

  return (
    <div className="container">
      <h1 className="title">Registration Form</h1>

      <div className="field">
        <label className="label">Project Type</label>
        <div className="control">
          <Select
            options={projectTypeOptions}
            isMulti
            onChange={setSelectedProjectType}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Topik</label>
        <div className="control">
          <Select
            options={topikOptions}
            isMulti
            onChange={setSelectedTopik}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Sub-Topik</label>
        <div className="control">
          <Select
            options={subTopikOptions}
            isMulti
            onChange={setSelectedSubTopik}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Difficulty</label>
        <div className="control">
          <Select
            options={difficultyOptions}
            isMulti
            onChange={setSelectedDifficulty}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Time Budget</label>
        <div className="control">
          <Select
            options={timeBudgetOptions}
            isMulti
            onChange={setSelectedTimeBudget}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Feature</label>
        <div className="control">
          <Select
            options={featureOptions}
            isMulti
            onChange={setSelectedFeature}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Completeness</label>
        <div className="control">
          <Select
            options={completenessOptions}
            isMulti
            onChange={setSelectedCompleteness}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Data Type</label>
        <div className="control">
          <Select
            options={dataTypeOptions}
            isMulti
            onChange={setSelectedDataType}
          />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <button className="button is-primary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>

      {output && (
        <div className="field">
          <label className="label">Output</label>
          <div className="control">
            <textarea className="textarea" value={output} readOnly />
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
