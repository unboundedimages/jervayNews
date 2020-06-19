import React from 'react';
import Cards from './Cards';

class NewsColumns extends React.Component {
    // constructor(props) {
    //     super(props);     
     state = {
            hasErrors: false,
            articles: {},
            article1: "",
            articlesAll:[]
        };
    // }


    componentDidMount() {        
        fetch("https://jervay.agency/wsj")
            .then(res => res.json())
            .then(res => {
                // this.setState({ articles: res })
                const articles = res.articles;
                const article1 = articles[1]
                console.log(articles)
                console.log(article1)
                this.setState({
                    articlesAll: articles,
                    article1: article1.description,
                 content:   article1.content
                })
                console.log("Descriptoin: ",this.state.article1);
                // console.log(res.articles[0].title)
               
            })
            .catch(() => this.setState({ hasErrors: true }))
        
    }


    render() {
      
        console.log("render: ", this.state.articlesAll)
        
        return (   
            <div>               
                <Cards>{this.state.articlesAll}</Cards>
            </div>
        )
    }
}

export default NewsColumns;
