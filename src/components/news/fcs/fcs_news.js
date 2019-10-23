import React, { Component } from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadAllNews } from '../../../actions';

import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import './fcs.css';

class FcsNews extends Component {

    onArticleClick = () => {
        const index = this.props.data.selectedArticle - 1;
        const articleId = this.props.data.all_news[index].id;
        const path = "/news/fcs/" + articleId;
        this.props.history.push(path);
    }

    setSelectedArticle = (current, total) => {
        this.props.data.selectedArticle = current;
    }

    renderNews = (news) => (
        news ?
            news.map((article, index) => (
                <div className="fcs-slider" key={index}>
                    <img src={article.picture} alt={article.title} />
                    <p className="legend">{article.title}</p>
                </div>)) : null
    )

    UNSAFE_componentWillMount() {
        this.props.loadAllNews();
    }

    render() {
        const settings = {
            infiniteLoop: true,
            selectedItem: this.props.data.selectedArticle,
            onClickItem: this.onArticleClick,
            statusFormatter: this.setSelectedArticle
        }
        return (
            <div className="container-fluid small-box">
                <Carousel {...settings} >
                    {this.renderNews(this.props.data.all_news)}
                </Carousel>
            </div>
        );
    }
}

const mapStateToProps = (state) => { return { data: state.news } }
const mapDispatchToProps = (dispatch) => { return bindActionCreators({ loadAllNews }, dispatch) }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FcsNews));