import React from 'react';

const BlogInfo = () => {
    return (
        <div class="box container">
            <p><i>Blog is under development!</i></p>
            <p><i>
                You can find <a href="https://github.com/ToStefan/stefantflc-react/tree/react-blog" target="_blank" rel="noopener noreferrer">
                    <u>source code</u>
                </a> on my github.
		    </i></p>
            <img id="blog-img" src={require("./../../assets/images/work-in-progress.png")} alt="work in progress img" />
        </div>
    );
};

export default BlogInfo;