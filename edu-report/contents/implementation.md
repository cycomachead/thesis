# Implementation

The λ web application is built using the Ruby on Rails framework {{ "ror" | cite }}, and makes use of many common web technologies. The Snap<em>!</em> interface is implemented purely in JavaScript. The initial purpose of the system is not to be a grade storage but to connect with an existing gradebook or Learning Management System (LMS) so that any grade results will be integrated with the rest of course data. We chose this route because, in our experience multiple sources of grades are prone to errors and delays. By designing a system which doesn't _need_ to store grade data, we can make a lot of simplifications and focus on more important features.
