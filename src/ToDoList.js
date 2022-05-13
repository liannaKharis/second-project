
import { Component } from "react";
import plus from './plus.png';
import delet from './delete.png';
import check from './check.png';


 export class ToDoList  extends Component {
     state={
         userInput: "",
         toDoList: []
     }

onChangeEvent(e) {
    this.setState({userInput:e})
}
     
toDoListPlus(input) {
    if(input==="") {
        alert("Пожалуйста, введите ваше дело!")
    }

    else {
    let listArray = this.state.toDoList;
    listArray.push(input);
    this.setState({toDoList: listArray, userInput: ''});
    }
}

crossedWord(event) {
    const li = event.target;
    li.classList.toggle('crossed');
}

toDoListDelete() {
    let listArray = this.state.toDoList;
    listArray = [];
    this.setState({toDoList: listArray})
}

onFormSubmit(e){
    e.preventDefault();
}

     render() {
         return(
             <div>
                  <form onSubmit = {this.onFormSubmit}>
                 <div>
                 <input type="text" placeholder="Введи свой список дел"
                 onChange={(e)=>{this.onChangeEvent(e.target.value)}}
                 value={this.state.userInput} />
                 </div>
                 <div className="plusAndDelete">
                     <img onClick = {()=> this.toDoListPlus(this.state.userInput)} src={plus} width="60px" alt="plus"/>
                     <img className="del" onClick = {()=>this.toDoListDelete()} src={delet} width="60px" alt="delete"/>
                 </div>
                 <ul>
                     {this.state.toDoList.map((item, index)=>(
                     <li onClick={this.crossedWord} key={index}>
                         <img src={check} width="25px" alt="check"/> {item}</li>
                         
                     ))}
                   
                 </ul>
                 </form>
             </div>
         )
     }

 }