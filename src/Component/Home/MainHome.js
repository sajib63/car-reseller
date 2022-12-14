import React from 'react';
import AllProducts from './AllProducts';
import Carousel from '../Home/Carousel/Carouselapp'
import ExtraSection from './ExtraSection';
import ExtraSectiontwo from './ExtraSectiontwo';
import AdvertisementProduct from './AdvertisementProduct';


const MainHome = () => {
  
    return (
        <div>
            <div>
               <Carousel></Carousel>
            </div>

           

            <div>
            <AllProducts></AllProducts>

            </div>


            <div className='my-20'>
                <AdvertisementProduct></AdvertisementProduct>
            </div>

            <div>
                <h1 className='text-3xl text-neutral text-center font-bold'>Our Success</h1>

                <ExtraSection></ExtraSection>
            </div>

            <div>
                <ExtraSectiontwo></ExtraSectiontwo>
            </div>
        </div>
    );
};

export default MainHome;