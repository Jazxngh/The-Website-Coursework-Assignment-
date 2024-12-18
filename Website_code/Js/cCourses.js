document.addEventListener("DOMContentLoaded", () => {
    // Will fetch info/data from the ComputingCourseList.json file into the data folder
    fetch('./data/ComputingCourseList.json') 
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch data: ${response.statusText}`);
            }
            return response.json(); // This is error handling
        })
        .then(data => {
            const CompCourListContainer = document.getElementById('CompCourList'); // Target the container

            const courses = data.CompData;  // Access data from the "CompData" key in the JSON

            //This creates brand new divs per course
            courses.forEach(course => {
                const courseItem = document.createElement('div');
                courseItem.classList.add('ccourseItem');  // Add a class for styling
                
                // course detail/key from ComputingCourseList.Json is used in here, using the same key from the json file can generate new inner html
                courseItem.innerHTML = `
                    <h2 class = "CourseHeading">${course.CourseTitle}</h2> 
                    <p>${course.CourseSummary}</p>
                    <p><strong>Duration:</strong> ${course.StudyLength}</p>
                    <p><strong>UCAS Points:</strong> ${course.UcasPoints}</p>
                `;

                //Added h2 class for styling to match with regular html styles!

                // Adds the course div to the container
                CompCourListContainer.appendChild(courseItem);
            });
        })
        .catch(error => {
            console.error('Error loading courses:', error);  // Error Handling
        });
});
