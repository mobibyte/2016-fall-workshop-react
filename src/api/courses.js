import { createUrl, fetchWithAuth } from '../utils/api';

export const getAllCourses = () => {
  return fetchWithAuth(createUrl('/courses'))
    .then(response => {
      return response.json();
    });
}

export const getCourse = (permalink) => {
  return fetchWithAuth(createUrl('/courses/' + permalink))
    .then(response => {
      return response.json();
    });
}
