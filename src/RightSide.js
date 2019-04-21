import React from 'react';
import RightSideTag from './RightSideTag';

const RightSide = (props) => {
    return(
        <div className="js-RightSide RightSide">
            <header className="head">To Do List </header>
            <div className="toDo"></div>
            {/* <RightSideTag list ={props.list} handleInput = {props.handleInput} paintInput = {props.paintInput}/> */}
            {props.list.map((ele, i) => <RightSideTag className="js-RightSideTag" 
                                                      list={ele} index={i} key = {i} handleInput={props.handleInput} 
                                                      paintInput={props.paintInput} handleDelete={props.handleDelete}
                                                      handleSearch={(e) => props.handleSearch(e)}
                                                      />)}
        </div>
      )
  };
  
export default RightSide;
