import React from 'react';


const RightSideTag = (props) => {
    return(
    <div className="js-inputToDo inputToDo hidden">   
        <span className="deleteX hide" onClick={props.handleDelete}>✔️️️</span>
        <input type="radio" />  
        <span className="js-inputTextBox inputTextBox">      
          <input type="text" className="js-inputText inputText" placeholder="Write to do here" 
          onKeyPress={props.handleInput}/>
        </span> 
    </div>
    )
  };
  
export default RightSideTag;
