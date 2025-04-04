import React from 'react'
import './css/experience.css'
import Card from '../component/Card'

const Experience = () => {

    const img = `${process.env.PUBLIC_URL}/images/services`

    return (
        <div className="experience-container" id='experience'>
            <div className='pf-exp-container'>
                <div>
                    <h1 className='hpara'>Experience</h1>
                </div>
                <div className="pf-exp">
                    <Card data_aos={'fade-right'} delay={100} title={'UI/UX Design'} para={'Designerr Inc. (2012-2014)'} img={img + '/ui-ux.svg'} />
                    <Card data_aos={'fade-left'} delay={300} title={'App Development'} para={'MakeMyApp LLC. (2015-2018)'} img={img + '/ui-ux.svg'} />
                    <Card data_aos={'fade-right'} delay={200} title={'Web Design'} para={'Webbie LLC. (2018-2020)'} img={img + '/ui-ux.svg'} />
                    <Card data_aos={'fade-left'} delay={400} title={'Full Stack Development'} para={'Coder Inc. (2020-2021)'} img={img + '/ui-ux.svg'} />
                </div>
            </div>

        </div>

    )
}

export default Experience 