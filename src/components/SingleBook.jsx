import { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import CommentArea from './CommentArea'
class SingleBook extends Component {
  state = {
    selected: false,
  }

  render() {
    return (
      


  <Card
        onClick={() => this.setState({ selected: !this.state.selected })}
        style={{ border: this.state.selected ? '3px solid red' : 'none' }}
      >
         <Card.Img variant="top" src={this.props.book.img} />
                    <Card.Body>
                      <Card.Title >{this.props.book.title}</Card.Title>
                      <Card.Text>
                      {this.props.book.category}
                      </Card.Text>
                      <Button variant="primary"> {this.props.book.price}</Button>
                      <Card.Text className='mt-2'>
                      {this.state.selected &&
          <CommentArea bookId={this.props.book.asin}></CommentArea>
        }
                      </Card.Text>
                    </Card.Body>
      </Card>
    )
  }
}

export default SingleBook
