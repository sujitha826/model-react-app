import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../css/Courses.css';

// We used an <Outlet> element as a placeholder. 
// An <Outlet>, in this case, is how the CoursesComponent renders its child routes. 
// So the <Outlet> will render either a Search component or List component depending on the current location.

const CoursesComponent = () => {
    return (
        <div className="Page">
            <h1>You are in the Courses page!</h1>
            <h3>URL: localhost:3000/courses</h3>
            <div className="courses-nav">
                <Link to="/courses/search">Search</Link>
                <Link to="/courses/list">List</Link>
            </div>
            <Outlet />
        </div>
    )
}

export default CoursesComponent;