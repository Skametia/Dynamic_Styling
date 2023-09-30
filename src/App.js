import { useState } from "react";
import CourseGoalList from "./CourseGoalList";
import CourseInput from "./CourseInput";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Do all Exercises", id: "g1" },
    { text: "Finish the Course", id: "g2" },
  ]);

  const addGoalHandler = (enteredText) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText,id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = (goalId) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };  

  let content = <p> No goals found, maybe add one?</p>;
  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <CourseInput onAddGoal={addGoalHandler} />
      {content}
    </div>
  );
};

export default App;
