import React from 'react'
import './css/experience.css'
import Card from '../component/Card'

const Experience = () => {
    return (

        <div className="exp-container">

            <div>
                <h1 className='hpara'>Experience</h1>
            </div>
            <div className="pf-exp">
                <Card title={'UI/UX Design'} para={'Designerr Inc. (2012-2014)'} img={'/images/services/ui-ux.svg'} />
                <Card title={'App Development'} para={'MakeMyApp LLC. (2015-2018)'} img={'/images/services/ui-ux.svg'} />
                <Card title={'Web Design'} para={'Webbie LLC. (2018-2020)'} img={'/images/services/ui-ux.svg'} />
                <Card title={'Full Stack Development'} para={'Coder Inc. (2020-2021)'} img={'/images/services/ui-ux.svg'} />
            </div>
        </div>

    )
}

export default Experience