"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import loading from "./loading";
import Courses from "./components/Courses";
import CourseSearch from "./components/CourseSearch";

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("/api/courses");
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    };
    fetchCourses();
  }, []);

  if (loading) {
    return <loading />;
  }

  return (
    <>
      <h1>Welcome to Tolga's World</h1>
      <CourseSearch getSearchResults={(results) => setCourses(results)} />
      <Courses courses={courses} />
    </>
  );
};

export default HomePage;
