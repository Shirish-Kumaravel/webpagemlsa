import React from 'react' ;
import './NavBar.css';


const NavigationBar = (props) => {

    
    return(
        <div>
            <p>.</p>
        <div className= 'App-header'>
            <div id='logo'>
        <p>Shirish Kumaravel</p>
           </div>
        <nav>
            <ul>
                <li><button onClick={props.button1} className={props.check1?'rnavbutton':'navbutton'}>About</button></li>
                <li><button onClick={props.button2} className={props.check2?'rnavbutton':'navbutton'}>Skills</button></li>
                <li><button onClick={props.button3} className={props.check3?'rnavbutton':'navbutton'}>Projects</button></li>
                <li><button onClick={props.button4} className={props.check4?'rnavbutton':'navbutton'}>Contacts</button></li>
            </ul>
        </nav>
        </div>
        </div>

    );   
};

export default NavigationBar;