import React from 'react'
import {useHistory} from 'react-router-dom'

const AboutPage: React.FC = () => {
  
  const history = useHistory();

  return (
    <div className="about-container">
      <h1>Привет! Меня зовут Илья, я фронтенд-разработчик. Этот проект - мой первый опыт разработки на TypeScript: 
      я использовал интерфейсы, кастомные типы и дженерик-типы для создания React-компонентов.</h1>
      <button className="btn center" onClick={() => history.push('/')}>Назад к задачам</button>
    </div>
    
  )
}

export default AboutPage
