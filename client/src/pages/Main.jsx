import React, { useEffect, useState, useContext } from "react";
import { ENDPOINTS } from "../constants/endpoints";
import { getUserId } from "../helpers/storages";
import ProjectTile from "../components/ProjectTile";

const Main = () => {
  const [projects, setProjects] = useState([]);

  const userId = getUserId();

  useEffect(() => {
    fetch(ENDPOINTS.PROJECTS + userId).then(response => {
      if (!response.ok) {
        throw new Error("Not 200 response");
      } else {
        response.json().then(data => {
          setProjects(data);
        });
      }
    });
  }, []);

  return (
    <div>
      {projects.map(project => (
        <ProjectTile title={project.title} />
      ))}
    </div>
  );
};

export default Main;
