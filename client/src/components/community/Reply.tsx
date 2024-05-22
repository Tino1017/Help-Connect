import React, { useState } from 'react';

interface ReplyProps {
  onSubmit: (content: string) => void;
}

export const Reply: React.FC<ReplyProps> = ({ onSubmit }) => {
  const [replyContent, setReplyContent] = useState('');

  const handleReplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(replyContent);
    setReplyContent('');
  };

  return (
    <form onSubmit={handleReplySubmit}>
      <textarea
        value={replyContent}
        onChange={(e) => setReplyContent(e.target.value)}
        placeholder="Reply to this post..."
        rows={2}
      />
      <button type="submit">Reply</button>
    </form>
  );
};


