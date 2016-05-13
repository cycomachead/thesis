# Future Work
Thus far, we have shown the current system has enough capability to be used in the classroom. However, we see a number of areas where λ could be expanded. Additionally, some of the analysis has revealed the need to more closely explore at some specific research questions. 

## Autograding
Aside from continual bug fixes, there are three key areas for future improvement. 

1. More room for feedback.
	* The current output provided by the autograder is focused mostly on the results of individual test cases, by comparing the expected vs returned outputs of blocks. While test authors are able to work individually written feedback into thes test cases, the overall presentation isn't very clear. Furthermore, because there's not much room on the screen for good feedback, authors don't have an incentive to write as much.
2. Snap<em>!</em> Test API improvements
	* Currently, it can be fairly cumbersome to write tests in JavaScript. There is a lot of boilerplate code, and cleanly presenting images of blocks (instead of just a text version) requires a lot of effort for test authors.
	* One initial solution to this problem is the migrate the current object-oriented API to a version which is based more around configuration than code. While it couldn't be 100% configuration because authors will need to write custom test functions in some cases, a format which operates more like a JSON file would be easier to manage.
	* Snap<em>!</em> tests should be writable in Snap<em>!</em>. By using a Snap<em>!</em> feature called "codification" we are able to compile Snap<em>!</em> code to JavaScript (or any other language). Here is an example of a prototype Snap<em>!</em> library for writing tests. By compiling Snap<em>!</em> to JavaScript we can also improve the security of tests that are written, because the set of functions available in Snap<em>!</em> is easier to restrict (and catch violations) than JavaScript.
3. Static Analysis capabilities.
	* We've included some very basic static analysis capabilities in the current version. However, they're tricky to use and require a lot of custom code. Through static analysis we should be able to give students targeted feedback about how to improve their code.
	* Some tools that would be useful are parttern matching functions for code structure (like finding all `if (condition) {return condition}` type structures).
* Image Based Autograding
	* We've explored image based autograding for problems like fractals and other turtle graphics exercises. Images would be an OK way to judge correctness, but they provide very limited feedback to students about how to improve.
	* Some paths for improving the feedback from image-based autograding would be to try to account for specific errors. For example, you could rotate two images until you find the minimum difference. If a rotation makes two images match, then you could provide feedback about where such an error might occur.

## Long Term Questions

Finally, now that we've shown students are interested in using an autograder, we should carry out more targeted research.

* What types of interventions help students learn or complete labs?
	* Instead of simply presenting feedback when students fail a test, we should have targeted interventions that ask questions or try a different method for solving the problem.
* Can we automatically generate better hints to give to students?
	* This is a highly active area of research, and now that λ is collection student data we could be able to use this to improve the feedback for future courses.
* How does the autograder affect motivation in early CS courses?
	* Some students are understandably concerned about the affects autograder have on their motivation to complete a task. While there is some existing work on this topic, we believe there's room to explore this in the context of visual programming languages. 