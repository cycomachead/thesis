# Design Principles

Educational design principles helped influence the design of the autograder and the direction for creation of exercises. While these design principles helped influence features and the user interface of the autograder, they are also extremely important as a guideline for how instructors and content authors should think about writing exercises and implementing them in the classroom.

## Dual Modalities
A central challenge faced when considering development of the autograder, was what to prioritize: Feedback or Grading? While both features are necessary for each other, there is an acute tension between a tool which is primarily motivated by providing open-ended feedback, and one that is designed to provide grades. The goal of this section is to consider the best possible interface we could give to students to help them improve their programming skills and complete lab exercises.

A key aspect of this tension is how to handle the idea of correctness. In an introductory computer science course, we are often lenient with small differences in output from a program. (For example, Snap<em>!</em> allows students to use both traditional arrays and linked lists, but their visual output is the same. If test authors aren't careful, it's easy to mistake one type of data as incorrect when it should be accepted.) While it is often possible to account for these different when writing test cases, it can be significantly difficult. We need to make sure, that when these tools are used for *grading* that they don't cause students unnecessary stress or frustrations.

<!--
	Doesn't a feedback tool still suffer from this problem??
-->
## Learner-Centered Design
Learner-centered design (LCD) is a design principle adapted from user-centered-design (UCD) {{ "learner-centered" | cite }} {{ "learner-centered-2" | cite }}. Both LCD and UCD design principles start by estabilishing attributes about the user's goals. For LCD there are 4 main attributes:

> • Learners do not possess the same domain expertise as users.

> • Learners are heterogeneous.

> • Learners may not intrinsically motivated in the same manner as experts. 

> • Learners’ understanding grows as they engage in a new work domain.

While languages like Snap<em>!</em> are designed to be easier to learn, they do not necessarily employ LCD principles because they are still intended as a general-purpose programming environment. We can make sure our autograder takes into each of these principles:

_Domain expertise_: Programming languages have to show error messages that could make sense in any situation. Unfortunately, this means they usually fall to the lowest common denominator type cases, and don't provide any contextual information to the use. In Snap<em>!</em> it's not uncommon to see a message that similar to `Type Error: expecting a list but got number`. We can improve upon these messages by showing students hints which are specific to the problem at hand.
*Heterogeneity*: This is one of the harder aspects for the autograder to handle. Not everyone approaches problems in the same way. Our general approach is to try to be as lenient as possible (while still ensuring correctness) when writing test cases. We've spent lots of time considering how authors should handle different formats of output so that we try to avoid nit-picky errors. 
*Motivation*: We try to motivate users by carefully choosing how we present the tool and the results. In class, and in the text which appears on screen we try to downplay the idea of grades or errors and instead focus on helping students improve.
*Changing Understanding*: dynamically capturing a user's understanding is incredibly difficult to do. At this point, we aren't able to dynamically adjust exercises or feedback presented, but we have planned out possible methods for doing so. Currently, the best way for us to achieve this is to have TAs and instructors who are conscious of students needs recommend different problems for students to practice with. 

## Knowledge Integration
Knowledge integration (KI) is a framework for approaching how students should synthesize information. The KI framework has four components to organize ideas:

* **Adding Knowledge** involves brining in new ideas that students haven't seen before.
* **Eliciting Ideas** is the process of critically examining ideas students already know. 
* **Distinguishing Knowledge** asks students to take multiple ideas and figure out how they fit together; whether they are compatible or not.
* **Reflecting** is the process to drawing conclusions from what students have learned.

We used KI as a basis for writing the feedback messages that students are shown through the autograder. The goal is to focus primarily on the eliciting ideas, and distinguishing ideas components. We wanted to focus on these two pieces because there are many common computer science problems which can be viewed through this lens. Systematically debugging code follows a process of eliciting ideas when trying to figure out why something is broken. Distinguishing ideas (such as the differences between two kinds of loops, or recursion and iteration) are a natural process for programming.

We chose not to use the *adding ideas* component because we don't currently have the autograder setup to give good feedback when students are doing exploratory work (where they would be most likely to uncover new concepts). However, these types of messages will likely appear in future versions. Similarly, while *reflecting* is a valuable step, we don't have the capability to collect nor give feedback to open-ended reflection questions.

However, writing proper KI messages proved challenging in the current setup. The initial version of the autograder was designed more around presenting the results of test cases, than it was longer forms of feedback. (This is one area for improvement.) Furthermore, trying to follow KI occasionally led to messages that didn't necessarily fit within the rest of the BJC curriculum as it wasn't designed around the KI framework.


## "TA-Centered Design"
Though this is certainly lower on the priority list than _learner_-centered design, we make a point to describe _TA_-centered design, and why this matters for the tools we build. Teaching assistants (TAs), and instructors, are critical users of the infrastructure in courses. They need to be able to easily update and create content, handle grades, and so on. The longer or more difficult these tasks are, the less time TAs have to spend helping students learn.

When considering TA-Centered Design, a TA is much more like a typical user in UCD than a learner in LCD, but there are many ideas that should be specifically recognized for TAs:

* TAs are often lacking pedagogical content knowledge (PCK). PCK making the distinction between knowing how to program, and how to teach programming. TAs could use guidance in applying good pedagogy. 
* While TAs are motivated to _teach_ they are not always motivated to complete the extra work required of them, such as grading or writing assignments.
* Often TAs are not experts in the tools they are required to use to accomplish their teaching duties, such as LMSs are grading systems such as λ.
* TAs, like most users, have a limited amount of time to complete their work.

While these three ideas may seem obvious, they are important to recognize if our work is to be used beyond the initial implementation, then we need to consider how TAs will use λ.

* Test cases need to be easy to write and upload.
* Tools need to help TAs practice good pedagogy.
	* The test case authoring interface should be adapted to make it effortless to write consistent and detailed feedback.
* Tools need to reduce the time spent on repetitive tasks.
	* The ability to automatically upload grades for students is a huge time saver which allows TAs to focus on more important tasks, and allows students to stop worrying about the status of their grades.
