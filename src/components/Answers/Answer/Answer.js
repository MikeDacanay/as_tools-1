import React from 'react';
import { gsap } from 'gsap';
import { connect } from 'react-redux';
import $ from 'jquery';
import * as actionCreators from '../../../store/actions/index';

import './Answer.scss';

const Answer = props => {

    const animateAnswers = (pnlIdx, rdIdx) => {
        const animateThese = $(`.Answer--${pnlIdx}`).filter((i, answer) => {                
            if(i !== Number(rdIdx)){
                return answer;
            }
        });
        
        gsap.to(`.Answer--${pnlIdx}`, {
            opacity: 1, 
            duration: .5
        })
        gsap.to(animateThese, {
            opacity: .7,
            duration: .5
        })
    }

    const answerInputHandlr = (panelIdx, radioIdx) => {

        gsap.to(`#Next_${props.pnlIdx}`, {
            opacity: 1, 
            pointerEvents: 'all',
            duration: 1
        })
        .delay(.5);      

        animateAnswers(panelIdx, radioIdx);

        props.onUpdateScore(props.pnlIdx, props.value);
    }

    return (
        <div className={`Answer Answer--${props.pnlIdx}`}>            
            <input 
                type="radio" 
                id={`qA--${props.pnlIdx}-${props.ansIdx}`} 
                name={`qA--${props.pnlIdx}`}
                className={`Answer__radio Answer__radio${props.pnlIdx}`}
                onClick = {() => answerInputHandlr(`${props.pnlIdx}`, `${props.ansIdx}`)}
                value={props.value}/>
            <label 
                className='Answer__label'
                htmlFor={`qA--${props.pnlIdx}-${props.ansIdx}`}>
                <div className="Answer__radio--faux"></div>
                <div className="Answer__txt">{props.answer}</div>
            </label>
        </div>

    );
}

const mapDispatchToProps = dispatch => {
    return {
        onUpdateScore: (i, v) => dispatch(actionCreators.update_score(i, v)),
    };
}

export default connect(null, mapDispatchToProps)(Answer);