import React, { Component } from 'react';
import NavigationBar from './Components/NavBar/NavBar';
import About from './Pages/About/About';
import Contacts from './Pages/Contacts/Contacts';
import Skills from './Pages/Skills/Skills';
import Projects from './Pages/Projects/Projects';


import './App.css';



class App extends Component {
  state={
    page1: true,
    page2: false,
    page3: false,
    page4: false

  }

  togglePage1Handler = ( ) => {
    this.setState({page1: true,
      page2: false,
      page3: false,
      page4: false});
    }
  togglePage2Handler = ( ) => {
      this.setState({page1: false,
        page2: true,
        page3: false,
        page4: false});
      }
  togglePage3Handler = ( ) => {
        this.setState({page1: false,
          page2: false,
          page3: true,
          page4: false});
        }
  togglePage4Handler = ( ) => {
          this.setState({page1: false,
            page2: false,
            page3: false,
            page4: true});
          }
  
 
  render() {
   
    return (
      
      <div class='bgimg'>
        <div >
        <NavigationBar button1={this.togglePage1Handler} 
        button2={this.togglePage2Handler}
        button3={this.togglePage3Handler}
        button4={this.togglePage4Handler}
        check1={this.state.page1}
        check2={this.state.page2}
        check3={this.state.page3}
        check4={this.state.page4} /> 
        </div> 
        <div className='ContentBox'>
          <div>{this.state.page1?<About />:null}</div>
          <div>{this.state.page2?<Skills />:null}</div>
          <div>{this.state.page3?<Projects />:null}</div>
          <div>{this.state.page4?<Contacts />:null}</div>
         

        </div> 
        <footer>
          <h6> &#169; 2003 onwards_ Shirish Kumaravel</h6>
        </footer>
        </div> 
        
      

    );
  }
}

export default App;
