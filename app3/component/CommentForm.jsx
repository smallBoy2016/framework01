
import React from 'react';

class CommentForm extends React.Component {
  render(){
    return (
      <form>
        <div className="form-group">
        	<input type="text" className="form-control" placeholder="姓名" />
        </div>
        <div className="form-group">
        	<textarea className="form-control" rows="3" placeholder="评论"></textarea>
        </div>
        <button type="submit" className="btn btn-default btn-sm dropdown-toggle">添加评论</button>
      </form>
    );
  }
}

export { CommentForm as default } 