import React from 'react';
const Masthead = "The Carolinian Newspaper"
class Banner extends React.Component {
    render() {
        return (
            <div>
            {/* // <div className='ui container'> */}
                <div className="ui inverted segment">
                    <p className="ui center aligned"> AAPL 200 &nbsp;  AMZN 300</p>                    
                </div>
                <h1  className="ui center aligned header">
                    {Masthead}
                </h1>
                    <p> </p>
            </div>
        )
    }
}

export default Banner;