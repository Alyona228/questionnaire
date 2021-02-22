import React from 'react'
import './App.css'
import Answers from '../src/components/answers/Answers.js'
import Questions from '../src/components/questions/Questions.js'
import Inquirer from '../src/components/Inquirer/Inquirer.js'

export default class App extends React.Component {
  state = {
    famalay: [
      'Центр ТУ №1',
      'Цех ТУ №1',
      'Цех ТУ №2',
      'Цех ТУ №3',
      'Цех ТУ №4',
      'Цех ТУ №5',
      'Цех ТУ №6',
      'Цех ТУ №7',
      'Цех ТУ №8',
      'Цех ТУ №9',
      'Цех ТУ №10',
    ],
    name: [
      'Донецк',
      'Амвросиевка',
      'Горловка',
      'Дебальцево',
      'Енакиево',
      'Кировское',
      'Макеевка',
      'Новоазовск',
      'Торез',
      'Снежное',
      'Тельманово',
      'Старобешево',
      'Харцызск',
      'Шахтёрск',
      'Ясиноватая',
    ],
    soname: [
      'Королёв Леонид Александрович',
      'Бабченко Евгений Иванович',
      'Олифиренко Сергей Андреевич',
      'Ерес Дмитрий Александрович',
      'Вербицкий Александр Григорьевич',
      'Бауман Лариса Леонидовна',
      'Швец Виктория Борисовна',
      'Жилка Олег Макарович',
      'Ермак Владимир Петрович',
      'Католевский Валерий Васильевич',
      'Минакова Наталья Павловна',
      'Настека Владимир Петрович',
      'Рябова Елена Михайловна',
      'Сагайдак Нина Ивановна',
      'Петрова Наталья Владимировна',
    ],
    text: '',
    toun: '',
    surname: '',
    hasSelect: true,
    hasInput1: false,
    hasInput2: false,
    hasInput3: false,
    hasInput4: false,
    hasInput5: false,
    hasInput6: false,
    hasInput7: false,
    hasInput8: false,
    hasInput9: false,
    hasInput10: false,
    hasInput11: false,
    hasEnd: false,
    quest: [
      '1.Организация процесса распределения обязанностей между персоналом после внесения изменений в штатное расписание.',
      '2.Старший специалист. Кто? Что входит в его обязанности. Какие функции фактически выполняет? Оказывает ли фактическую помощь в обучении специалистов?',
      '3.Кто анализирует уровни сигналов и какую работу проводит по стабилизации показателя уровня на упреждение повреждений и жалоб?',
      '4.Какие перспективы видите в своем подразделении нацеленные на развитие xPON?',
      '5.Что предпринимаете для удержания существующей базы?',
      '6.Техническая возможность. Сколько отказов? Причины? Что предпринимается для снижения количества отказов. Работа с отказами тв.',
      '7.Перераспределение нагрузки в линейной задействованной ёмкости.',
      '8.В случае задействования менее 50 % предложения по демонтажу кабельных линий связи, предложения по реконструкции сети.',
      '9.Знаете ли количество повторных в структурном подразделении? Количество среднее устранённых в сутки?',
      '10.Какой процент устранения в сутки ШПД? На сегодня. На конец месяца?',
      '11.Задействованная станционная ёмкость? Методы повышения процента задействования?',
    ],
  }

