import React, {useState} from 'react';
import { connect } from 'react-redux';
import ResultSet from '../../libs/ResultSet';

import Modal from '../../hoc/Modal/Modal';

import './Gate.scss';

const Gate = props => {
    const [answer1, setAnswer1] = useState(false);
    let show = props.currentQuestion === 2 && !answer1 ? true : false;

    const iframeClickHandlr = (num) => {           
        setAnswer1(true);
    };

    return(
        <Modal
            showOut={show}>
            <div className="Gate__container">
                <div className="Gate" onClick={iframeClickHandlr}></div>
                <iframe className='Gate__Iframe' title="Finance tool gate" frameborder="0" allowfullscreen="true" allow="fullscreen" src={`https://www.oracle.com/${ResultSet.cc[props.currentLang]}/asset/modern-finance-assessment/form.html`}></iframe>             
            </div>                                                        
        </Modal>
    )
};

const mapStateToProps = state => { 
    return {
        currentQuestion: state.questionsReducer.currentQuestion,
        currentLang: state.langReducer.currentLang,
    }
}

export default connect(mapStateToProps, null)(Gate);