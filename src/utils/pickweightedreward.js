export function pickWeightedReward(rewards, lastReward) {
  const filtered = rewards.filter(
    r => r.label !== lastReward
  );

  const totalWeight = filtered.reduce(
    (sum, r) => sum + r.weight,
    0
  );

  let rand = Math.random() * totalWeight;

  for (const reward of filtered) {
    if (rand < reward.weight) {
      return reward.label;
    }
    rand -= reward.weight;
  }
}
