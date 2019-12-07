import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail.js';
import faker from 'faker';
import ApprovalCard from './ApprovalCard.js';

const App = () => {
    return (
        <div className="ui container comments">
          <ApprovalCard>
            <CommentDetail 
                author="Sam" 
                timeAgo="Today at 3:45PM" 
                content="Hella Cool" 
                avatar={faker.image.avatar()}
            />
          </ApprovalCard>
          <ApprovalCard>
            <CommentDetail
              author="Alex" 
              timeAgo="Today at 2:00AM" 
              content="Noice" 
              avatar={faker.image.avatar()}
            />
          </ApprovalCard>
          <ApprovalCard>
            <CommentDetail
              author="Jane" 
              timeAgo="Today at 7:30PM"
              content="Rad!"
              avatar={faker.image.avatar()}
            />
          </ApprovalCard>
         
    </div>
    )
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)