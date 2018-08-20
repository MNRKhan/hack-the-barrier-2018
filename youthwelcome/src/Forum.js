import React, { Component} from 'react';
import './Forum.css';

class Forum extends Component {
    render() {
        return (
            <div>
                <div className="panel panel-default post-body">
                    <div className="panel-body">
                        Hello I'm a post
                    </div>
                </div>
                <div className = "panel panel-default post-editor">
                    <div className="panel-body">
                        <textarea className="form-control"/>
                        <button className = "btn btn-success post-editor-button"> Post </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Forum;