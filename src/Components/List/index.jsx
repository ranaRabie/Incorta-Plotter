import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import Context from "../../MyContext";

const List = () => {
    const context = useContext(Context); // My Context
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
      <div className="list-wrapper">
        <h3>List</h3>
        <p>click on an item to select it</p>
        <ul>
          {List?.map((item) => ( // List Loop
              <li key={item.name} >
                <a onClick={() => context.getItems(item.function, item.name)} className={`${context.currentDimension === item.name || context.currentMeasure.includes(item.name) ? "disabled" : ""}`}>{item.name}</a>
              </li>
            ))
          }
        </ul>
       
      </div>
    );
  };
  
  export default List;