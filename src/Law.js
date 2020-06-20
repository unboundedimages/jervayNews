import React from "react";
import Cards from './Cards';


class LAW_S extends React.Component {

    state = {
        hasErrors: false,
        articlesAll:[]
    };

    componentDidMount() {
        fetch("https://jervay.agency/law_")      
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

export default LAW_S;