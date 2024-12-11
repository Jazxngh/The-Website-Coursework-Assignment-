document.addEventListener("DOMContentLoaded", () => {
    // Will fetch info from the ComputingCourseList.json file in the data folder
    fetch('./data/DesignCourseList.json') 
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch data: ${response.statusText}`);
            }
            return response.json(); // This is error handling
        })
        .then(data => {
            const DesCourListContainer = document.getElementById('DesCourList'); // Target the container

            const courses = data.DesData;  // Access data from the "DesData" key in the JSON

            //This creates new divs per course
            courses.forEach(course => {
                const courseItem = document.createElement('div');
                courseItem.classList.add('dcourseItem');  // Add a class for styling
                
                // course detail/key from ComputingCourseList.Json is used in here
                courseItem.innerHTML = `
                    <h2>${course.CourseTitle}</h2>
                    <p>${course.CourseSummary}</p>
                    <p><strong>Duration:</strong> ${course.StudyLength}</p>
                    <p><strong>UCAS Points:</strong> ${course.UcasPoints}</p>
                `;

                // Adds the course div to the container
                DesCourListContainer.appendChild(courseItem);
            });
        })
        .catch(error => {
            console.error('Error loading courses:', error);  // Error Handling
        });
});
