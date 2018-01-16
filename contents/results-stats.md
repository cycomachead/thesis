## {{ page.level }}.1 Usage & Statistics
The first part of our analysis will be to look at how often and when students were submitting their labs. This data was obtained from aggregate information in the λ Submissions database as well as from bCourses to compare to non-autograded labs.

### {{ page.level }}.1.1 Basic Statistics

* Total Number of students in CS10: 169
* Total Number of student using the autograder: 145 (86%)

| Lab # | Oral Checkoffs | Autograder Checkoffs |
|:-----:| -------------- | -------------------- |
| 10	| 145			 | N/A					|
| 11	| 34			 | 133					|
| 12	| 57			 | 80					|
| 13	| 132			 | N/A					|
| 14	| 97			 | 64					|
| 15	| 142			 | N/A					|

Note this data has some anomalies due to bug in the initial setup, and confusion among course staff:

* Lab 11 had a bug posting scores through LTI for the first day. Some TA's mistakenly submitted scores twice. There is some overlap of those 34 students.
* Lab 14 had a bug in one exercise causing many students to get checked off by both methods.

We can look at the number of times that students tried the autograder:

![Number of students by number of questions attempted](/images//questions-attempted-num-of-students.png)

What this shows us is that, though students were only required to complete one lab using the autograder, nearly 2/3 (93/149) found the autograder compelling enough to try a second time. From talking to students and staff, a portion of the drop off in students using the autograder may be due to the fact that the autograder doesn't handle pairs of students. Given that the later labs are some of the more difficult, many students may choose to work in pairs.

### {{ page.level }}.1.2 Submission Times
The second thing to look at is _when_ students are submitting their work. While we certainly still want students to attend lab, improving the "at home" experience for students would be a significant benefit. Here, we see that students are choosing to use the autograder at home, with usage patterns that you would expect from undergraduates.

These charts show the overall submission times for each of the three labs. The red bar indicates the date that the lab was due for full credit.

![Lab 11: submission times by day.](/images//SS Lab 11.png)

![Lab 12: submission times by day.](/images//SS Lab 12.png)

![Lab 14: submission times by day.](/images//SS Lab 14.png)

These graphs don't reveal anything too surprising. For the most part, students are using the autograder to complete labs at the same pace they normally would.

We can look at the days of the week as well as the time of day to see when students are working on labs. Normal lab times are usually between 9:00-19:00, though this varies by the day of the week.

![Number of autograder submissions by hour of the day.](/images//SS Labs By Hour.png)

![Number of autograder submissions by day of the week.](/images//labs-day-of-week.png)

Again, these graphs are fairly close to what course staff would expect. Most students are continuing to complete labs during their scheduled time, but a significant number are working at home.

### {{ page.level }}.1.3 Staff Time Savings
While time savings are not a primary motivation for this work, we should consider the potential benefits that could be saved be allowing students to get checked off using the autograder. Anecdotally, oral lab checkoffs take between 2 to 10 minutes to complete, with the average time somewhere around 3 to 4 minutes. The current usage patterns (as well as the results in the next section), suggest that we can expect 33%-50% of students to use the autograder.

If we have 15 labs which use Snap<em>!</em>, and 150 students completing labs, and assume that a lab checkoff takes 3 minutes: 33% of students the autograder would free up approximately 38 hours of TA time. (This is slightly under 30% of the total workload for a single 8 hour per week TA appointment at Berkeley.)

However, if we have 15 labs which use Snap<em>!</em>, and 300 students completing labs, and assume that a lab checkoff takes 4 minutes: 50% of students the autograder would free up approximately 150 hours of TA time. (This is 110% of the total workload for a single 8 hour per week TA appointment at Berkeley.)

Naturally, this might lead one to question the value of oral lab checkoffs. That's not the goal here at all. Oral lab checkoffs have been an incredible positive pedagogical tool. While writing tests can take some time, the hope is that the cost would aromatize itself well over many semesters.

### {{ page.level }}.1.4 Submission Patterns
We can also look at how often students attempt each question. This shows whether students are using the autograder more as a feedback tool, as a crutch or as simply a credit mechanism. While there's no clear exact number of times a student should use submit their work, it's clear that we want an overall 'happy-medium'.

![Most students appear to only submit once at the end of their work.](/images//num-students-times-submitted.png)

The data show that most students appear to be submitting only once, meaning they're not currently getting much benefit by the feedback presented. If there were more feedback presented, or potentially more challenging questions this might change. Though not yet implemented, non-graded feedback such as code quality suggestions might change the way students work to use the autograder.

![Number of students by number of times submitted for each lab.](/images//submissions-count-combined.png)

These results also how a really long tail for the number of submissions by some students. This is to be expected with any autograder. However, from looking at the data, and from TA reports many of these high submission numbers may be due to the previously mentioned bugs. (Students tried submitting many times simply hoping that the errors would disappear.)

However, the difference in attempts for lab 14 is pretty clear. While most students still only submitted a few number of times, there is a much wider diversity in the number of questions. The number of blocks graded for lab 14 was 4 compared to the 1 or 2 for labs 11 and 12.

