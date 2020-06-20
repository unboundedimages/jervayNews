import React from 'react';
import Cards from './Cards';

class NewsColumns extends React.Component {
  
     state = {
            hasErrors: false,
            articles: {},
            article1: "",
            articlesAll:[]
        };



    componentDidMount() {        
        fetch("https://jervay.agency/wsj")
        .then(res => res.json())
        .then(res => {
          
            const articles = res.articles;              
            this.setState({
                articlesAll: articles,
            })
        })
        .catch(() => this.setState({ hasErrors: true }))
    
}


render() {      
    
    return (   
        <div>               
            <Cards>{this.state.articlesAll}</Cards>
        </div>
    )
  }
}

export default NewsColumns;
