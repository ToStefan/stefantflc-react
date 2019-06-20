import React, { Component } from 'react';
import { Editor, EditorState } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import { stateFromHTML } from 'draft-js-import-html';

import EditorControll from './controll';
import BlogView from '../../widgets/topic/view';

import './editor.css';


class BlogEditor extends Component {

    state = {
        editorState: EditorState.createEmpty()
    };

    onChange = (editorState) => {
        this.setState({ editorState });
    }

    addImage = () => {
        let currentHTML = stateToHTML(this.state.editorState.getCurrentContent());
        currentHTML = currentHTML +
            "<div><img src='https://images.pexels.com/photos/1212487/pexels-photo-1212487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'><p>OPIS SLIKE</p></div>";
        let contentState = stateFromHTML(currentHTML);
        this.setState({ editorState: EditorState.createWithContent(contentState) });
    }

    render() {
        return (
            <div>
                <div className="editor-controll">
                    <EditorControll
                        onChange={this.onChange}
                        editorState={this.state.editorState}
                    />
                </div>
                <button onClick={this.addImage}>Add image</button>
                <div className="editor-field">
                    <Editor
                        editorState={this.state.editorState}
                        onChange={this.onChange}
                    />
                </div>
                <div className="blog-post">
                    <BlogView
                        htmlOutput={stateToHTML(this.state.editorState.getCurrentContent())}
                    />
                </div>
            </div>
        );
    }
}

export default BlogEditor;