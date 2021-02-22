import React from 'react'
import './Answers.css'

function Answers(props) {
  return (
    <div className='App-answers'>
      <p>Ответы:</p>
      <p>
        1.&nbsp;
        {props.hasInput1 ? <textarea></textarea> : undefined}
      </p>
      <p>
        2.&nbsp;
        {props.hasInput2 ? <textarea></textarea> : undefined}
      </p>
      <p>
        3.&nbsp;
        {props.hasInput3 ? <textarea></textarea> : undefined}
      </p>
      <p>
        4.&nbsp;
        {props.hasInput4 ? <textarea></textarea> : undefined}
      </p>
      <p>
        5.&nbsp;
        {props.hasInput5 ? <textarea></textarea> : undefined}
      </p>
      <p>
        6.&nbsp;
        {props.hasInput6 ? <textarea></textarea> : undefined}
      </p>
      <p>
        7.&nbsp;
        {props.hasInput7 ? <textarea></textarea> : undefined}
      </p>
      <p>
        8.&nbsp;
        {props.hasInput8 ? <textarea></textarea> : undefined}
      </p>
      <p>
        9.&nbsp;
        {props.hasInput9 ? <textarea></textarea> : undefined}
      </p>
      <p>
        10.&nbsp;
        {props.hasInput10 ? <textarea></textarea> : undefined}
      </p>
      <p>
        11.&nbsp;
        {props.hasInput11 ? <textarea></textarea> : undefined}
      </p>
      <p>
        {props.hasEnd ? (
          <p>
            <div>Спасибо за участие в анкетировании.</div>
          </p>
        ) : undefined}
        <button onClick={props.testEnd}>Завершить анкетирование</button>
      </p>
    </div>
  )
}

export default Answers
