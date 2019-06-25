import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/App.scss';
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import PostView from "./components/PostView";
import PostCreate from "./components/PostCreate";
import PostList from "./components/PostList";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={MainPage} />
          <Route path="/posts" exact component={PostList} />
          <Route path="/posts/new" exact component={PostCreate} />
          <Route path="/posts/:id" component={PostView} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
