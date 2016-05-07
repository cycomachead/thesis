# Implementation

The λ web application is built using the Ruby on Rails framework {{ "ror" | cite }}, and makes use of many common web technologies. The Snap<em>!</em> interface is implemented purely in JavaScript.

## The Need for a Web App
The JavaScript which powers the autograding works entirely client-side, meaning as long as you have the test files, there's no need for an internet connection. This path was chosen for two reasons:

* Snap<em>!</em> is client-side, and evaluating Snap<em>!</em> projects on a server would require a significant amount of work.
* edX provides a custom problem type called "JSInput" {{ "jsinput-docs" | cite }} which gave us a clear path for integration with edX.
* Developing an autograder and a web application required more resources than were available.

While the entirely client-side path was a good decision, we ran into a number of issues by relying on `JSInput` and trying to keep all features client-side.

### `JSInput`
edX's `JSInput` problem type provides a JavaScript API for sending scores to the edX platform. It allows us to build in a custom version of Snap<em>!</em> alongside the rest of the content in edX.

![Snap! can be embedded in edX through JSInput.](images/snap-edx.png)

However, we encountered several problems while developing the `JSInput` based integration:

* Developing code was very slow! Changes to code required manually uploading a new file to edX, which is a multi-step process. The libraries used for JSInput swallowed native JavaScript errors, making debugging nearly impossible. 
* The edX interface has it's own mechanism for a "Check" button and showing feedback. Communicating the detailed output from the autograder didn't work very well, and we ended up developing many work arounds to get a seamless UI.
* There's no room for storing or retrieving user metadata. We rely on features that allow students to recall previous submissions. Through `JSInput` the only option for these features were to use the browser's `LocalStorage` API. This API has limits, like a max of 5MB of storage, that caused problems for some students. 
* Furthermore, without a dedicated database, every single test file written had lots of hard-coded metadata that was repetitive and prone to error.
* While edX provides user logs for the entire course, we found dealing with these logs to be needlessly complex. They are slow to get, and the autograder results are difficult to separate from the rest of the course data. As such, we haven't analyzed the edX data to the extent we'd like to. A simpler logging system described below has been immensely helpful for our analysis.

The one benefit of these problems was that it forced the development of the autograder into two components: A JS interface to edX, and a "dumb" client-side component that sits on top of Snap<em>!</em>. This distinction was helpful when adapting the autograder to work with the new web application.

perhaps most importantly: the grading system could only work with edX. CS10 uses Canvas {{ "canvas" | cite }} as it's LMS, and many high schools use different systems. The need to build a custom solution for every platform would be prohibitively expensive. Fortunately, the 

## Basic Architecture
λ is primarily a Ruby on Rails "ROR" {{ "ror" | cite }} web application


## LTI & User Accounts
* LTI
* Oauth
* Snap<em>!</em>
* User mapping

## Security Concerns
...
	* edX JS Input
	* Moving to LTI
	* Dedicated Database
		* Simpler JS Test