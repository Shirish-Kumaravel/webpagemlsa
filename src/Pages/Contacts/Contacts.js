import React from 'react';
import './Contacts.css';

const Contacts = () => {

    return(
        <div>
            <h1 className='header'>Contact Me At</h1>
            <div className='contactcomponent'> <a href="tel:827-720-7380" class="fas fa-3x fa-phone phone "></a> <br></br> <a href="tel:827-720-7380">8277207380</a></div>
            <div className='contactcomponent'><a href="https://www.instagram.com/shirish.kumaravel/" class="fab fa-3x fa-instagram"></a></div>
            <div className='contactcomponent'> <i  class="fas fa-3x fa-envelope mail"></i><br></br>f20200131@pilani.bits-pilani.ac.in</div>

        </div>
    );


};
export default Contacts;