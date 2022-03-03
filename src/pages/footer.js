import React from "react";
import '../style/footer.css';
import Media from '../components/media';
import Bounce from 'react-reveal/Bounce';
import { AiFillPhone,AiFillMail,AiFillFacebook,AiFillInstagram,AiOutlineWhatsApp,AiFillYoutube } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { CgWebsite } from "react-icons/cg";

export default class Footer extends React.Component{
    render (){
        return(
            <div className="bg-footer">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-5">
                                <Bounce left>
                                <Media  className='content-contact' image='content-contact.png'></Media>
                                </Bounce>
                        </div>
                        <div className="col">
                            <div className="row">
                                <Bounce bottom>
                                <h2 className='judul-footer'>Contact & Social media</h2>
                                </Bounce>
                                        <div className="col">
                                            <h3 className='isi1-footer'><ImLocation /> Jl. Pahlawan Kav. 28-30, Jakarta</h3>
                                            <h3 className='isi-footer'><AiFillPhone /> (+62)859 2910 999</h3>
                                            <h3 className='isi-footer'><AiFillMail /> info@aizman.co.id</h3>
                                            <h3 className='isi-footer'><CgWebsite /> https://aizman.co.id</h3>
                                            </div>
                                        <div className="col">
                                            <h3 className="isi1-footer"><AiFillFacebook /> @aiz.marketing</h3>
                                            <h3 className="isi-footer"><AiFillInstagram /> @aiz.marketing</h3>
                                            <h3 className="isi-footer"><AiOutlineWhatsApp /> (+62)859 1212 9999</h3>
                                            <h3 className="isi-footer"><AiFillYoutube /> Aiz Production</h3>
                                        </div>
                                    </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}