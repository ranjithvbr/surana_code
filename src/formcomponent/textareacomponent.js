import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';


class Textareabox extends React.Component{
    
    render(){
        return(
            <div>
                <TextareaAutosize
                    rowsMax={4}
                    aria-label="maximum height"
                    placeholder={this.props.placeholder && this.props.placeholder}
                    className={`textareastyle pt-1 pl-2 h-100 ${this.props.className && this.props.className}`}
                    />
            </div>
        )
    }
}

export default Textareabox;