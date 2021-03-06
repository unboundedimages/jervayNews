import React from "react";

class Politicoo extends React.Component {

    state = {
        hasErrors: false,
        articles: {},
        article1: "",
        articlesAll:[]
    };

    componentDidMount() {
        fetch("https://jervay.agency/politicss")        
        // fetch("http://192.168.0.4:8082/Business")        
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
                console.log(this.state.article1);
                // console.log(res.articles[0].title)
               
            })
            .catch(() => this.setState({ hasErrors: true }))
        
    }

    render() {
        let arr = [];
        console.log("arr: ", arr)
        console.log("render: ", this.state.articlesAll)

        Object.keys(this.state.articlesAll).forEach((key) => arr.push(this.state.articlesAll[key]));
        return (            
            // <div>
                <div className="ui container center aligned">                                      
                    {/* <div className='ui container'>                         */}
                        <div className="ui stackable three column grid">
                            {arr.map(item =>
                                <div className="column">
                                    <div className='ui segment'>
                                        <a href= {item.url}>
                                            {/* <img size='small' src={item.urlToImage} alt="" style={{ width: "100%" }} /> */}
                                            <img size='small' src={item.urlToImage.replace('http:','')} alt="click me" style={{ width: "100%" }} />
                                        </a>
                                        <h3 className='ui header'>
                                            {item.title}
                                        </h3>
                                        <div class="ui divider"></div>
                                        <div className="column">
                                            {item.description}
                                        </div>
                                    </div>
                                </div>
                             )}                           
                        </div>
                    {/* </div> */}
                </div>
            // </div>           
        )
    }
}

export default Politicoo;