  onChangeEnter = (e) => {
    this.setState({
      hasSelect: false,
    })
  }
  onChangeInput1 = (e) => {
    this.setState({
      hasInput1: true,
    })
  }
  onChangeInput2 = (e) => {
    this.setState({
      hasInput2: true,
    })
  }
  onChangeInput3 = (e) => {
    this.setState({
      hasInput3: true,
    })
  }
  onChangeInput4 = (e) => {
    this.setState({
      hasInput4: true,
    })
  }
  onChangeInput5 = (e) => {
    this.setState({
      hasInput5: true,
    })
  }
  onChangeInput6 = (e) => {
    this.setState({
      hasInput6: true,
    })
  }
  onChangeInput7 = (e) => {
    this.setState({
      hasInput7: true,
    })
  }
  onChangeInput8 = (e) => {
    this.setState({
      hasInput8: true,
    })
  }
  onChangeInput9 = (e) => {
    this.setState({
      hasInput9: true,
    })
  }
  onChangeInput10 = (e) => {
    this.setState({
      hasInput10: true,
    })
  }
  onChangeInput11 = (e) => {
    this.setState({
      hasInput11: true,
    })
  }

  onChangeSelect = (e) => {
    let a = this.state.famalay
    let famalay = [...this.state.famalay]

    this.setState({
      text: e.target.value,
      famalay: famalay,
    })
  }
  onChangeSelectToun = (e) => {
    let a = this.state.name
    let name = [...this.state.name]

    this.setState({
      taun: e.target.value,
      name: name,
    })
  }
  onChangeSelectSoname = (e) => {
    let a = this.state.soname
    let soname = [...this.state.soname]

    this.setState({
      surname: e.target.value,
      soname: soname,
    })
  }
  testEnd = () => {
    this.setState({
      hasEnd: true,
    })
  }
  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          Тест по вопросам технической эксплуатации
          <div className='App-link'>
            <p>
              Структурное подразделение:
              {this.state.text}
              {this.state.hasSelect ? (
                <select onClick={this.onChangeSelect}>
                  <option>&nbsp;{''}</option>
                  {this.state.famalay.map((etem, key) => (
                    <option>&nbsp;{etem}</option>
                  ))}
                  }
                </select>
              ) : undefined}
            </p>
            <p>
              Населённый пункт:
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
              {this.state.taun}
              {this.state.hasSelect ? (
                <select onClick={this.onChangeSelectToun}>
                  <option>&nbsp;{''}</option>
                  {this.state.name.map((etem, key) => (
                    <option>&nbsp;{etem}</option>
                  ))}
                  }
                </select>
              ) : undefined}
            </p>

            <p>
              Фамилия анкетируемого: &nbsp;&nbsp;&nbsp;&nbsp;{' '}
              {this.state.surname}
              {this.state.hasSelect ? (
                <select onClick={this.onChangeSelectSoname}>
                  <option>&nbsp;{''}</option>
                  {this.state.soname.map((etem) => (
                    <option>{etem}</option>
                  ))}
                  }
                </select>
              ) : undefined}
            </p>

            <button className='button' onClick={this.onChangeEnter}>
              Зарегистрироваться
            </button>
          </div>
          <div className='App-quest'>
            <Questions
              quest={this.state.quest}
              onChangeInput1={this.onChangeInput1}
              onChangeInput2={this.onChangeInput2}
              onChangeInput3={this.onChangeInput3}
              onChangeInput4={this.onChangeInput4}
              onChangeInput5={this.onChangeInput5}
              onChangeInput6={this.onChangeInput6}
              onChangeInput7={this.onChangeInput7}
              onChangeInput8={this.onChangeInput8}
              onChangeInput9={this.onChangeInput9}
              onChangeInput10={this.onChangeInput10}
              onChangeInput11={this.onChangeInput11}
            />
            <Answers
              hasInput1={this.state.hasInput1}
              hasInput2={this.state.hasInput2}
              hasInput3={this.state.hasInput3}
              hasInput4={this.state.hasInput4}
              hasInput5={this.state.hasInput5}
              hasInput6={this.state.hasInput6}
              hasInput7={this.state.hasInput7}
              hasInput8={this.state.hasInput8}
              hasInput9={this.state.hasInput9}
              hasInput10={this.state.hasInput10}
              hasInput11={this.state.hasInput11}
              hasEnd={this.hasEnd}
              testEnd={this.testEnd}
            />
          </div>
        </div>
      </div>
    )
  }
}
