# Introduction

#### TODO: SPLIT IN
In recent years, the field computer science (CS), and the broader technology industry, have undergone significant changes, though not simply technical ones. Around the same that same time from that enrollments started booming {{ "cra-blog" | cite }}, the National Science Foundation (NSF) posted the original solicitation for _Broadening Participation in Computing_ {{ "nsf-bpc" | cite }}. As a result of the efforts to improve diversity in CS, curricula such as _Exploring Computer Science_ {{ "ecs" | cite }} (ECS), and _AP Computer Science Principles_ {{ "apcsp" | cite }} (AP-CSP) have emerged. A central component of these new curricula includes the ability to use visual programming languages (VPLs) to teach CS. As great as these tools can be to teach programming, the often lack infrastructure found in more traditional environments (such as Python and Java). This lack on infrastructure can make courses more difficult to teach and scale. **[REF NEEDED?]** A critical example of missing infrastructure is the capability to automatically evaluate code, and send the results to another process. Automatic evaluation, and distributing the results are central components in an _autograder_. Without an autograder, it can be difficult (or simply costly) teach large online courses. During the 2015-2016 school year, we taught _The Beauty and Joy of Computing_ {{ "bjc" | cite }}  (BJC) a series of four _massive open online courses_ (MOOCs) on edX {{ "edx" | cite }}. BJC is an AP CS Principles course that uses Snap<em>!</em> as its primary language. Without an autograder, we didn't think that we could fairly give credit to students online. In addition, BJC is offered at UC Berkeley as CS10 would be able to make use of an autograder for Snap<em>!</em>.

We developed λ as a system for autograding Snap<em>!</em> {{ "snap" | cite }}.
- brief autograder functionality
- font-end vs back-end

Test setup
- focus on CS10

## Snap<em>!</em>
Snap<em>!</em> is inspired by MIT's Scratch {{ "scratch" | cite }}, but adapted for university-level courses by including features such as first-class lists and functions. Snap<em>!</em> is implanted as a web application in Javascript.

![An example Snap! program.](images/snap-basic.png)

## BJC and CS10


![A typical example of BJC curriculum which includes graphical output.](images/bjc-tree.png)
