import React from 'react'
import './css/skills.css'

const Skills = () => {
    return (
        <div className='container'>
            <div className="pf-skills">
                <h1 className='hsize'>my skills</h1>
                <p className='cpara'>I am a quick learner and specialize in multitude of skills required for Web Application Development and Product Design</p>
                <div className="skills-ctn">
                    <div className="per-skill">
                        <div className="name-qnty">
                            <p>HTML5</p><span>90%</span>
                        </div>
                        <div className="bar">
                            <input type='range' min={0} max={100} value={90} />
                        </div>
                    </div>
                    <div className="per-skill">
                        <div className="name-qnty">
                            <p>PHP</p><span>70%</span>
                        </div>
                        <div className="bar">
                            <input type='range' min={0} max={100} value={70} />
                        </div>
                    </div>
                    <div className="per-skill">
                        <div className="name-qnty">
                            <p>CSS3</p><span>90%</span>
                        </div>
                        <div className="bar">
                            <input type='range' min={0} max={100} value={90} />
                        </div>
                    </div>
                    <div className="per-skill">
                        <div className="name-qnty">
                            <p>WordPress</p><span>70%</span>
                        </div>
                        <div className="bar">
                            <input type='range' min={0} max={100} value={70} />
                        </div>
                    </div>
                    <div className="per-skill">
                        <div className="name-qnty">
                            <p>JavaScript</p><span>80%</span>
                        </div>
                        <div className="bar">
                            <input type='range' min={0} max={100} value={90} />
                        </div>
                    </div>
                    <div className="per-skill">
                        <div className="name-qnty">
                            <p>MySQL</p><span>60%</span>
                        </div>
                        <div className="bar">
                            <input type='range' min={0} max={100} value={60} />
                        </div>
                    </div>
                    <div className="per-skill">
                        <div className="name-qnty">
                            <p>React</p><span>75%</span>
                        </div>
                        <div className="bar">
                            <input type='range' min={0} max={100} value={75} />
                        </div>
                    </div>
                    <div className="per-skill">
                        <div className="name-qnty">
                            <p>Photoshop</p><span>60%</span>
                        </div>
                        <div className="bar">
                            <input type='range' min={0} max={100} value={60} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills