import React,{Component} from 'react'


class Title extends Component {
    render() {
      return(
      <h1> {this.props.todos.map((todo,index) => <p key={index}> {todo} </p>) } </h1>
      )
    }
  }

  export default Title