import React from 'react';
import ArticleList from './js/components/ArticleList/ArticleList'
import Form from './js/components/Form/Form'
import PostList from './js/components/PostList/PostList'
import './App.scss';

function App() {
  return (
    <div className="App">
      <h2>Articles</h2>
      <ArticleList/>
      <Form/>
      <PostList/>
    </div>
  );
}

export default App;
