import React, {Component} from 'react';
import HDivider from './HDivider';
// import NewsColumns from './NewsColumns';
import NewsColumns from './NewsColumnsTest';
import Biz from './Business';
import Tech from './Tech';
import Political from './Politics';
import HBCUS from './HBCU';
import LAW_S from './Law';
import HistoryB from './History';
import APNews from './Ap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
//import NewsColumns from './NewsColumns';
  
const images = {
    img1: <img size='small' src="//images.wsj.net/im-136716/social" alt=""
        style={{width:"400px"}} />
}

class HomeMenu extends React.Component {
    render() {
        return (
            <Router>
                {/* <div className='ui container'> */}
                <div>
                    <div className='ui borderless main menu' style={{"":""}}>
                        <div className='ui text container'>                        
                            <Link to="/" className='header item'>Home</Link>
                            <Link to="/Business" className='item'>Business</Link>
                            <Link to="/Technology" className='item'>Technology</Link>
                            <Link to="/Politics" className='item'>Politics</Link>
                            <Link to="/HBCU" className='item'>HBCU</Link>
                            <Link to="/Community" className='item'>Community</Link>
                            <Link to="/Law" className='item'>Law</Link>
                            <Link to="/History" className='item'>History</Link>
                            <Link to="/Ap" className='item'>AP News</Link>
                        </div>
                    </div> 
                    <div className="ui container center aligned">
                        {images.img1}
                    </div>
                    <HDivider />
                </div>

                <Switch>
                    <Route exact path="/">
                        <NewsColumns/>
                    </Route>
                    <Route exact path="/Business">
                        <Biz/>
                    </Route>
                    <Route exact path="/Technology">
                        <Tech/>
                    </Route>                    
                    <Route exact path="/Politics">
                        <Political/>
                    </Route>
                    <Route exact path="/HBCU">
                        <HBCUS/>
                    </Route>
                    <Route exact path="/Law">
                        <LAW_S/>
                    </Route>
                    <Route exact path="/History">
                        <HistoryB/>
                    </Route>
                    
                    <Route exact path="/Ap">
                        <APNews/>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default HomeMenu;
