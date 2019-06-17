import React from 'react';
import PropTypes from 'prop-types';

const CommentDetail = props => {
  const { author, timeAgo, avatar, content } = props;

  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={avatar} alt="avatar" />
      </a>

      <div className="content">
        <a href="/" className="author">
          {author}
        </a>

        <div className="metadata">
          <span className="date">{timeAgo}</span>
        </div>
        <div className="text">{content}</div>
      </div>
    </div>
  );
};

CommentDetail.propTypes = {
  author: PropTypes.string,
  timeAgo: PropTypes.string,
  avatar: PropTypes.string,
  content: PropTypes.string,
};

export default CommentDetail;
