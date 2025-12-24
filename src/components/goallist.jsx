export default function GoalList({ onGoalCompleted }) {
  return (
    <div style={{ border: "2px solid red", padding: "16px" }}>
      <p>GoalList is rendering</p>

      <button onClick={onGoalCompleted}>
        Mark Goal Complete
      </button>
    </div>
  );
}
