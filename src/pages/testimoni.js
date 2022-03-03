import React from 'react';
import '../style/testimoni.css';
import Bounce from 'react-reveal/Bounce';
import Media from '../components/media';

export default class Testimoni extends React.Component {
    render (){
        return(
            <div className='container container-testimoni'>
                <h3 className='judul-testimoni'>Apa Kata Mereka ?</h3>
                <div className="row">
                    <div className="col-sm">
                        <div className="card">
                        <div className="card-body">
                            <Media className='ratestar' image='rate-star.png'></Media>
                            <p className="card-text">Tim profesional dengan pelayanan luar biasa. Rekomendasi buat yang ingin membuat videoanimation dan video ediiting bisa langsung ke AIZMAN</p>
                            <h5 className="card-title">OFFSET BOBA</h5>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card">
                        <div className="card-body">
                            <Media className='ratestar' image='rate-star.png'></Media>
                            <p className="card-text">Tim profesional dengan pelayanan luar biasa. Rekomendasi buat yang ingin membuat videoanimation dan video ediiting bisa langsung ke AIZMAN</p>
                            <h5 className="card-title">KEBABSLEMAN</h5>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card">
                        <div className="card-body">
                            <Media className='ratestar' image='rate-star.png'></Media>
                            <p className="card-text">Tim profesional dengan pelayanan luar biasa. Rekomendasi buat yang ingin membuat videoanimation dan video ediiting bisa langsung ke AIZMAN</p>
                            <h5 className="card-title">SEGO5RB</h5>
                        </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}