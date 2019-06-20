import React from 'react';

const BlogView = (props) => {

    // props.htmlOutput is string
    // must be converted back to html

    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: props.htmlOutput }} />
        </div>
    );
};

export default BlogView;