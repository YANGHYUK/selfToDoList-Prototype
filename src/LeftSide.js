import React, {Component}  from 'react';

class LeftSide extends Component {
    render(){
        const props = this.props;
        return(
            <div className="LeftSide">
                <header className="head" >Search</header>
                
                <form className = "js-group group">
                    <select className="mySelect" name="Select room" >
                        <option className="js-cs01" value="cs01">cs01</option>
                        <option className="js-cs02" value="cs02">cs02</option>
                        <option className="js-cs03" value="cs03">cs03</option>
                        <option className="js-cs04" value="cs04">cs04</option>
                    </select>
                </form>
                <div className="toSearch"></div>              
                <input type="text" className = "inputSearch" placeholder="Search list" onChange={(e)=>props.handleSearch(e)}></input>
                <img className="apple" src = "https://cdn.cultofmac.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-18-at-11.33.40-AM.jpg"/>
            </div>
        )
        }
  };
  
export default LeftSide;