import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {
    static defaultProps = {
        country: 'us',
        pageSize: 8,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    constructor(props){
        super(props);
        this.state = {
            articles : [],
            loading : false,
            page:1
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsCatcher`;
    }

    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6b441c3a187649fe9aab9b33a8d7eb74&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        this.setState({loading : true});
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading : false
        })
    }
    async componentDidMount(){
       this.updateNews();
    }

    handlePrevClick = async () => {
        this.setState({page : this.state.page - 1});
        this.updateNews();
    }

    handleNextClick = async () => {
            this.setState({page : this.state.page + 1});
            this.updateNews();
        }

    render() {
        return (
            <div className="container my-3">
                <h2 className="text-center" style={{ margin : '35px 0px', marginTop : '90px'}}>NewsCatcher - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element)=>{
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author?element.author:"(Unknown)"} date={element.publishedAt?element.publishedAt:""} />
                        </div>
                    })}    
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News