import React from 'react';

//import data
import { pricing } from '../data';

//import components
import { PlanList } from './PlanList';

//import icons
import {} from 'react-icons';


export function Pricing() {
    //destructure pricing data
    const {icon, title, plans} = pricing;
    return (
        <section className='section' id='preços'>
            <div className='section-title-group max-w-[540px] mx-auto px-4 lg:px-0' data-aos="fade-up" data-aos-offset="200" data-aos-delay="200">
                <img src={icon} alt="" />
                <h2 className='h2'>{title} <span className='text-primary-200'>.</span></h2>
            </div>
            <PlanList plans={plans} />
        </section>
    )
}