import React from 'react';
import { FaUser, FaBriefcase, FaFileAlt } from 'react-icons/fa';

const Result = () => {
  return (
    <div className="container">
      <div className="columns">
        <div className="column">
          <div className="box">
            <div className="content">
              <h3 className="title is-4">Data 1</h3>
              <div className="columns">
                <div className="column is-one-fifth">
                  <span className="icon is-large">
                    <FaUser />
                  </span>
                </div>
                <div className="column">
                  <p><strong>Nama:</strong> John Doe</p>
                  <p><strong>Role:</strong> Front-End Developer</p>
                  <p><strong>Past Project:</strong> Project A, Project B</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="box">
            <div className="content">
              <h3 className="title is-4">Data 2</h3>
              <div className="columns">
                <div className="column is-one-fifth">
                  <span className="icon is-large">
                    <FaUser />
                  </span>
                </div>
                <div className="column">
                  <p><strong>Nama:</strong> Jane Smith</p>
                  <p><strong>Role:</strong> Back-End Developer</p>
                  <p><strong>Past Project:</strong> Project C, Project D</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="box">
            <div className="content">
              <h3 className="title is-4">Data 3</h3>
              <div className="columns">
                <div className="column is-one-fifth">
                  <span className="icon is-large">
                    <FaUser />
                  </span>
                </div>
                <div className="column">
                  <p><strong>Nama:</strong> Sarah Johnson</p>
                  <p><strong>Role:</strong> Data Scientist</p>
                  <p><strong>Past Project:</strong> Project E, Project F</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="box">
            <div className="content">
              <h3 className="title is-4">Data 4</h3>
              <div className="columns">
                <div className="column is-one-fifth">
                  <span className="icon is-large">
                    <FaUser />
                  </span>
                </div>
                <div className="column">
                  <p><strong>Nama:</strong> Michael Brown</p>
                  <p><strong>Role:</strong> UI/UX Designer</p>
                  <p><strong>Past Project:</strong> Project G, Project H</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="box">
            <div className="content">
              <h3 className="title is-4">Data 5</h3>
              <div className="columns">
                <div className="column is-one-fifth">
                  <span className="icon is-large">
                    <FaUser />
                  </span>
                </div>
                <div className="column">
                  <p><strong>Nama:</strong> Emily Wilson</p>
                  <p><strong>Role:</strong> Full-Stack Developer</p>
                  <p><strong>Past Project:</strong> Project I, Project J</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
