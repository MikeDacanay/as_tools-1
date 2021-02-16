import React from 'react';

import './Nav2.scss';

const Nav2 = props => {
    props.questions.push('extra');

    return (
        <div className='Nav2__wrapper'>
            <div className="Nav2__items">
                {props.questions.map((question, i) =>{
                    let retThis;
                    
                    if(i === 0){
                        retThis  = (<div className="Nav2__item Nav2__item-init Nav2__item-activate" key={`Nav2__item${i}`}>
                            <div className="Nav2__item--line"></div>
                            <div className="Nav2__item--text">{`0${i+1}`}</div>
                        </div>)
                    }                                        
                    else{
                        retThis  = (<div className="Nav2__item" key={`Nav2__item${i}`}>
                            <div className="Nav2__item--line Nav2__item--line"></div>
                            <div className="Nav2__item--text">{ i !==6 ? `0${i+1}` : ''}</div>
                        </div>)
                    }                    

                    return retThis;
                })}                    
            </div>
        </div>
    )
}

export default Nav2;