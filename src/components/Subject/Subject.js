import React from 'react';
import "./Subject.css"

const Subject = (props) => {
    //console.log(props);
    const {img, title} = props.subject;
    return (
        <div className = 'subject'>
             <div>
                <img src={props.subject.img} alt=""/>
            </div>
            <div className = 'subject-name'>
            <h5>{props.subject.title}</h5>
            <p>Instructor: {props.subject.instructor}</p>
            <p>💰Price:${props.subject.price}</p>
            <br/>
            <button class = 'enroll-btn' onClick = {()=>props.handleAddCourse(props.subject)}>Enroll Now</button>
            </div>
           
            
        </div>
    );
};

export default Subject;