import React from 'react';
import { connect } from 'react-redux';
import Header from '../header/index';

export default function layoutWrapper(WrapperComponent){
    class Layoutwrapper extends React.Component{
        render(){
            return(
                <React.Fragment>
                    <Header>
                        <WrapperComponent {...this.props} />
                    </Header>
                </React.Fragment>
            )
        }
    }
    return connect()(Layoutwrapper)
}