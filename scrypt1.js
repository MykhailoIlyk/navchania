const WEEK = [
  {
    day: "mon",
    sleep: 7.5,
    steps: 8200,
    water: 1.8,
    workoutMinutes: 30,
    sugarDrinks: 1,
  },
  {
    day: "tue",
    sleep: 8,
    steps: 10500,
    water: 2.2,
    workoutMinutes: 45,
    sugarDrinks: 0,
  },
  {
    day: "wed",
    sleep: 6,
    steps: 4300,
    water: 1.5,
    workoutMinutes: 0,
    sugarDrinks: 2,
  },
  {
    day: "thu",
    sleep: 8.5,
    steps: 9100,
    water: 2,
    workoutMinutes: 20,
    sugarDrinks: 0,
  },
  {
    day: "fri",
    sleep: 7,
    steps: 12000,
    water: 2.5,
    workoutMinutes: 60,
    sugarDrinks: 1,
  },
  {
    day: "sat",
    sleep: 9,
    steps: 6000,
    water: 1.2,
    workoutMinutes: 90,
    sugarDrinks: 3,
  },
  {
    day: "sun",
    sleep: 8,
    steps: 8000,
    water: 2,
    workoutMinutes: 30,
    sugarDrinks: 0,
  },
];

// A goal is met when the value is AT LEAST this number
const GOALS = { sleep: 8, steps: 8000, water: 2, workoutMinutes: 30 };

// Sugar is different: the goal is met when sugarDrinks is AT MOST this number
const MAX_SUGAR_DRINKS = 0;

const POINTS_PER_GOAL = 25; // 4 goals x 25 = 100
const SUGAR_PENALTY = 10; // minus 10 points per sugary drink

function isGoalMet(dat, habit) {
  const hab = WEEK.find((element) => element.day === dat)?.[habit];
  if (habit === "sugarDrinks") {
    return hab <= MAX_SUGAR_DRINKS;
  }
  return hab >= GOALS[habit];
}

function validateDay(dat) {
  const habits = Object.values(WEEK.find((element) => element.day === dat));
  const need_to_complete = Object.values(GOALS);
  need_to_complete.push(MAX_SUGAR_DRINKS);
  for (let i = 1; i <= need_to_complete.length; i++) {
    if (habits[i + 1] < need_to_complete[i]) {
      return false;
    }
  }
  return true;
}

function getDayScore(dat) {
  let score = 0;
  const habits = Object.values(WEEK.find((element) => element.day === dat));
  const need_to_complete = Object.values(GOALS);
  for (let i = 0; i <= need_to_complete.length; i++) {
    if (habits[i + 1] >= need_to_complete[i]) {
      score += POINTS_PER_GOAL;
    }
  }

  return score - (habits.at(-1) - MAX_SUGAR_DRINKS) * SUGAR_PENALTY;
}

function getWeeklyStats() {
  let avarageScore = Math.round(
    WEEK.reduce((acamulator, element) => {
      return acamulator + getDayScore(element.day);
    }, 0) / WEEK.length,
  );
  let bestDay = WEEK.map((element) => ({
    ...element,
    score: getDayScore(element.day),
  }));

  let totalSteps = WEEK.reduce((acamulator, element) => {
    return acamulator + element.steps;
  }, 0);

  let avarageSleep = Math.round(
    WEEK.reduce((acamulator, element) => {
      return acamulator + element.sleep;
    }, 0) / 7,
  );

  return {
    avarageScore: avarageScore,
    bestDay: bestDay.toSorted((a, b) => b.score - a.score)[0],
    WorstDay: bestDay.toSorted((a, b) => b.score - a.score).at(-1),
    totalSteps: totalSteps,
    avarageSleep: avarageSleep,
  };
}

console.log(getWeeklyStats());
