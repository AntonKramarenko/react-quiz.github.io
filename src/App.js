import React from 'react';
import Layout from './hoc/Layout/Layout'
import { Route, Routes } from 'react-router-dom';
import Auth from './Containers/Auth/Auth';
import Quiz from './Containers/Quiz/Quiz';
import QuizCreator from './Containers/QuizCreator/QuizCreator';
import QuizList from './Containers/QuizList/QuizList';
import withRouter from './hoc/withRouter/withRouter';
import {
  useLocation,
  useNavigate,
  useParams
} from "react-router-dom";





function App() {
  let location = useLocation();
  let navigate = useNavigate();
  let params = useParams();

  return (
    <div className="App" >
      <Layout>
        <Routes>
          <Route path='/auth' element={<Auth />} />
          <Route path='/quiz-creator' element={<QuizCreator />} />
          <Route path='/quiz/:id' element={<Quiz params={params} navigate={navigate} location={location} />} />
          <Route path='/' element={<QuizList />} />
        </Routes>
      </Layout>

    </div>
  );

}

export default App;
