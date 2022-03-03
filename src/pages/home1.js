import React from 'react';
import Navbar from '../components/navbar';
import '../style/home.css';
import Media from '../components/media';
// import Background1 from './background/background-homepage1.png'
// import Contenthome1 from '../assets/home/content-home1.png'
import Fade from 'react-reveal/Fade';

export default class Home1 extends React.Component {
    render(){
        return(
                <div className='bg'>
                    <div className='container' >
                        <div className="row">
                            <div className="col">
                            <h2 className='judul'>Digital</h2>
                            <h3 className='subjudul'>Marketing</h3>
                            <h3 className='subjudul'>Solution</h3>
                            <p className='penjelasan'> AIZMAN adalah perusahaan yang<br/> bergerak di bidang digital dan kreatif<br/> yang terletak di Indonesia</p> 
                            </div>
                            <div className="col-5">
                                <Fade right>
                                <Media  className='content-home1' image='content-home1.png'></Media>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}