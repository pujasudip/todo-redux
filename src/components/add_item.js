import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addItem } from '../actions';

class AddItem extends Component{

    handleAddItem = async (values) => {
        await this.props.addItem(values);
        // this.props.history.goBack();
        // this.props.reset();
        this.props.history.push('/');
    }

    renderInput({label, input, meta: {touched, error}}){
        return (
            <div className="row">
                <div className="col s12 left-align">
                    <label>{label}</label>
                    <input {...input} type='text' style={{backgroundColor: '#EAF2F8'}}/>
                    <p className='red-text text-darken-2'>{touched && error}</p>
                </div>
            </div>
        );
    }
    
    render(){
        const { handleSubmit } = this.props;
        return (
            <div>
                <h1 className='center'>Item</h1>
                <div className="row right-align">
                    <Link to='/' className="btn pink darken-2">Back To List</Link>
                    <div className="col s12">
                        <div className="row">
                            <form onSubmit={handleSubmit(this.handleAddItem)} className='col s12 m8 offset-m2'>
                                <Field name='title' teacher='Dan' label='Title' component={this.renderInput}/>
                                <Field name='details' teacher='Cody' label='Details' component={this.renderInput}/>
                                <div className="row">
                                    <div className="col s12 center">
                                        <button className='btn btn-small'>Add Item</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function validate(values){
    const { title, details } = values;
    const errors = {};

    if(!title){
        errors.title = "Please give you item a title."
    }

    if(!details){
        errors.details = "Please enter details about your item.";
    }

    return errors;
}

AddItem = reduxForm({
    form: 'add-item',
    validate: validate
})(AddItem);

export default connect(null, { addItem: addItem })(AddItem);