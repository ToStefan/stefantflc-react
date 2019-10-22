import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadAllNews } from '../../actions';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class FcsNews extends Component {

    renderNews = (news) => (
        news ?
            news.map((article, index) => (
                <div key={index}>
                    <img src={article.picture} alt={article.title} />
                    <p className="legend">{article.title}</p>
                </div>)) : null
    )

    componentWillMount() {
        this.props.loadAllNews();
    }

    render() {
        const settings = {
            infiniteLoop: true,
            centerMode: true,
            selectedItem: 5,
            autoPlay: true,
            interval: 4000
        }
        return (
            <div className="container-fluid small-box">
                <Carousel {...settings} >
                    {this.renderNews(this.props.data)}
                </Carousel>
            </div>
        );
    }
}

const mapStateToProps = (state) => { return { data: state.all_news } }
const mapDispatchToProps = (dispatch) => { return bindActionCreators({ loadAllNews }, dispatch) }

export default connect(mapStateToProps, mapDispatchToProps)(FcsNews);