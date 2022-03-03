import React from "react";
import '../style/portfolio.css';
import Media from '../components/media';
import Navbar from "../components/navbar";
import Footer from "./footer";
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

export default class Portfolio extends React.Component{
    render() {
        return(
            <div>
                <Navbar />
                <div className="bg-portfolio">
                    <div className="container container-portfolio">
                        <div className="row">
                            <div className="col">
                                <h1 className="judul-portfolio">OUR<br/>CLIENT</h1>
                                <h5 className="isi-portfolio">AIZMAN menjalin kerjasama dengan <br/>beberapa perusahaan dan<br/>mempunyai client</h5>
                            </div>
                            <div className="col">
                                <Fade right>
                                    <Media  className='contentportfolio' image='content-portfolio.png'></Media>
                                </Fade>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Slide bottom>
                            <Media  className='museumoftoys' image='museumoftoys3.png'></Media>
                        </Slide>
                        <Slide bottom>
                        <Media  className='thesocialhouse' image='thesocialhouse.png'></Media>
                        </Slide>
                    <Footer />
                    </div>
                </div>
            </div>
            
        )
    }
}