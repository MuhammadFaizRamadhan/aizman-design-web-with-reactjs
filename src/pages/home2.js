import React from 'react';
import '../style/home2.css';
import Fade from 'react-reveal/Fade';
import Media from '../components/media';
import { AiFillCheckCircle } from "react-icons/ai";

import { Parallax } from 'rc-scroll-anim';

export default class Home2 extends React.Component {
    render(){
        return(
            <div>
                <div className='container'>
                <div className="row">
                        <div className="col">
                            <h3 className='judul2'>Apa Masalah Anda?</h3>
                            <h4 className='pertanyaan'><AiFillCheckCircle /> Toko anda sepi?</h4>
                            <h4 className='pertanyaan'><AiFillCheckCircle /> Omset susah naik?</h4>
                            <h4 className='pertanyaan'><AiFillCheckCircle /> Banyak kompetitor?</h4>
                            <h4 className='pertanyaan'><AiFillCheckCircle /> Design kurang bagus?</h4>
                            <Parallax animation={{ x: 0 }} style={{ transform: 'translatex(150px)', margin: '10px auto' }}>
                                <Media  className='element1' image='element1.png'></Media>
                            </Parallax>
                            <Parallax animation={{ x: 200 }} style={{ transform: 'translatex(100px)', margin: '10px auto' }}>
                                <Media  className='element2' image='element2.png'></Media>
                            </Parallax>
                            </div>
                            <div className="col-5">
                                <Fade right>
                                <Media  className='content-home2' image='content-home2.png'></Media>
                                </Fade>
                            </div>
                        </div>
                </div>

            </div>
        )
    }
}