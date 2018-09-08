import React , {Component} from "react";

class Input extends Component {
    state = {
        activeClass: ''
    }
    onFocus(){
        const {onFocus} = this.props.input;
            this.setState({
            activeClass: 'active'
        })
        onFocus.apply(arguments);
    }

    onBlur(event){
        const {onBlur} = this.props.input;
        if(!event.target.value){
            this.setState({activeClass:''});
        }  
        onBlur.apply(arguments);
    }


    render(){
        const {input, label, type, meta:{touched, error} } = this.props;
        return (
            <div className="row">
                <div className=" input-field col s12">
                    
                    <input 
                        {...input}
                        type ={type? type : 'text' } 
                        autoComplete = 'off'
                        onFocus={this.onFocus.bind(this)}
                        onBlur = {this.onBlur.bind(this)}
                    />
                    <label className = {this.state.activeClass}>{label}</label>   
                </div>
                <p className ='red-text darken-2'>{touched && error}</p>
            </div>
        )
    }
}

export default Input;
