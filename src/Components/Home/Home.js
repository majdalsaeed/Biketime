import React from 'react';
import '../Home/Home.css';
import Carousel from '../Carousel/Carousel';
import Cards from '../Cards/Cards';
import Footer from '../Footer/Footer';

function Home() {
    return (
        <>
        <Carousel />
        <Cards />
        <Footer />
        </>
    );
}
export default Home;