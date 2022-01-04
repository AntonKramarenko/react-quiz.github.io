import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout'
import { Route, Routes } from 'react-router-dom';
import Quiz from './Containers/Quiz/Quiz';
import Auth from './Containers/Auth/Auth';
import QuizCreator from './Containers/QuizCreator/QuizCreator';
import QuizList from './Containers/QuizList/QuizList';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Layout>
          <Routes>
            <Route path='/auth' element={<Auth />} />
            <Route path='/quiz-creator' element={<QuizCreator />} />
            <Route path='/quiz/:id' element={<Quiz />} />
            <Route path='/' element={<QuizList />} />
          </Routes>
        </Layout>

      </div>
    );
  }
}

export default App;
