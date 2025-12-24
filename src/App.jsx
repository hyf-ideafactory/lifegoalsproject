import { useState, useEffect } from "react";

import Header from "./components/header";
import GoalList from "./components/goallist";
import GameBoard from "./components/gameboard";

import { REWARDS } from "./data/rewards";
import { pickWeightedReward } from "./utils/pickweightedreward";

function App() {
  // Reward state
  const [currentReward, setCurrentReward] = useState(null);
  const [lastReward, setLastReward] = useState(() => {
      return localStorage.getItem("lastReward");
  });

  useEffect(() => {
    if (lastReward) {
      localStorage.setItem("lastReward", lastReward);
      }
  }, [lastReward]);

  // Called when a goal is completed
  function handleGoalCompleted() {
    if (currentReward) return;
    const reward = pickWeightedReward(REWARDS, lastReward);
    console.log("Unlocked reward:", reward);
    setCurrentReward(reward);
    setLastReward(reward);
  }

  function handleNotifyReward() {
    localStorage.removeItem("currentReward");
    setCurrentReward(null);
  }

  return (
    <div style={{ padding: "24px" }}>
      <Header />

      <div style={{ display: "flex", gap: "24px" }}>
        <GoalList onGoalCompleted={handleGoalCompleted} />
        <GameBoard currentReward={currentReward}
         onNotifyReward={handleNotifyReward} />
      </div>
    </div>
  );
}

export default App;
