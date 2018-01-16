# {{ page.level }} Experimental Setup

In the Spring 2016 semester, CS10 {{ "cs10" | cite }} used the autograder as part of the routine for lab checkoffs. In total, the autograder was used for three different labs, but students were only required to try the autograder for one lab.

## {{ page.level }}.1 Oral Lab Checkoffs
CS10 uses oral lab checkoffs as a means of granting credit for a lab. The way this typically works is that students are given one week from the assigned lab date to check in with a TA or lab assistant. Students are checked off when they successfully answer two or three questions about the lab, and usually are asked to present an example of working code.

It's worth mentioning that these checkoffs are designed more around completeness and effort placed in the lab, rather than absolute correctness. (Though, whether or not to grant credit is up to the individual TAs.) Oral lab checkoffs provide a good reason for TAs and students to interact more often. Over the past few semesters, the model of lab checkoffs has been refined based on student and TA feedback, and is _designed_ to require only minimal additional effort for the course staff to manage, and for students complete. We're comparing the autograder against a fairly strict standard in this scenario, which we hope illustrates the potential.

### {{ page.level }}.1.1 Challenges of Oral Lab Checkoffs
Many of the challenges faced with oral lab checkoffs motivate the development of an autograder. Lab checkoffs can take anywhere from 2-10 minutes per student, or per pair of students. During a busy lab section, particularly close to deadlines, this time can create a large backlog in order to get students checked off. While the time discussing with individual students is valuable, the creation of a queue can waste student's time if they don't need additional help. Furthermore, if most of the lab work can be done at home, then oral checkoffs can be inflexible for students who have a harder time making it to lab, such as those with disabilities or families. 

Finally, traditional "clipboard style" methods for dealing with inputting scores for oral checkoffs is a fairly complex and slow task, where grades can get lost. To get around this, we put significant effort into a semi-automated system which allows TAs and lab assistants to input grades quickly and securely. Without such an investment, oral lab checkoffs would be much less practical.

## {{ page.level }}.1 Autograder Checkoffs
In Spring 2016, there were a total of 18 labs, 14 of which used Snap<em>!</em> {{ "sp16-checkoffs" | cite }}. We had our online autograder setup for 3 of the later labs:

| Lab # | Lab Topic | Autograder |
| ----- | --------- | ---------- |
| Lab 11 | Recursion Part 2 | *Required* |
| | Question: Complete the definition of `merge sort` | |
| Lab 12 | Tic-Tac-Toe | *Optional* |
| | Question: Complete the `ttt` solver block. | |
| Lab 14 | Higher Order Functions | *Optional* |
| | Question: Complete the `is _ pandigital?` block | |
| | Question: Complete the `min value of _ over all numbers in _` block. | &nbsp; |

Note: *optional* means that the students could receive credit for the lab checkoff through either the autograder or an oral lab checkoff. *Required* means that the only the autograder was accepted for credit. 

## {{ page.level }}.2 Reasoning
We chose this setup for a variety of reasons, trying to balance a new technology with the need to test it out.

* One lab was required so that every student would try the autograder at least once and could provide feedback about their experiences.
* Labs 12 and 14 were optional because we didn't want to penalize students if they felt the autograder was more confusing or stressful, but we wanted to give as many people a chance to use it as possible.
* Finally, this hybrid model for checkoffs will likely be the basis for future semesters of CS10, as more questions and feedback are written.

## {{ page.level }}.3 Challenges of Autograder Checkoffs
Naturally, even the most advanced autograder will be no match for a TA...yet. We fully recognize (as do the students) that an autograder cannot replace the detailed, specialized and more articulate of feedback of a TA. Furthermore, compared to the current webpage for lab checkoff questions {{ "sp16-checkoffs" | cite }}, even the easiest-to-use autograder will be significantly more work than posting a few sentences to a web page. 

However, when deployed in the classroom with a "hybrid" model of both lab and oral checkoffs we think we can alleviate the in-class pressures of checkoffs but still give students credit for the work they are doing. By designing a model that gives students more choice, TAs will hopefully be able to give more time to the students that need it most. This still leaves the problem that an autograder is still more work than the status quo. We think that this will become less of a problem overtime as a database of questions is built up and if the analytical capabilities prove to be useful to teaching staff.

