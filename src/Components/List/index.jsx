import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';

const List = () => {
    const [List, setList] = useState([]); // Measures and Dimensions List
     
    // Fetch API to Get Measures and Dimensions
    const fetchData = () => {
      axios.get(`https://plotter-task.herokuapp.com/columns`)
      .then(res => {
          setList(res.data);
      });
    };

    useEffect(() => {
      fetchData();
    }, []);
    
    return (
      <div>
        <ul>
          {List ? (
            List?.map((item) => ( // List Loop
              <li key={item.name} >
                {item.name}
              </li>
            ))
          ) : (
            <div>No Data Found</div> // If No Data
          )}
        </ul>
       
      </div>
    );
  };
  
  export default List;