import React from 'react'
import './App.css'
import Answers from '../src/components/answers/Answers.js'
import Questions from '../src/components/questions/Questions.js'
import Inquirer from '../src/components/Inquirer/Inquirer.js'
import axios from 'axios'
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
    hasInput: false,
    hasEnd: false,
    quest: [
      'Организация процесса распределения обязанностей между персоналом после внесения изменений в штатное расписание.',
      'Старший специалист. Кто? Что входит в его обязанности. Какие функции фактически выполняет? Оказывает ли фактическую помощь в обучении специалистов?',
      'Кто анализирует уровни сигналов и какую работу проводит по стабилизации показателя уровня на упреждение повреждений и жалоб?',
      'Какие перспективы видите в своем подразделении нацеленные на развитие xPON?',
      'Что предпринимаете для удержания существующей базы?',
      'Техническая возможность. Сколько отказов? Причины? Что предпринимается для снижения количества отказов. Работа с отказами тв.',
      'Перераспределение нагрузки в линейной задействованной ёмкости.',
      'В случае задействования менее 50 % предложения по демонтажу кабельных линий связи, предложения по реконструкции сети.',
      'Знаете ли количество повторных в структурном подразделении? Количество среднее устранённых в сутки?',
      'Какой процент устранения в сутки ШПД? На сегодня. На конец месяца?',
      'Задействованная станционная ёмкость? Методы повышения процента задействования?',
    ],
    answer: [],
  }

  onChangeEnter = (e) => {
    this.setState({
      hasSelect: false,
    })
  }
  onChangeInput = (e, item) => {
    let quest = [...this.state.quest]
    quest = quest.slice(quest.pop(item))
    this.setState({
      hasInput: true,
      answer: [...this.state.quest],
    })

    console.log(5 + 'колбаса')
  }

  onChangeSelect = (e) => {
    let a = this.state.famalay
    let famalay = [...this.state.famalay]
    // try {
    //   const response = axios.post(
    //     'https://test-4d778-default-rtdb.firebaseio.com/.json'
    //   )
    //   console.log(response.data)
    // } catch (e) {
    //   console.log(e)
    // }
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
    console.log(1)
    this.setState({
      hasEnd: true,
    })
  }
  // componentDidMount() {
  //   axios
  //     .get('https://test-4d778-default-rtdb.firebaseio.com/quize.json')
  //     .then((response) => {})
  // }

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
                  {this.state.famalay.map((etem, ind) => (
                    <option key={ind}>&nbsp;{etem}</option>
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
                  {this.state.name.map((etem, index) => (
                    <option key={index}> &nbsp;{etem}</option>
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
                  {this.state.soname.map((etem, index) => (
                    <option key={index}>{etem}</option>
                  ))}
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
              onChangeInput={this.onChangeInput}
            />
            <Answers
              hasInput={this.state.hasInput}
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
              quest={this.state.quest}
              answer={this.state.answer}
            />
          </div>
        </div>
      </div>
    )
  }
}
