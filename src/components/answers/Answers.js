import React from 'react'
import './Answers.css'

function Answers(props) {
  return (
    <div className='App-answers'>
      <p>Ответы:</p>

      <div>
        <p>{props.text}</p>
        <input />
      </div>

      {/* const props = {
text: 'some text',
id: 3,
}; */}

      <p>
        {props.hasEnd ? (
          <p>
            <div> Спасибо за участие в анкетировании.</div>
          </p>
        ) : undefined}
        <button onClick={props.testEnd}>Завершить анкетирование</button>
      </p>
    </div>
  )
}

export default Answers
