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
        <p className="mb-1 border-0">click on an item to select Dimension</p>
        <ul>
          {List?.map((item) => {
            return item.function === "dimension" ?
              <li key={item.name} >
                <span onClick={() => context.getItems(item.function, item.name)} className={`${context.currentDimension === item.name ? "disabled" : ""}`}>{item.name}</span>
              </li>
              : ''
            }
            )
          }
        </ul>
        <p className="mb-1 mt-3">click on an item to select Measure</p>
        <ul>
          {List?.map((item) => {
            return item.function === "measure" ?
              <li key={item.name} >
                <span onClick={() => context.getItems(item.function, item.name)} className={`${context.currentMeasure.includes(item.name) ? "disabled" : ""}`}>{item.name}</span>
              </li>
              : ''
            }
            )
          }
        </ul>
       
      </div>
    );
  };
  
  export default List;