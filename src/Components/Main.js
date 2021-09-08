import React,{Component} from 'react'
import ExtraList from './ExtraList'
import List from './List'
import Title from './Title'

class Main extends Component {
    render(){
      return(
        <div>
          <Title todos={['Our todos']} />
          <List tasks={['bind the rope','run the mountain','climb the moon']}/>
          <List tasks={['drive the cars','drive the airplane?']}/>
          <ExtraList />
          
        </div>
  
      )
    }
  }

  export default Main