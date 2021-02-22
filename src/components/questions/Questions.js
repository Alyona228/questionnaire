import React from 'react'
import './Questions.css'

function Questions(props) {
  return (
    <div className='App-quwstion'>
      <p>СПИСОК ВОПРОСОВ:</p>
      <span>
        <small> выберите вопрос и кликните</small>
      </span>
      <p className='p_quest'>
        <button onClick={props.onChangeInput1}>{props.quest[0]}</button>
      </p>
      <p className='p_quest'>
        <button onClick={props.onChangeInput2}>{props.quest[1]}</button>
      </p>
      <p className='p_quest'>
        <button onClick={props.onChangeInput3}>{props.quest[2]}</button>
      </p>
      <p className='p_quest'>
        <button onClick={props.onChangeInput4}>{props.quest[3]}</button>
      </p>
      <p className='p_quest'>
        <button onClick={props.onChangeInput5}>{props.quest[4]}</button>
      </p>
      <p className='p_quest'>
        <button onClick={props.onChangeInput6}>{props.quest[5]}</button>
      </p>
      <p className='p_quest'>
        <button onClick={props.onChangeInput7}>{props.quest[6]}</button>
      </p>
      <p className='p_quest'>
        <button onClick={props.onChangeInput8}>{props.quest[7]}</button>
      </p>
      <p className='p_quest'>
        <button onClick={props.onChangeInput9}>{props.quest[8]}</button>
      </p>
      <p className='p_quest'>
        <button onClick={props.onChangeInput10}>{props.quest[9]}</button>
      </p>
      <p className='p_quest'>
        <button onClick={props.onChangeInput11}>{props.quest[10]}</button>
      </p>
    </div>
  )
}
export default Questions
