import React from 'react';
import style from './ProjectTiles';


class ProjectTile extends React.Component {


    render () {

        return (
            // style="max-width: 540px;"
            <div classNames=`${styles.card} mb-2 rounded` >
    <div className="row no-gutters">
        <div className="col-md-2">
          <img src=""/>
            
        </div>
        <div className="col-md-7">
            <div className="card-body">
                <h5 className="card-title text-center ">TYTUŁ 12PEOPLE</h5>
                <p className="card-text">PROJECT MANAGER: XXXXXXXXXXX</p>
                <p className="card-text">ACTIVE FROM: 12/12/2012</p>
                <p className="card-text">ACTUAL SPRINT: 7</p>
            </div>
        </div>
        <div className="card-notification col-md-1 text-center my-auto">
          <svg className="row" width="35" height="39" viewBox="0 0 35 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 39L25.2778 31.2H19.4444V19.5H15.5556V31.2H9.72222L17.5 39ZM31.1111 3.9H29.1667V0H25.2778V3.9H9.72222V0H5.83333V3.9H3.88889C2.85749 3.9 1.86834 4.31089 1.13903 5.04228C0.409721 5.77368 0 6.76566 0 7.8V35.1C0 36.1343 0.409721 37.1263 1.13903 37.8577C1.86834 38.5891 2.85749 39 3.88889 39H9.72222V35.1H3.88889V13.65H31.1111V35.1H25.2778V39H31.1111C32.1425 39 33.1317 38.5891 33.861 37.8577C34.5903 37.1263 35 36.1343 35 35.1V7.8C35 6.76566 34.5903 5.77368 33.861 5.04228C33.1317 4.31089 32.1425 3.9 31.1111 3.9Z" fill="black"/>
          </svg>
          <svg className="row " width="35" height="39" viewBox="0 0 35 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 19.5L9.72222 27.3H15.5556V39H19.4444V27.3H25.2778L17.5 19.5ZM31.1111 3.9H29.1667V0H25.2778V3.9H9.72222V0H5.83333V3.9H3.88889C2.85749 3.9 1.86834 4.31089 1.13903 5.04228C0.409721 5.77368 0 6.76566 0 7.8V35.1C0 36.1343 0.409721 37.1263 1.13903 37.8577C1.86834 38.5891 2.85749 39 3.88889 39H11.6667V35.1H3.88889V13.65H31.1111V35.1H23.3333V39H31.1111C32.1425 39 33.1317 38.5891 33.861 37.8577C34.5903 37.1263 35 36.1343 35 35.1V7.8C35 6.76566 34.5903 5.77368 33.861 5.04228C33.1317 4.31089 32.1425 3.9 31.1111 3.9Z" fill="black"/>
          </svg>
          
        </div>
    </div>
</div>

        )
    }


}

export default ProjectTile;