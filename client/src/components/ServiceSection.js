import React from 'react'
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg'
import home2 from '../img/home2.png'


const ServiceSection = () => {
    return (
        <div className='services'>
            <div className='description'>
                <h2>High <span>quality</span> services</h2>
                <div className='cards'>
                    <div className='card'>
                        <div className='icon'>
                            <img src={clock} alt='clock'/>
                            <h3>Effecient</h3>
                        </div>
                        <p>Lorem asdasdasd asdasdasdlkj asdasdasd</p>
                    </div>
                    <div className='card'>
                        <div className='icon'>
                            <img src={teamwork} alt='teamwork'/>
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem asdasdasd asdasdasdlkj asdasdasd</p>
                    </div>
                    <div className='card'>
                        <div className='icon'>
                            <img src={diaphragm} alt='diaphragm'/>
                            <h3>diaphragm</h3>
                        </div>
                        <p>Lorem asdasdasd asdasdasdlkj asdasdasd</p>
                    </div>
                    <div className='card'>
                        <div className='icon'>
                            <img src={money} alt='money'/>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem asdasdasd asdasdasdlkj asdasdasd</p>
                    </div>
                </div>
                <div className='image'>
                    <img src={home2} alt='home2'/>
                </div>
            </div>
            
        </div>
    )
}

export default ServiceSection