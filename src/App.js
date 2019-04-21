import React from 'react';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      list: [''],
      id: 0,
      searchList: '',
      listArr: [],
    }
  }
  
  
  //right 작동순서1 enter치면 글보여주기
  handleInput = (e) => {
    let letter = '';
    letter +=e.target.value
    if(e.key === 'Enter'){
      let arr = this.state.list;
      arr.push(letter);
      this.setState({
        list: arr,
        id: ++this.state.id,
      })
      this.paintInput(arr);
    }
  }

  //right 작동순서2 
  paintInput = (ele) => {
    var RightSide = document.querySelector(".js-RightSide");
    RightSide.lastChild.lastChild.innerText = ele[this.state.id];
    RightSide.lastChild.firstChild.classList.remove('hide')
  }

  //right 작동순서3 delete
  handleDelete = (e) =>{
    var RightSide = document.querySelector(".js-RightSide");
    if(RightSide.childNodes.length > 2 ){
      RightSide.removeChild(e.target.parentNode)
    }
  }

  

  ////left 작동순서1 search 
  handleSearch = (e) =>{
    let listJoin;
    for(var ele of this.state.list) {listJoin +=  ele+' '}
    let listJoinSplit = listJoin.split(' ')
    
    this.setState({
      searchList: e.target.value,
      listArr: listJoinSplit,
    })

    var RightSide = document.querySelector(".js-RightSide");
    if(this.state.listArr.includes(e.target.value) && e.target.value.length !== 0) {
      for(var i = 2; i <= RightSide.childNodes.length-2; i++){
        if(e.target.value !== RightSide.childNodes[i].lastChild.innerText){
          const value = RightSide.childNodes[i];
          value.style.display = 'none';

        }
      }
    }else{
      for(var i = 2; i < RightSide.childNodes.length-1; i++){
        if(e.target.value !== RightSide.childNodes[i].lastChild.innerText){
          const value = RightSide.childNodes[i];
          value.style.display = 'block';
        }
      }
    }
  }
  
  render() {
  return<div className="App">
            <div className="all">
              <div className="left" >
                <LeftSide props = {this.props} handleSearch = {this.handleSearch} />
              </div>
              <div className="right" >
                <RightSide list ={this.state.list} handleInput = {this.handleInput} 
                            paintInput = {this.paintInput} handleDelete = {this.handleDelete}
                            handleSearch = {this.handleSearch} state = {this.state}/>
              </div>
            </div>
          </div>
  }
}
export default App;

