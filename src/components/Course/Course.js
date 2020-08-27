import React from 'react';
import fakeData from '../../fakeData';
import {useState} from 'react';
import './Course.css'
import Subject from '../Subject/Subject';
import Cart from '../../Cart/Cart';

const Course = () => {
   console.log(fakeData)
   const first12 = fakeData.slice(0,12);
   const [subjects, setSubjects] = useState(first12);
   const [cart ,setCart] = useState([]);
   

   const handleAddCourse=(subject)=>{
       console.log('product added', subject);
       const newCart = [...cart,subject];
       setCart(newCart)
   }
    return (
        <div className = 'allCourse-container'>
            <div className="course-container">
            
                {
                    subjects.map(courses => <Subject 
                        handleAddCourse={handleAddCourse}
                        subject = {courses}></Subject>)
                }
               
            </div>
            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Course;