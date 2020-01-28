import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {

  return (
    <div>
      <p>
        {props.course.name}
        
      </p>
    </div>
  )
}

const Total = (props) => {
  
  
  const sumExercises = props.course.parts.reduce(
   (sl,cur) => sl+cur.exercises,0
  )
  return (
    <div> 
      {sumExercises}
    </div>
  )
}





const Content = (props) => {
  const renderParts = props.course.parts.map(
    p => <p>{p.name} {p.exercises}</p>
  )
  return (
    <div> 
      {renderParts}
    </div>
  )
}



const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

 
  return (
    <div>
      <Header course={course}/>

      <Content  course={course}/>
      <Total course={course}/>
      
    </div>
  )
}
/*      <Content  course={course}/>
      <Total course={course}/>
*/
ReactDOM.render(<App />, document.getElementById('root'))