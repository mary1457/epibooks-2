import { Component } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
class CommentArea extends Component {
  state = {
   comments:[]
  }
  componentDidMount = () => {
    console.log('SONO IN COMPONENTDIDMOUNT')
    
    this.fetchReservations()
  }

  fetchReservations = () => {
    const URL = 'https://striveschool-api.herokuapp.com/api/comments/'+ this.props.bookId
    fetch(URL, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNTUzNGYyNjBjYzAwMTVjYzBkZDIiLCJpYXQiOjE3MjQzMjY2OTUsImV4cCI6MTcyNTUzNjI5NX0.rMDxqCJ_CyHQz520r-HqvWdsgDpX16i5r6th2UeIfZ0",
            'Content-Type': 'application/json',
        },
    })
        .then((response) => {
            console.log(response)
            if (response.ok) {
                
                return response.json()
            } else {
              
                throw new Error('Errore nella chiamata, response non OK')
            }
        })
        .then((arrayOfComments) => {
            console.log('EVENTI A DB', arrayOfComments)
    
            this.setState({
                comments: arrayOfComments,})
        })
        .catch((error) => {
          
            console.log('ERRORE!', error)
        })
  }
  render() {
    return (
    <>
        <CommentList comments={this.state.comments}></CommentList>
        <AddComment bookId={this.props.bookId}></AddComment>
        </>
    )
  }
}

export default CommentArea

