import React from 'react'
import './App.css'

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
            <div className='App-quwstion'>
              <p>СПИСОК ВОПРОСОВ:</p>
              <span>
                <small> выберите вопрос и кликните</small>
              </span>
              <p className='p_quest'>
                <button onClick={this.onChangeInput1}>
                  {this.state.quest[0]}
                </button>
              </p>
              <p className='p_quest'>
                <button onClick={this.onChangeInput2}>
                  {this.state.quest[1]}
                </button>
              </p>
              <p className='p_quest'>
                <button onClick={this.onChangeInput3}>
                  {this.state.quest[2]}
                </button>
              </p>
              <p className='p_quest'>
                <button onClick={this.onChangeInput4}>
                  {this.state.quest[3]}
                </button>
              </p>
              <p className='p_quest'>
                <button onClick={this.onChangeInput5}>
                  {this.state.quest[4]}
                </button>
              </p>
              <p className='p_quest'>
                <button onClick={this.onChangeInput6}>
                  {this.state.quest[5]}
                </button>
              </p>
              <p className='p_quest'>
                <button onClick={this.onChangeInput7}>
                  {this.state.quest[6]}
                </button>
              </p>
              <p className='p_quest'>
                <button onClick={this.onChangeInput8}>
                  {this.state.quest[7]}
                </button>
              </p>
              <p className='p_quest'>
                <button onClick={this.onChangeInput9}>
                  {this.state.quest[8]}
                </button>
              </p>
              <p className='p_quest'>
                <button onClick={this.onChangeInput10}>
                  {this.state.quest[9]}
                </button>
              </p>
              <p className='p_quest'>
                <button onClick={this.onChangeInput11}>
                  {this.state.quest[10]}
                </button>
              </p>
            </div>
            <div className='App-answers'>
              <p>Ответы:</p>
              <p>
                1.&nbsp;
                {this.state.hasInput1 ? <textarea></textarea> : undefined}
              </p>
              <p>
                2.&nbsp;
                {this.state.hasInput2 ? <textarea></textarea> : undefined}
              </p>
              <p>
                3.&nbsp;
                {this.state.hasInput3 ? <textarea></textarea> : undefined}
              </p>
              <p>
                4.&nbsp;
                {this.state.hasInput4 ? <textarea></textarea> : undefined}
              </p>
              <p>
                5.&nbsp;
                {this.state.hasInput5 ? <textarea></textarea> : undefined}
              </p>
              <p>
                6.&nbsp;
                {this.state.hasInput6 ? <textarea></textarea> : undefined}
              </p>
              <p>
                7.&nbsp;
                {this.state.hasInput7 ? <textarea></textarea> : undefined}
              </p>
              <p>
                8.&nbsp;
                {this.state.hasInput8 ? <textarea></textarea> : undefined}
              </p>
              <p>
                9.&nbsp;
                {this.state.hasInput9 ? <textarea></textarea> : undefined}
              </p>
              <p>
                10.&nbsp;
                {this.state.hasInput10 ? <textarea></textarea> : undefined}
              </p>
              <p>
                11.&nbsp;
                {this.state.hasInput11 ? <textarea></textarea> : undefined}
              </p>
              <p>
                {this.state.hasEnd ? (
                  <p>
                    <div>Спасибо за участие в анкетировании.</div>
                  </p>
                ) : undefined}
                <button onClick={this.testEnd}>Завершить анкетирование</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
