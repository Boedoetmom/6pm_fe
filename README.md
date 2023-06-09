# Cloud Computing Path

Create RESTful API and deploy it to Google Cloud Platform using [Google Cloud App engine and compute engine] for communication between Machine Learning Model and Mobile Development. Front End Deployment of [Google Cloud App Engine] 

## RESTful APIs

In creating RESTful APIs we use [NodeJS] for the back end and [ReactJS] for the front end, as well as the [Flask] framework for the front end. 

## List APIs services
1. automatic team formation system
2. Review-API

## Directory Structure

```
- src
  - components
    - Register.js
  - App.js
  - Index.js
```

- `src`: The main directory of the project.
  - `components`: Directory containing the components used in the application.
    - `Register.js`: The main registration form component.
  - `App.js`: The main file that handles routing and components in the application.
  - `Index.js`: The file for rendering the application in the DOM.

## Usage

1. Make sure you have a configured React development environment.
2. Clone this repository to your local directory.
3. Open a terminal and navigate to the project directory.
4. Run the command `npm install` to install the required dependencies.
5. Run the command `npm start` to run the application in development mode.
6. Open your browser and access `http://localhost:3000` to view the application.

## Method, Request, and Response

This application uses the POST method to send data to the backend. Here is an example of the request and response used:

### Request

- URL: `http://35.223.81.192:8080/predict`
- Method: POST
- Header:
  - Content-Type: application/json
- Body (example payload):
  ```json
  {
    "testype": "Front End",
    "testopic": "Back-End",
    "testopicsub": "Node.js",
    "testdif": 10
  }
  ```

### Response

Example response received from the backend:

```json
{
  "result": "This project has a high level of difficulty. It is recommended to be assigned to an experienced team."
}
```

## Dependencies

- react: v16.0 or newer
- react-router-dom: v5.0 or newer
- react-select: v4.0 or newer
- axios: v0.21 or newer
- bulma: v0.9 or newer

## Contribution

Contributions and suggestions are welcome! If you would like to contribute to this project, please follow these steps:

1. Fork this repository.
2. Create a new feature branch (`git checkout -b new-feature`).
3. Make the necessary changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the created branch (`git push origin new-feature`).
6. Submit a Pull Request.



# Flask ML Predictor

This is a Flask application that serves as an ML predictor. It uses a pre-trained TensorFlow model to predict categories based on input data.

## Installation

1. Clone the repository:

   ```shell
   import os 
   import pandas as pd 
   import tensorflow as tf 
   import gdown 
   import numpy as np
#  Install the required dependencies:
    
     ``` pip install pandas tensorflow gdown numpy


# Usage

1. Start the Flask application:
    
     ```
     python app.py
     
2. Make a POST request to the /predict endpoint with the following JSON data:

    ```
     { "testype": "Back End", "testopic": "Computer Vision", "testopicsub": "Object Detection", "testdif": 2 }

- testype: The type of the test (e.g., "Back End", "Front End", "ML").
- testopic: The topic of the test (e.g., "Computer Vision", "Data Engineering").
- testopicsub: The subtopic of the test (e.g., "Object Detection", "Sentiment Analysis").
- testdif: The difficulty level of the test (an integer value).

3. The application will return a JSON response with the predicted categories and their corresponding probabilities.


# API Endpoints
# Predict
-URL: http://35.223.81.192:8080/predict

-Method: POST: @app.route('/predict', methods=['POST'])


# Request Body:
Send a POST request to http://35.223.81.192:8080/predict with the following JSON data:
{
"testype": "Back End",
"testopic": "Computer Vision",
"testopicsub": "Object Detection","testdif":2
}

# Respone
The API will return a JSON response with the predicted values:
{
  "Andi Rezal Oktavianto": { "0": 92 },
  "Alvin Tan": { "0": 86 },
  "Gabriel Kheisa": { "0": 72 },
  "Abiyyu Diora Haqi": { "0": 68 },
  "Andhika Zulfikri": { "0": 58 }
}

## Contact

If you have any questions or want to get in touch, please feel free to contact:

- Name: Fadri Oktavian, Triguntoro
- Email: fadri.gundar@gmail.com, triguntoroo@student.gunadarma.ac.id

