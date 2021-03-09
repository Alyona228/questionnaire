import React from 'react'
import './Questions.css'

function Questions(props) {
  return (
    <div className='App-quwstion'>
      <p>СПИСОК ВОПРОСОВ:</p>
      <span>
        <small> выберите вопрос и кликните</small>
      </span>
      {props.quest.map((q, i) => (
        <p key={i} className='p_quest'>
          <button className='quest_quest' onClick={props.onChangeInput}>
            {i + 1}.&nbsp;&nbsp;
            {q}
          </button>
        </p>
      ))}
    </div>
  )
}
export default Questions
