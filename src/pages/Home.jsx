import React from 'react'
import Header from "../components/Header"
import WhyChoose from '../pages/WhyChoose';
import Overview from '../pages/Overview'
import Pricing from './Pricing';
import Audience from './Audience';
import Footer from '../components/Footer';

const Home = () => {
  return (
<>

<Overview/>
<WhyChoose/>
<Pricing/>
<Audience/>
<Footer/>
</>  )
}

export default Home