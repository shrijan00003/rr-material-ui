import React, { Component, Fragment } from "react";
import { Header, Footer } from "./layout";
import ExerciseMain from "./exercise";
import { muscles, exercises } from "../store";

export default class extends Component {
  state = {
    exercises
  };
  getExerciseByMuscles = () => {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];

        return exercises;
      }, {})
    );
  };
  render() {
    const exercises = this.getExerciseByMuscles();
    return (
      <Fragment>
        <Header />
        <ExerciseMain  exercises = {exercises}/>
        <Footer muscles={muscles} />
      </Fragment>
    );
  }
}
