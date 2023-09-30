import React from "react";
import CourseGoalItem from "./CourseGoalItem";
import "./CourseInput.css"
const CourseGoalList = (props) => {
  return (
    <div>
      <ul className="goal-list">
        {props.items.map((goal) => (
          <CourseGoalItem
            key={goal.id}
            id={goal.id}
            onDelete={props.onDeleteItem}
          >
            {goal.text}
          </CourseGoalItem>
        ))}
      </ul>
    </div>
  );
};

export default CourseGoalList;
