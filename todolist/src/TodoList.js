import React, { Component } from 'react'
import TodoForm from './TodoForm'

export default class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            list: [],
            
        }
        this.addTodo = this.addTodo.bind(this)
        this.removeTodo = this.removeTodo.bind(this)  
    }
    componentDidMount(){
        console.log('hiiiii')
        return (
            <div>
                <h3 >TODO-LIST</h3>
            <input type="text" value={this.state.value} onChange={e => {
                this.setState({value: e.target.value})
            }}
            className='todo_input'/>
            <button  className='todo_button' onClick={this.addTodo}>ADD</button>
            </div>
        );
        
      }
   
    
    addTodo() {
        this.setState({list: [{ "id": this.state.length, "todo": this.state.value}, ...this.state.list], value: ' '})
    }

    removeTodo(todo) {
        let list = this.state.list.filter(l => l.todo !== todo.todo)
        this.setState({list: list})
    }
  render() {
    return (
        <div className='divinput'>  
        {this.componentDidMount()}
        <ul>
            {this.state.list.map((item, i) => <TodoForm
                key={item.id}
                index={i + 1}
                title={item.todo}
                remove={() => this.removeTodo(item)}
            />)}
        </ul>
    </div>
    )
  }
}

  