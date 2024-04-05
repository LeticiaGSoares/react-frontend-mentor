import React from 'react'
import Button from '../Button/Button'
import './ResultContainer.css'
import data from '../data.json'

const ResultsSide = (props) => {
    return (
        <div className='results-side'>
            <h3 className='lighter-text'>Your Result</h3>
            <div className="result-circle">
                <h1>{props.userRights}</h1>
                <p className='lighter-text'>of 100</p>
            </div>
            <div className='message'>
                <h2>{props.title}</h2>
                <p className='lighter-text'>{props.text}</p>
            </div>
        </div>
    )
}

const SummarySide = () => {
    const CategoryScore = () => {
        const fontColors = [
            'var(--Light-red)',
            'var(--Orangey-yellow)',
            'var(--Green-teal)',
            'var(--Cobalt-blue)'
        ]

        const bgColors = [
            'hsla(0, 100%, 67%, .07)',
            'hsla(39, 100%, 56%, .07)',
            'hsla(166, 100%, 37%, .07)',
            'hsla(234, 85%, 45%, .07)'
        ]
        

        const scoreBoxes = data.map((element, index) => (
            <div style={{backgroundColor: bgColors[index]}} className="score-box">
                <div>
                    <img src={element.icon} alt={element.category} />
                    <p style={{color: fontColors[index] }}>{element.category}</p>
                </div>
                
                <div>
                    <p>{element.score} <span className='lighter-text'>/ 100</span></p>
                </div>
            </div>
        ));

        return scoreBoxes;
    };

    return (
        <div className='summary-side'>
            <h3>Summary</h3>
            <div className="score-container">
                <CategoryScore />
            </div>
            <Button title="Continue" link="#"/>
        </div>
    );
};

const ResultContainer = () => {
    return (
        <div className="container">  
            <ResultsSide userRights="76" title="Great" text="You scored higher than 65% of the people who have taken these tests."/>
            <SummarySide/>
        </div>
    )
}

export default ResultContainer;