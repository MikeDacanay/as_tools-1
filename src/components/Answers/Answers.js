import React from 'react';

import Answer from './Answer/Answer';

import './Answers.scss';    

const Answers = props => {

    const POINT_VALUE = [
        25,
        50,
        75,
        100
    ];

    // console.log(props.answers);

    return (
        <div className="Answers">
            <form>
                {(props.answers.map((answer, i) =>
                    <Answer
                        answer={answer}
                        key={`Answer--${i}`}
                        pnlIdx={props.pnlIdx}
                        ansIdx={i}
                        value={POINT_VALUE[i]}
                    />
                ))}
            </form>
        </div>
    );
}

export default Answers;