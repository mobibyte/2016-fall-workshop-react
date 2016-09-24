module.exports.getAllCourses = () => {
  return fetch('http://localhost:3000/courses')
    .then(response => {
      return response.json();
    });
}

module.exports.getCourse = (permalink) => {
  return fetch('http://localhost:3000/courses/' + permalink)
    .then(response => {
      return response.json();
    });
}
