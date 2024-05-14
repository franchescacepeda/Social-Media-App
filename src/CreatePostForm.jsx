import React, { useState } from 'react';

function CreatePostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Submitting post:', { title, content });
    
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={handleTitleChange} />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea id="content" value={content} onChange={handleContentChange} />
      </div>
      <button type="submit">Create Post</button>
    </form>
  );
}

export default CreatePostForm
