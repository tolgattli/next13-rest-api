import React from "react";
import Link from "next/link";

// const fetchCourses = async () => {
//   const response = await fetch("http://localhost:3000/api/courses");
//   const courses = response.json();
//   return courses;
// };

const Courses = async ({courses}) => {
  // const courses = await fetchCourses();

  return (
    <div className="courses">
      {courses.map((course) => (
        <div key={course.id} className="card">
          <h3>{course.title}</h3>
          <small>Level: {course.level}</small>
          <p> {course.description} </p>
          <Link href={course.link} target="_blank" className="btn">
            Go to Course
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Courses;
