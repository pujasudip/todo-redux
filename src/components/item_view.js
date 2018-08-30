import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleItem, deleteItem, resetSingle } from '../actions';

class ItemView extends Component{
    componentDidMount(){
        const id = this.props.match.params.id;
        this.props.getSingleItem(id);
        console.log('component:', id );
    }

    componentWillUnmount(){
        this.props.resetSingle();

    }

    handleDelete(){
        const id = this.props.match.params.id;
        this.props.deleteItem(id);
    }

    render(){
        console.log('item:', this.props.item);

        if(this.props.error){
            return <h2 className="center red">{this.props.error}</h2>
        }

        return (
            <div>
                <h1 className="center">View Item</h1>
                <h2>{this.props.item.title}</h2>
                <button onClick={this.handleDelete.bind(this)} className='btn red darken-2'>Delete</button>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        item: state.list.single,
        error: state.list.error
    }
}

export default connect(mapStateToProps, { getSingleItem: getSingleItem, deleteItem: deleteItem, resetSingle: resetSingle })(ItemView);