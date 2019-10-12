import React, { Component } from "react";
import "./ProjectTile.scss";

class ProjectTile extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="card col-sm-9 mx-auto align-self-center ">
          <div className="card-shadow row no-gutters ">
            <div className="col-md-3">
              <img src="" />x
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h4 className="card-title text-center ">
                  Project TITLE <span className="neutral">12</span>
                  <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6 7C7.89375 7 9.42857 5.4332 9.42857 3.5C9.42857 1.5668 7.89375 0 6 0C4.10625 0 2.57143 1.5668 2.57143 3.5C2.57143 5.4332 4.10625 7 6 7ZM8.4 7.875H7.95268C7.35804 8.15391 6.69643 8.3125 6 8.3125C5.30357 8.3125 4.64464 8.15391 4.04732 7.875H3.6C1.6125 7.875 0 9.52109 0 11.55V12.6875C0 13.4121 0.575893 14 1.28571 14H10.7143C11.4241 14 12 13.4121 12 12.6875V11.55C12 9.52109 10.3875 7.875 8.4 7.875Z"
                      fill="#6CF1B1"
                    />
                  </svg>
                </h4>
                <p className="card-text">
                  <span className="card-bold">PROJECT MANAGER:</span> XXXXXXXXXXX
                </p>
                <p className="card-text">
                  <span className="card-bold">ACTIVE FROM: </span> 12/12/2012
                </p>
                <p className="card-text">
                  <span className="card-bold">ACTUAL SPRINT:</span> 7
                </p>
              </div>
            </div>
            <div className="card-notification col-md-1 text-center my-auto py-2">
              <svg
                className="py-2"
                width="35"
                height="39"
                viewBox="0 0 35 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 39L25.2778 31.2H19.4444V19.5H15.5556V31.2H9.72222L17.5 39ZM31.1111 3.9H29.1667V0H25.2778V3.9H9.72222V0H5.83333V3.9H3.88889C2.85749 3.9 1.86834 4.31089 1.13903 5.04228C0.409721 5.77368 0 6.76566 0 7.8V35.1C0 36.1343 0.409721 37.1263 1.13903 37.8577C1.86834 38.5891 2.85749 39 3.88889 39H9.72222V35.1H3.88889V13.65H31.1111V35.1H25.2778V39H31.1111C32.1425 39 33.1317 38.5891 33.861 37.8577C34.5903 37.1263 35 36.1343 35 35.1V7.8C35 6.76566 34.5903 5.77368 33.861 5.04228C33.1317 4.31089 32.1425 3.9 31.1111 3.9Z"
                  fill="black"
                />
                <p>2</p>
              </svg>
              <svg
                className="svg-tile "
                width="35"
                height="39"
                viewBox="0 0 35 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 19.5L9.72222 27.3H15.5556V39H19.4444V27.3H25.2778L17.5 19.5ZM31.1111 3.9H29.1667V0H25.2778V3.9H9.72222V0H5.83333V3.9H3.88889C2.85749 3.9 1.86834 4.31089 1.13903 5.04228C0.409721 5.77368 0 6.76566 0 7.8V35.1C0 36.1343 0.409721 37.1263 1.13903 37.8577C1.86834 38.5891 2.85749 39 3.88889 39H11.6667V35.1H3.88889V13.65H31.1111V35.1H23.3333V39H31.1111C32.1425 39 33.1317 38.5891 33.861 37.8577C34.5903 37.1263 35 36.1343 35 35.1V7.8C35 6.76566 34.5903 5.77368 33.861 5.04228C33.1317 4.31089 32.1425 3.9 31.1111 3.9Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectTile;
