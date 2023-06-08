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

  // Fungsi untuk mengirim data ke backend
  const handleSubmit = async () => {
    try {
     const projectType= selectedProjectType.map(option => option.value);
     const topik= selectedTopik.map(option => option.value);
     const subTopik= selectedSubTopik.map(option => option.value);
     const difficulty= selectedDifficulty.map(option => option.value);
     const timeBudget= selectedTimeBudget.map(option => option.value);
     const feature= selectedFeature.map(option => option.value);
     const completeness= selectedCompleteness.map(option => option.value);
     const dataType= selectedDataType.map(option => option.value);

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
      console.log(response.data); // Menampilkan respon dari backend
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
    { value: 'Ember.js [Front-End]', label: 'Ember.js' },
    { value: 'Angular [Front-End]', label: 'Angular' },
    { value: 'LSTM [ML]', label: 'LSTM' },
    { value: 'ARIMA [ML]', label: 'ARIMA' },
    { value: 'Music Information Retrieval [ML]', label: 'Music Information Retrieval' },
    { value: 'Topic Modeling [ML]', label: 'Topic Modeling' },
    { value: 'Sentiment Analysis [ML]', label: 'Sentiment Analysis' },
    { value: 'Object Detection [ML]', label: 'Object Detection' },
    { value: 'Logistic Regression [ML]', label: 'Logistic Regression' },
    { value: 'Linear Regression [ML]', label: 'Linear Regression' }
  ];

  const difficultyOptions = [
    { value: '1', label: 'S1 EASY' },
    { value: '2', label: 'S1 MED' },
    { value: '3', label: 'S1 HARD' },
    { value: '4', label: 'S2 EASY' },
    { value: '5', label: 'S2 MED' },
    { value: '6', label: 'S2 HARD' },
    { value: '7', label: 'S3 EASY' },
    { value: '8', label: 'S3 MED' },
    { value: '9', label: 'S3 HARD' },
    { value: '10', label: 'S3 XHARD' }
  ];

  const timeBudgetOptions = [
    { value: '1', label: '1 Month' },
    { value: '2', label: '2 Month' },
    { value: '3', label: '3 Month' },
    { value: '4', label: '4 Month' },
    { value: '5', label: '5 Month' },
    { value: '6', label: '6 Month' },
    { value: '7', label: '7 Month' },
    { value: '8', label: '8 Month' },
    { value: '9', label: '9 Month' },
    { value: '10', label: '10 Month' }
  ];

  const featureOptions = [
    { value: '1', label: 'Dibawah 5' },
    { value: '2', label: '5 sampai 10' },
    { value: '3', label: 'Lebih dari 10' }
  ];

  const completenessOptions = [
    { value: '1', label: 'Langsung pake' },
    { value: '2', label: 'Preproses' },
    { value: '3', label: 'Bantu cari' }
  ];

  const dataTypeOptions = [
    { value: '1', label: 'Binary' },
    { value: '2', label: 'Multiclass/regressor' },
    { value: '3', label: 'Time-series' }
  ];

  return (
    <div className="container">
      <div className="box">
        <h1 className="title">Project Type</h1>
        <div className="field">
          <label className="label">Project-Type</label>
          <div className="control">
            <Select
              options={projectTypeOptions}
              isMulti
              onChange={setSelectedProjectType}
              value={selectedProjectType}
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
              value={selectedTopik}
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
              value={selectedSubTopik}
            />
          </div>
        </div>
      </div>

      <div className="box">
        <h1 className="title">Difficulty Point</h1>
        <div className="field">
          <label className="label">Complexity of the problem</label>
          <div className="control">
            <Select
              options={difficultyOptions}
              isMulti
              onChange={setSelectedDifficulty}
              value={selectedDifficulty}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Time and budget constraints (month)</label>
          <div className="control">
            <Select
              options={timeBudgetOptions}
              isMulti
              onChange={setSelectedTimeBudget}
              value={selectedTimeBudget}
            />
          </div>
        </div>
      </div>

      <div className="box">
        <h1 className="title">Size and Quality of the Data</h1>
        <div className="field">
          <label className="label">Berapa feature</label>
          <div className="control">
            <Select
              options={featureOptions}
              isMulti
              onChange={setSelectedFeature}
              value={selectedFeature}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Seberapa lengkap</label>
          <div className="control">
            <Select
              options={completenessOptions}
              isMulti
              onChange={setSelectedCompleteness}
              value={selectedCompleteness}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Jenis Data-Sheet</label>
          <div className="control">
            <Select
              options={dataTypeOptions}
              isMulti
              onChange={setSelectedDataType}
              value={selectedDataType}
            />
          </div>
        </div>
      </div>

      <div className="field is-grouped is-centered">
        <div className="control">
          <button className="button is-primary" type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
