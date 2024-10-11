// Create a function `generateSummary` that accepts an array of objects representing users with `name`, `age`, and `active` properties.
// The function should return a summary object containing the number of active users and the average age of active users.
// Return type: { activeCount: number, averageAge: number }

interface User {
  name: string;
  age: number;
  active: boolean;
}

function generateSummary(users:User[]): { activeCount: number; averageAge: number } {
  let activeCount = 0;
  let ageSum = 0;
  for (const user of users) {
    if (user.active) {
      activeCount++;
      ageSum += user.age;
    }
  }

  const averageAge = activeCount > 0 ? ageSum / activeCount : 0;

  return { activeCount, averageAge };
}

// Expected output:
generateSummary([
  { name: "Alice", age: 30, active: true },
  { name: "Bob", age: 25, active: false },
  { name: "Charlie", age: 35, active: true }
])
// { activeCount: 2, averageAge: 32.5 }