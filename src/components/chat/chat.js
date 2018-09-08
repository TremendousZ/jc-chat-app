import React , {Component} from 'react';
import './chat.css';
import { Link } from 'react-router-dom';
import {db} from '../../firebase';
import { connect } from 'react-redux';
import { updateChat } from '../../actions';
import {reduxForm,Field} from 'redux-form';
import Input from '../input';
import './chat.css';

class Chat extends Component {
    dbRef = db.ref('/');

    componentDidMount(){
        this.dbRef.on('value', this.props.updateChat);
    }
    componentWillUnmount(){
        this.dbRef.off();
    }

    sendMessage = async ({message}) =>{
        const newMessage = {
            name : localStorage.getItem('name'),
            message
        };

       await this.dbRef.push(newMessage);
       this.props.reset();
    }

    render(){
        const { log, handleSubmit } = this.props;

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
                <p>Hello, {localStorage.getItem('name')}</p>
                <div className="row">
                    <form className = 'col s8 offset-2' onSubmit ={handleSubmit(this.sendMessage)}>
                        <Field name = 'message' label = "Message" component = {Input} />
                    </form>
                </div>
                <ul className = 'collection'>
                    {chatElement}
                </ul>
            </div>
        )

    }
}


Chat = reduxForm({
    form: 'text-message',
    validate: ({message}) => message ? {} : {message: 'No empty messages!'}
})(Chat);

function mapStateToProps(state){
    return {
         log:state.chat.log
    }    
}

export default connect(mapStateToProps, {updateChat})(Chat);

