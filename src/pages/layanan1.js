import React from 'react';
import '../style/layanan1.css';
import Bounce from 'react-reveal/Bounce';
import Media from '../components/media';
import { Parallax } from 'rc-scroll-anim';

export default class Layanan1 extends React.Component {
    render () {
        return(
            <div className='container'>
                <Bounce bottom>
                <h2 className='judulLayanan'>Layanan AIZMAN</h2>
                </Bounce>
                    <div className="row">
                        <div className="col">
                            <h2 className='jenisLayananL'>Social Media management</h2>
                            <h3 className='isiLayananL'>AIZMAN mempunyai bidang Social Media Management </h3>
                            <h3 className='isiLayananL'>yang bertujuan Memudahkan dan mempercepat</h3>
                            <h3 className='isiLayananL'>pengerjaan di media sosial</h3>
                            <Parallax animation={{ x: 0 }} style={{ transform: 'translatex(150px)', margin: '10px auto' }}>
                                <Media  className='element3_1' image='element3_1.png'></Media>
                            </Parallax>
                            <Parallax animation={{ x: 100 }} style={{ transform: 'translatex(0px)', margin: '10px auto' }}>
                                <Media  className='element3_2' image='element3_2.png'></Media>
                            </Parallax>
                        </div>
                        <div className="col-5">
                                <Bounce right>
                                <Media  className='socialmediamanagement' image='social-media-management.png'></Media>
                                </Bounce>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Bounce left>
                                <Media  className='webdevelopment' image='web-development.png'></Media>
                            </Bounce>
                        </div>
                        <div className="col-5">
                            <h2 className='jenisLayananR'>Website Development</h2>
                            <h3 className='isiLayananR'>AIZMAN mempunyai bidang Website Development</h3>
                            <h3 className='isiLayananR'>yang bertujuan Membantu dan memudahkan</h3>
                            <h3 className='isiLayananR'>pembuatan Website Anda </h3>
                            <Parallax animation={{ x: 100 }} style={{ transform: 'translatex(0px)', margin: '10px auto' }}>
                                <Media  className='element4_1' image='element4_1.png'></Media>
                            </Parallax>
                            <Parallax animation={{ x: 0 }} style={{ transform: 'translatex(100px)', margin: '10px auto' }}>
                                <Media  className='element4_2' image='element4_2.png'></Media>
                            </Parallax>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h2 className='jenisLayananL'>Video Animation</h2>
                            <h3 className='isiLayananL'>AIZMAN mempunyai bidang Video Animation</h3>
                            <h3 className='isiLayananL'>yang mempermudah pembuatan animsi 2D,</h3>
                            <h3 className='isiLayananL'>Animasi 3D dan lain lain </h3>
                            <Parallax animation={{ x: 0 }} style={{ transform: 'translatex(150px)', margin: '10px auto' }}>
                                <Media  className='element1' image='element1.png'></Media>
                            </Parallax>
                            <Parallax animation={{ x: 200 }} style={{ transform: 'translatex(100px)', margin: '10px auto' }}>
                                <Media  className='element2' image='element2.png'></Media>
                            </Parallax>
                        </div>
                        <div className="col-5">
                                <Bounce right>
                                <Media  className='videoanimation' image='video-animation.png'></Media>
                                </Bounce>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Bounce left>
                                <Media  className='videoediting' image='video-editing.png'></Media>
                            </Bounce>
                        </div>
                        <div className="col-5">
                            <h2 className='jenisLayananR'>Video Editing</h2>
                            <h3 className='isiLayananR'>AIZMAN mempunyai bidang Video Editing</h3>
                            <h3 className='isiLayananR'>yang mempermudah pengerjaan coloring,</h3>
                            <h3 className='isiLayananR'>transition dan lain lain </h3>
                            <Parallax animation={{ x: 100 }} style={{ transform: 'translatex(0px)', margin: '10px auto' }}>
                                <Media  className='element3_1' image='element3_1.png'></Media>
                            </Parallax>
                            <Parallax animation={{ x: 0 }} style={{ transform: 'translatex(100px)', margin: '10px auto' }}>
                                <Media  className='element3_2' image='element3_2.png'></Media>
                            </Parallax>
                        </div>
                    </div>
            </div>
        )
    }
}