import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadArticleById } from '../../../actions';

import GoTo from '../../../widgets/go_to';

class FcsArticle extends Component {

    renderArticle = (article) => (
        article ?
            <div>
                <h3>{this.props.data.article.title}</h3>
                <br />
                <div
                    className="article-content"
                    dangerouslySetInnerHTML={{ __html: this.props.data.article.content }}
                />
            </div>
            :
            null
    )

    UNSAFE_componentWillMount() {
        this.props.loadArticleById(this.props.match.params.id);
    }

    render() {
        return (
            <div className="container box middle-box">
                <GoTo to="/news" side="left" text="Go back to news" hr="0" />
                {this.renderArticle(this.props.data.article)}
            </div>
        );
    }
}

const mapStateToProps = (state) => { return { data: state.news } }
const mapDispatchToProps = (dispatch) => { return bindActionCreators({ loadArticleById }, dispatch) }

export default connect(mapStateToProps, mapDispatchToProps)(FcsArticle);