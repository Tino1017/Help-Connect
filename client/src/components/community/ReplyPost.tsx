import React, { useState } from 'react';

interface ReplyProps {
  userProfile: {
    username: string;
    picture: string;
  };
  onReplySubmit: (replyContent: string) => void;
}

export const PostReply: React.FC<ReplyProps> = ({ userProfile, onReplySubmit }) => {
  const [replyContent, setReplyContent] = useState('');

  const handleReplyContentChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setReplyContent(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    onReplySubmit(replyContent);
    setReplyContent(''); // Reset the reply content after submission
  };

  return (
    <div className="reply-container">
      <div className="user-info">
        <img src={userProfile.picture} alt="User Profile" />
        <p>{userProfile.username}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={replyContent}
          onChange={handleReplyContentChange}
          placeholder="Reply to this post"
          rows={3}
        />
        <button type="submit">Reply</button>
      </form>
    </div>
  );
};


