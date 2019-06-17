import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => (
  <div className="ui container comments">
    <CommentDetail
      author={faker.name.firstName()}
      timeAgo="Today at 4:45PM"
      avatar={faker.image.avatar()}
      content={faker.random.words()}
    />
    <CommentDetail
      author={faker.name.firstName()}
      timeAgo="Today at 4:45PM"
      avatar={faker.image.avatar()}
      content={faker.random.words()}
    />
    <CommentDetail
      author={faker.name.firstName()}
      timeAgo="Today at 4:45PM"
      avatar={faker.image.avatar()}
      content={faker.random.words()}
    />
  </div>
);

ReactDOM.render(<App />, document.querySelector('#root'));
