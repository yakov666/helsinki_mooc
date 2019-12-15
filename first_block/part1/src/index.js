import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  
  return (
    <div>
      <p>
        {props.course}
        
      </p>
    </div>
  )
}



const Total= (props) => {
  return (
    <div>
      <p>
        Number of exercises {props.tot}
        
      </p>
    </div>
  )
}

const Part = (props) => {
  
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
}

const Content = (props) => {
  
  return (
    <div>
     <Part part={props.part1}exercises= {props.exercises1}/> 
     <Part part={props.part2}exercises= {props.exercises2}/>
     <Part part={props.part3}exercises= {props.exercises3}/>
     
    </div>
  )
}



const App = () => {
  const course = 'Half Stack application development'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  
  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'
 
  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} exercises1={exercises1}
       part2={part2} exercises2={exercises2}
       part3={part3} exercises3={exercises3}/>
      <Total tot={exercises1+exercises2+exercises3}/>
    </div>
  )
}
// map reduse 
ReactDOM.render(<App />, document.getElementById('root'))