import React from 'react';
import './App.css';
import Banner from './banner';
// import HDivider from './HDivider';
import HomeMenu from './HomeMenu';
// import NewsColumns from './NewsColumns';
class App extends React.Component {
  render() {
    return (
      <div className='ui container'>
          <Banner/>
        
          <HomeMenu />
          {/* <HDivider /> */}
          {/* <NewsColumns/> */}
       
      </div>  
     
    )
  }
}

export default App;
