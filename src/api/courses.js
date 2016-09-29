import { createUrl } from '../utils/api';

export const getAllCourses = () => {
  return fetch(createUrl('/courses'))
    .then(response => {
      return response.json();
    });
}

export const getCourse = (permalink) => {
  return fetch(createUrl('/courses/' + permalink))
    .then(response => {
      return response.json();
    });
}
