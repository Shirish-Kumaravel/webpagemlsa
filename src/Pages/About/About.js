import React from 'react';
import './About.css';
import Image1 from './Person1.jpg';
import Image2 from './Person2.jpg';
import Image3 from './Person3.jpg';
import Image4 from './Person4.jpg';

const About = () =>
{
    return(
        <div>
            <div className='commentbox'>
              <div className='user'>
               <img src= {Image1} className='ProfileImages'></img>
               <div className='Dist'>
               <h6>2003-2008</h6>
               </div>
               <h1>Welcome Dance</h1>
              
              <p>Brought into  this World at 2:30PM on the 10th of May ,2003 in Krishnagiri,Tamilnadu. Spent the first few months of my infant life in Pune,
                followed by Bangalore for a couple of years before finally going to Sharjah,UAE where I completed my initial years of my formal education .
                While all I can remember from this phase of life are only a few glimpses of some eventful moments, they are treasured at the bottom of my heart.  </p>
              </div>


            </div>
            <div className='commentbox'>
            <div className='user'>
               <img src= {Image2} className='ProfileImages'></img>
               <div className='Dist'>
            
               <h6>2008-2018</h6>
               </div>
               <h1>A Free Bird</h1>
               
               <p>Back in Bangalore for 9 year long jounrey in Presidency School Bangalore South, ranging from Grade 2 to grade 10. Always surrounded by loved ones, family and peer.
                  Mostly carefree, our greatest worries would also be the silliest.Not bound by any strings, 9 years blissfully passed, probably the best part of my still very
                   young life.
                   </p>
                
                 </div>
               

            </div>
            <div className='commentbox'>
            <div className='user'>
               <img src= {Image3} className='ProfileImages'></img>
               <div className='Dist'>
               
               <h6>2018-2020</h6>
               </div>
               <h1>Bound by JEE</h1>
               
               <p>Spent 2 years at Sri Kumarans Childrens Home, CBSE along with weekend Allen classes. Cannot say they were very eventful but I was still blessed with wonderful teachers and peer
                 who all worked towards a common goal, a goal which involved a two year relentless race.A race that we could't afford to give up in, a race which required complete dedication.
                 My stint ,although not extraordinary ended satisfactorily.
               </p>
                   </div>
               

            </div>
            <div className='commentbox'>
            <div className='user'>
               <img src= {Image4} className='ProfileImages'></img>
               <div className='Dist'>
           
               <h6>2020-</h6>
               </div>
               <h1>Covid Crash</h1>
               
               <p>
                A heavily anticipated part of my life, brought crashing to the ground by a world-wide pandemic. Desperately trying to make most out of what is available
                ,making Online friends in the process. trying to pick up skills while simultaneously balancing the heavy unexpected academics.
               </p>
                 </div>
               
               
            </div>

        </div>


    );
};

export default About;