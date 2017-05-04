
import React from 'react';

import CommentList from './CommentList';
import CommentForm from './CommentForm';



class CommentBox extends React.Component {
  render(){
    return (
      <div className="container">
        <div className="col-md-6">
          <h1>评论</h1>
          <hr />
          <CommentList data={this.props.data}/>
          <CommentForm />
        </div>
      </div>
    );
  }
}

export { CommentBox as default } 