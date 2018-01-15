# Related Work

In building and designing an autograder, there is surprisingly little work published about autograders, and even less so about those for visual programming languages. While there are many examples of autograders for languages like Python and Java, there are only two that we are aware of for blocks-based languages, which are both very recent developments.

## Code.org CodeStudio
Code.org's CodeStudio {{ "code-studio" | cite }} is an online interactive environment based around the open-source Blockly environment {{ "blockly" | cite }}.  CodeStudio includes custom feedback, but the vast majority of the problems are in a highly restrictive space where students are given only a limited set of blocks. While CodeStudio is open source {{ "code-studio-github" | cite }}, the autograder and feedback methodologies are not documented.

![A typical example of a CodeStudio problem that gives students only a few blocks to work with, and has a fairly constrained solution space.](/images/blockly-example.png)

## ITCH: Individual Testing of Computer Homework for Scratch Assignments

ITCH is an autograder for Scratch recently presented at SIGCSE 2016 {{ "itch" | cite }}. However, ITCH's method of autograding is through an instructor-initiated script which should be run after all assignment submissions are collected. This is a fairly common scenario for typical code autograders, but not a model we would use because our goal is instant feedback. ITCH takes a similar method to our Snap<em>!</em> autograder by 'spoofing' user inputs when requested, but it shares many of the same limitations, like a lack of feedback for graphical output.
