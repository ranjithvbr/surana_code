import React from 'react';
import { connect } from 'react-redux';
import Testform from './Testform';
import './Play.css';

class Playground extends React.Component{
    move = () => {
        this.props.history.push('/listpage')
    }
    render(){
        const { dispatch, history } = this.props;
        console.log(this.props.history)
        return(
            <React.Fragment>
                <div className="container">
                    <p>Playground file</p>
                    <Testform dispatch={dispatch} history={history}/>
                    <button className="btn btn-primary btn-sm" onClick={this.move}>show list</button>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.nameReducer
});

export default connect(mapStateToProps)(Playground);