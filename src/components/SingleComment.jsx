import { Component } from 'react'
import { ListGroup } from 'react-bootstrap'

class SingleComment extends Component {
 
  render() {
    return (
      
             
                <ListGroup.Item>{this.props.comment}</ListGroup.Item>
            
                

                
      
    
    )
  }
}

export default SingleComment