import React , {Component} from 'react';
import './chat.css';
import { Link } from 'react-router-dom';

class Chat extends Component {
    render(){
        return ( 
            <div>
                <h1 className = 'center'> Chat Room </h1>
                <div className="row right-align">
                    <Link to = '/' className='btn teal accent-3'>Home</Link>
                </div> 
            </div>
        )

    }
}

export default Chat;

