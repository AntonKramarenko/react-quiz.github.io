import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import classes from './QuizList.module.css'
import axios from "../../axios/axios-quiz";
import Loader from "../../Components/UI/Loader/Loader";


export default class QuizList extends Component {


    state = {
        quizes: [],
        loading: true,
    }

    renderQuizes() {
        return this.state.quizes.map(quiz => {
            return (
                <li
                    key={quiz.id}
                >
                    <NavLink to={'/quiz/' + quiz.id}>
                        {quiz.name}
                    </NavLink>
                </li>
            )
        })
    }

    async componentDidMount() {

        try {
            const responce = await axios.get('/quizes.json')
            console.log(responce)
            const quizes = []
            Object.keys(responce.data).forEach((key, index) => {
                quizes.push(
                    {
                        id: key,
                        name: `Тест №${index + 1}`
                    }
                )
            })
            this.setState({
                quizes,
                loading: false,
            })
        } catch (e) {
            console.log(e)
        }


    }

    render() {
        return (
            <div className={classes.QuizList}>
                <div>
                    <h1>Список тестов</h1>
                    {this.state.loading
                        ? <Loader />
                        : <ul>
                            {this.renderQuizes()}
                        </ul>
                    }

                </div>
            </div>
        )
    }
}