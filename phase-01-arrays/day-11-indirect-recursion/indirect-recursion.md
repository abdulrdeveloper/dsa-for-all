# Topic: Indirect Recursion (The Ping-Pong Effect)

## What We Covered
In our previous notes, we learned about **Direct Recursion** (a function calling itself). Now, we are exploring **Indirect Recursion**.

Indirect Recursion happens when **Function A** calls **Function B**, and then **Function B** turns around and calls **Function A** back. It creates a continuous loop between two or more functions until a base case (stop condition) is met.

Think of it like a game of **Table Tennis (Ping-Pong)**. The control of the program bounces back and forth between two players (functions).

---

## Code Example: The "Apple & Banana" Budget
Imagine you have a budget of 25 Rs. You go to a shop and alternate between buying an Apple (10 Rs) and a Banana (5 Rs) until you run out of money.

```javascript
let startingMoney = 25;

// Function A
function buyApple(money) {
    if (money > 0) { // Base Case Check
        console.log("You have", money, "Rs. Bought an Apple (-10 Rs)");
        // Pass the remaining money to Function B
        buyBanana(money - 10); 
    }
}

// Function B
function buyBanana(money) {
    if (money > 0) { // Base Case Check
        console.log("You have", money, "Rs. Bought a Banana (-5 Rs)");
        // Pass the remaining money back to Function A
        buyApple(money - 5); 
    }
}

// Start the game!
buyApple(startingMoney); 
```

### Under the Hood (Dry Run)
Here is how the control jumps between the two functions:

1. `buyApple(25)` runs ➔ 25 > 0? Yes. (Prints: Bought an Apple). Remaining: 15.
2. Control jumps to `buyBanana(15)` ➔ 15 > 0? Yes. (Prints: Bought a Banana). Remaining: 10.
3. Control jumps back to `buyApple(10)` ➔ 10 > 0? Yes. (Prints: Bought an Apple). Remaining: 0.
4. Control jumps to `buyBanana(0)` ➔ 0 > 0? No! Condition is false.

The loop successfully stops here. The base case was hit!

---

## Real-World vs DSA Usage
In everyday UI web development (like React or Next.js), you will rarely write indirect recursion. However, in advanced Computer Science, it is incredibly important:

* **Compilers & Parsers:** When a browser's JavaScript engine reads your code, it uses indirect recursion to solve complex math expressions like `(5 + (3 * (2 - 1)))`.
* **State Machines in Games:** Managing the behavior of AI characters. (e.g., AI goes from `PatrolMode()` ➔ `AttackMode()` ➔ back to `PatrolMode()`).

---

## Small Summary
> Indirect Recursion occurs when two or more functions call each other in a cycle.
>
> It acts like a ping-pong match passing data back and forth.
>
> Both functions MUST share a logical Base Case so the cycle eventually stops!