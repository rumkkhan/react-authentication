import React from 'react';
import { reduxForm, Field} from 'redux-form';
import {compose} from 'redux';
import {connect} from 'react-redux'
import * as actions from '../../actions/'


class SignUp extends React.Component{

    onSubmit = formProps  => {
        console.log(formProps)
        this.props.signup(formProps, () => {
            debugger
            this.props.history.push('/feature')
        })
       // this.props.history.push('/feature')

    }  

  

    render(){
        const {handleSubmit} = this.props;
         console.log(this.props.auth,'new')
         
        return(
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <fieldset>
                    <label>Email</label>
                    <Field 
                        name="email"
                        type="text"
                        component="input"
                        autoComplete="none"

                    />
                </fieldset>
                <fieldset>
                    <label>Password</label>
                    <Field 
                        name="password"
                        type="password"
                        component="input"
                        autoComplete="none"
                    />

                </fieldset>
                <button>Sing Up!</button>
            </form>
        )
    }
}

const mapStatetoProps = state => {
     return {auth: state.auth}
}
export default compose( 
    connect(mapStatetoProps,actions),
    reduxForm({form:'signup'})
)(SignUp)

