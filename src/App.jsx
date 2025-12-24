import Header from "./components/Header";
import GoalList from "./components/GoalList";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <div style={{ padding: "24px" }}>
      <Header />

      <div style={{ display: "flex" }}>
        <GoalList />
        <GameBoard />
      </div>
    </div>
  );
}

export default App;
