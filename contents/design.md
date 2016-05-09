# Design Principles

Educational design principles helped influence the design of the autograder and the direction for creation of exercises. While these design principles helped influence features and the user interface of the autograder, they are also extremely important as a guideline for how instructors and content authors should think about  writing exercises and implementing them in the classroom.

## Dual Modalities
A central challenge faced when considering development of the autograder, was what to prioritize: Feedback or Grading? While both features are necessary for each other, there is an acute tension between a tool which is primarily motivated by providing open-ended feedback, and one that is designed to provide grades. [Note ref needed?] The goal of this section is to consider the best possible interface we could give to students to help them improve their programming skills and complete lab exercises.

A key aspect of this tension is how to handle the idea of correctness. In an introductory computer science course, we are often lenient with small differences in output from a program. (For example, a program that outputs `2` instead of `2.0` might still be considered 'correct'.) While it is often possible to account for these different when writing test cases, it can be significantly difficult. We need to make sure, that when these tools are used for *grading* that they don't cause students unnecessary stress or frustrations. **FIND REFERENCES TO MARK'S WORK ON AUTOGRADERS AND MINORITIES.**
<!--
	Doesn't a feedback tool still suffer from this problem??
-->

## Knowledge Integration

## Learner Centered Design

## Constructionism + Exploration
- Pleasantly Frustrating?

* A Note About Autograding
	* Why do we need an autograder?
	* Why shouldn't we have an autograder?
		* but we did it anyway.....
		
## "TA Centered Design"
Though this is certainly lower on the priority list than _learner_ centered design, we make a point to describe _TA_ centered design, and why this matters for the tools we build. TAs, and instructors, are critical users of the infrastructure in courses. They need to be able to easily update and create content, handle grades, and so on. The longer or more difficult these tasks are, the less time TAs have to spend helping students learn.

In TA Centered Design, a TA is much more like a typical user in User Centered Design (UCD) {{ "user-centered" | cite }} than a learner in LCD, but there are many ideas that should be specifically recognized for TAs:

* TAs are often lacking domain knowledge, in this case the domain is pedagogy and not computer science.
* While TAs are motivated to _teach_ they are often not experts in the tools they are required to use to accomplish their teaching duties.
* TAs, like almost all users, have a limited amount of time. 

While these three ideas may seem obvious, they are important to recognize if our work is to be used beyond the initial implementation, then we need to consider how TAs will use λ.

* Test cases need to be easy to write and upload.
	* The [Implementation](./implementation.md) chapter describes the problems with our initial approach using edX's tools.
	* The [Future Work](./future-work.md) chapter describes how we can improve the experience of writing autograder test files to lower the barrier.
* Tools need to help TAs practice good pedagogy.
	* The admin dashboards built into λ give TAs more insights than they currently have about how students are performing and how often they are completing the lab work. While the dashboards have a ways to go in functionality, this is an improvement and gives TAs a reason to keep using the system.
	* The test case API (described later **FIXME**) should be adapted to make it effortless to write consistent and detailed feedback. Again, the current interface for this can be improved.
* Tools need to reduce the time spent on repetitive tasks.
	* The ability to automatically upload grades for students is a huge time saver which allows TAs to focus on more important tasks, and allows students to stop worrying about the status of their grades.
