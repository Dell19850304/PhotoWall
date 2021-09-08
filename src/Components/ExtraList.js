import React,{Component} from 'react'

const tasks = ['take out','bring in','stand still'];

class ExtraList extends Component{
  render(){
    return <ul>{tasks.map((task,index) => <p key={index}>{task} ?</p>  )}</ul>
  }
}

export default ExtraList;