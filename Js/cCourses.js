document.addEventListener("DOMContentLoaded", () => {
    // Will now fetch the ComputingCourseList.json file from the data folder
    fetch('./data/ComputingCourseList.json')  // Correct path to the JSON file
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch data: ${response.statusText}`);
            }
            return response.json(); // Parse the JSON
        })
        .then(data => {
            const CompCourListContainer = document.getElementById('CompCourList'); // Target the container

            const courses = data.CompData;  // Access data from the "Sheet1" key in the JSON

            courses.forEach(course => {
                // For each course, this will create a div
                const courseItem = document.createElement('div');
                courseItem.classList.add('course-item');  // Add a class for styling
                
                // Insert course details into the div
                courseItem.innerHTML = `
                    <h2>${course.CourseTitle}</h2>
                    <p>${course.CourseSummary}</p>
                    <p><strong>Duration:</strong> ${course.StudyLength}</p>
                    <p><strong>UCAS Points:</strong> ${course.UcasPoints}</p>
                `;

                // Append the course div to the container
                CompCourListContainer.appendChild(courseItem);
            });
        })
        .catch(error => {
            console.error('Error loading courses:', error);  // Handle errors gracefully
        });
});
