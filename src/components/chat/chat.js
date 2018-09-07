import React , {Component} from 'react';
import './chat.css';
import { Link } from 'react-router-dom';
import {db} from '../../firebase';
import { connect } from 'react-redux';
import { updateChat } from '../../actions';
import './chat.css';

class Chat extends Component {
    dbRef = db.ref('/');

    componentDidMount(){
        this.dbRef.on('value', this.props.updateChat);
    }
    componentWillUnmount(){
        this.dbRef.off();
    }

    render(){
        const { log } = this.props;

        const chatElement = Object.keys(log).map(k => {
            const { name, message } = log[k];
            return (
                <li className = 'collection-item' key = {k} >
                    <b> {name}:</b> { message }
                </li>
            )
        });

        return ( 
            <div>
                <h1 className = 'center'> Chat Room </h1>
                <div className="row right-align">
                    <Link to = '/' className='btn teal accent-3'>Home</Link>
                </div> 
                <ul className = 'collection'>
                    {chatElement}
                </ul>
            </div>
        )

    }
}

function mapStateToProps(state){
    return {
         log:state.chat.log
    }    
}

export default connect(mapStateToProps, {updateChat})(Chat);

