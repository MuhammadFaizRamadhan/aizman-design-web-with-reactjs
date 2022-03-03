import React from 'react';
import Navbar from './components/navbar';
import Home1 from './pages/home1';
import Home2 from './pages/home2';
import Layanan1 from './pages/layanan1';
import Testimoni from './pages/testimoni';
import Footer from './pages/footer';

export default class Homepage extends React.Component {
    render(){
        return(
            <div>
                <Navbar />
                <Home1 />
                <Home2 />
                <Layanan1 />
                <Testimoni />
                <Footer />
            </div>
        )
    }
}