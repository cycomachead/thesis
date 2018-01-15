
{% include "./intro-short.md" %}

## Snap<em>!</em>
Snap<em>!</em> is a blocks-based, drag-and-drop programming language inspired by MIT's Scratch {{ "scratch" | cite }}, but adapted for university-level courses by including features such as first-class lists and custom functions (blocks). Snap<em>!</em> is implemented as a web application in JavaScript, which makes it compatible with mobile devices. Figure 1 shows a basic drawing script being executed.

<!-- 1.-->
![An example Snap<em>!</em> program.](/images/snap-basic.png)

## The Beauty and Joy of Computing
The Beauty and Joy of Computing (BJC) is an introduction to computing designed to broaden participation among underrepresented groups. The primary language used is Snap<em>!</em>, and many of the exercises in the course have visual outputs. The course covers functions and abstraction, recursion, higher order functions (lambdas) and many other topics. Many of the examples and exercises in BJC have multiple correct paths to implementation, which can be a challenge for autograders to handle.

<!-- 2. -->
![A typical example of BJC curriculum which includes graphical output.](/images/bjc-tree.png)

## CS10
CS10 {{ "cs10" | cite }} is UC Berkeley's offering of BJC. Currently, CS10 is offered every semester to 200-300 students. Like many other introductory courses, CS10 relies heavily on laboratory sections as the primary method for students to learn to program. λ will be used in CS10 during lab sections to give students better feedback as they are working and to give credit for the assigned lab work. This year, we were able to trial the system for three of the 14 labs that students completed in Snap<em>!</em>.

## Correctness and Effort
While designing the autograder, we considered two primary types of grading: *correctness* and *effort*. Correctness is simple: Does is given block (or script) do what the instructions say? Effort is more open-ended, but the goal is to be able reward students for trying to complete a problem, as well as to encourage experimentation with Snap<em>!</em>'s many features. In both these cases, we would like the autograder to be robust to different correct solutions, or the many different ways students can demonstrate effort.

