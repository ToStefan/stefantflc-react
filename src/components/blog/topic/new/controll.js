import React from 'react';
import { RichUtils } from 'draft-js';

const EditorControll = (props) => {

    const onUnderlineClick = () => {
        props.onChange(RichUtils.toggleInlineStyle(props.editorState, 'UNDERLINE'));
    }

    const onBoldClick = () => {
        props.onChange(RichUtils.toggleInlineStyle(props.editorState, 'BOLD'));
    }

    const onItalicClick = () => {
        props.onChange(RichUtils.toggleInlineStyle(props.editorState, 'ITALIC'));
    }

    const onCodeClick = () => {
        props.onChange(RichUtils.toggleBlockType(props.editorState, "code-block"));
    }

    const onH1Click = () => {
        props.onChange(RichUtils.toggleBlockType(props.editorState, "header-one"));
    }

    const onUnOrderedListClick = () => {
        props.onChange(RichUtils.toggleBlockType(props.editorState, "unordered-list-item"));
    }

    const onOrderedListClick = () => {
        props.onChange(RichUtils.toggleBlockType(props.editorState, "ordered-list-item"));
    }


    return (
        <div>
            <button onClick={onUnderlineClick}><u>UNDERLINE</u></button>
            <button onClick={onBoldClick}><b>BOLD</b></button>
            <button onClick={onItalicClick}><i>ITALIC</i></button>
            <button onClick={onCodeClick}>Code</button>
            <button onClick={onH1Click}>H1</button>
            <button onClick={onUnOrderedListClick}>UL</button>
            <button onClick={onOrderedListClick}>OL</button>
        </div>
    );
};

export default EditorControll;