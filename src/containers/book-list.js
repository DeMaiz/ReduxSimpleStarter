import React, { Component } from 'react';
import { connect } from "react-redux";

class BookList extends Component{
  renderList(){
    return this.props.books.map((book)=>{
        return(
          <li key={book.title} className="list-group-item">{book.title}</li>
        );
    });
  }
  render(){
    return (
        <ul className="list-group col-sm4">
        {this.renderList()}
        </ul>
    );
  }

}

const mapStateToProp = (state)=>{
  return {
    books: state.books
  };
}

export default connect(mapStateToProp)(BookList); // this will return the container instead of dump component using only React
