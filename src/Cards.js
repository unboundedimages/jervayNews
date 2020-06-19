import React from 'react';

class Cards extends React.Component {
    constructor(props) {
        super(props);     
        this.state = {
            hasErrors: false,
            articles: {},
            article1: "",
            articlesAll:[]
        };
    }


    render() {
       console.log("PROPS",this.props.children)
        return (
            <div className="ui container center aligned">                                      
              <div className="ui stackable three column grid">                   
                            {/* {this.state.articlesAll.map((item, index) => */}
                            {this.props.children.map((item, index) =>
                                <div className="column"  key={index}>
                                    <div className='ui segment'>
                                        <a href= {item.url}>
                                            <img size='small' src={item.urlToImage} alt="Click Me" style={{ width: "100%" }} />
                                        </a>
                                        <h3 className='ui header'>
                                            {item.title}
                                        </h3>
                                        <div className="ui divider"></div>
                                        <div className="column">
                                            {item.description}
                                        </div>
                                    </div>
                                </div>
                             )}                           
                        </div>
                </div>  
        )
    }
}

export default Cards;
