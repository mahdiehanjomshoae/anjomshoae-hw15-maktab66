import React, {Component} from "react";
import EdiText from 'react-editext'
import { AiTwotoneDelete } from "react-icons/ai";
export default class TodoForm extends Component{
    render(){
        return (
            <div className='div_listtido'>
            <li style={{display:'flex', justifyContent:'space-start'}} className='edit-icon'>
                <EdiText
                    type='text'
                    value={this.props.title}
                    onSave={this.onSave}
                    className='mx-5'
                />
            <div className='delete-icon'>
                <AiTwotoneDelete
                  onClick={this.props.remove}
            />
            </div>
            </li>
            </div>
        )
    }
}