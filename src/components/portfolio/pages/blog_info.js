import React from 'react';
import { Link } from 'react-router-dom';

const BlogInfo = () => {
    return (
        <div className="box container">
            <p><i>Blog is under development!</i></p>
            <p><i>
                You can find <a href="https://github.com/ToStefan/stefantflc-react/tree/react-blog" target="_blank" rel="noopener noreferrer">
                    <u>source code</u>
                </a> on my github.
		    </i></p>
            <img id="blog-img" src={require("./../../../assets/images/work-in-progress.png")} alt="work in progress img" />
            <br />
            <Link to="/b"><i><b>- Enter the Blog -</b></i></Link>
        </div>
    );
};

export default BlogInfo;