const BACK_END_URL = "http://localhost:5000/api";

const USERS = "/users";

export const ENDPOINTS = {
  LOGIN: `${BACK_END_URL}/auth`,
  PROJECTS: `${BACK_END_URL + USERS}/getProjects/`
};
