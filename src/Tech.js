import React from "react";
import Cards from './Cards';

class Tech extends React.Component {

    state = {
        hasErrors: false,
        articles: {},
        article1: "",
        articlesAll:[]
    };

    componentDidMount() {
        fetch("https://jervay.agency/techNo")      
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

export default Tech;