import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => (
  <div className="ui container comments">
    <ApprovalCard>
      <div>
        <h4>Warning!</h4>
        Are you sure you want to do this?
      </div>
    </ApprovalCard>

    <ApprovalCard>
      <CommentDetail
        author={faker.name.firstName()}
        timeAgo="Today at 4:45PM"
        avatar={faker.image.avatar()}
        content={faker.random.words()}
      />
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail
        author={faker.name.firstName()}
        timeAgo="Today at 4:45PM"
        avatar={faker.image.avatar()}
        content={faker.random.words()}
      />
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail
        author={faker.name.firstName()}
        timeAgo="Today at 4:45PM"
        avatar={faker.image.avatar()}
        content={faker.random.words()}
      />
    </ApprovalCard>
  </div>
);

ReactDOM.render(<App />, document.querySelector('#root'));
