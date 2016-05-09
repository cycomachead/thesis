# Signatures


<style>
 /* Style Definitions */
p.MsoNormal, li.MsoNormal, div.MsoNormal
    {mso-style-unhide:no;
    mso-style-qformat:yes;
    mso-style-parent:"";
    margin:0in;
    margin-bottom:.0001pt;
    font-size:12.0pt;
    mso-bidi-font-size:10.0pt;
    font-family:Times;
    mso-fareast-font-family:"Times New Roman";
    mso-bidi-font-family:"Times New Roman";
}
p.MsoHeader, li.MsoHeader, div.MsoHeader
    {mso-style-noshow:yes;
    mso-style-unhide:no;
    margin:0in;
    margin-bottom:.0001pt;
    mso-pagination:widow-orphan;
    tab-stops:center 3.0in right 6.0in;
    font-size:12.0pt;
    mso-bidi-font-size:10.0pt;
    font-family:Times;
    mso-fareast-font-family:"Times New Roman";
    mso-bidi-font-family:"Times New Roman";
    mso-fareast-language:ZH-CN;}
p.MsoFooter, li.MsoFooter, div.MsoFooter
    {mso-style-noshow:yes;
    mso-style-unhide:no;
    margin:0in;
    margin-bottom:.0001pt;
    mso-pagination:widow-orphan;
    tab-stops:center 3.0in right 6.0in;
    font-size:12.0pt;
    mso-bidi-font-size:10.0pt;
    font-family:Times;
    mso-fareast-font-family:"Times New Roman";
    mso-bidi-font-family:"Times New Roman";
    mso-fareast-language:ZH-CN;}
p.MsoTitle, li.MsoTitle, div.MsoTitle
    {mso-style-unhide:no;
    mso-style-qformat:yes;
    margin:0in;
    margin-bottom:.0001pt;
    text-align:center;
    mso-pagination:widow-orphan;
    font-size:14.0pt;
    mso-bidi-font-size:10.0pt;
    font-family:Times;
    mso-fareast-font-family:"Times New Roman";
    mso-bidi-font-family:"Times New Roman";
    mso-fareast-language:ZH-CN;
    font-weight:bold;
    mso-bidi-font-weight:normal;}
p.Author, li.Author, div.Author
    {mso-style-name:Author;
    mso-style-unhide:no;
    margin:0in;
    margin-bottom:.0001pt;
    text-align:center;
    mso-pagination:widow-orphan;
    font-size:14.0pt;
    mso-bidi-font-size:10.0pt;
    font-family:Times;
    mso-fareast-font-family:"Times New Roman";
    mso-bidi-font-family:"Times New Roman";
    mso-fareast-language:ZH-CN;}
span.SpellE
    {mso-style-name:"";
    mso-spl-e:yes;}
.MsoChpDefault
    {mso-style-type:export-only;
    mso-default-props:yes;
    font-size:10.0pt;
    mso-ansi-font-size:10.0pt;
    mso-bidi-font-size:10.0pt;
    font-family:"New York","serif";
    mso-ascii-font-family:"New York";
    mso-hansi-font-family:"New York";
    mso-fareast-language:ZH-CN;}
</style>


<div class=WordSection1>

<div style='mso-element:para-border-div;border:none;border-top:solid windowtext 1.0pt;
mso-border-top-alt:solid windowtext .75pt;padding:0in 0in 0in 0in'>
</div>


<p class="MsoTitle normal">λ - An Autograder for Snap<i style='mso-bidi-font-style:normal'>!</i></p>

<p class=Author><b style='mso-bidi-font-weight:normal'><o:p>&nbsp;</o:p></b></p>

<p class=Author>by Michael Ball</p>

<div style='mso-element:para-border-div;border:none;border-bottom:solid windowtext 1.0pt;
mso-border-bottom-alt:solid windowtext .75pt;padding:0in 0in 0in 0in'>

<p class=MsoTitle style='border:none;mso-border-bottom-alt:solid windowtext .75pt;
padding:0in;mso-padding-alt:0in 0in 0in 0in'><o:p>&nbsp;</o:p></p>

</div>

<p class=MsoTitle><o:p>&nbsp;</o:p></p>

<p class=MsoTitle><o:p>&nbsp;</o:p></p>

<p class=MsoTitle>Research Project</p>

<p class=MsoTitle><o:p>&nbsp;</o:p></p>

<p class=MsoNormal>Submitted to the Department of Electrical Engineering and
Computer Sciences, University of California at Berkeley, in partial
satisfaction of the requirements for the degree of <b style='mso-bidi-font-weight:
normal'>Master of Science, Plan II</b>.</p>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<p class=MsoNormal>Approval for the Report and Comprehensive Examination:</p>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

<p class=MsoNormal align=center style='margin-top:0in;margin-right:1.5in;
margin-bottom:0in;margin-left:1.5in;margin-bottom:.0001pt;text-align:center'><b
style='mso-bidi-font-weight:normal'>Committee:<o:p></o:p></b></p>

<p class=MsoNormal align=center style='margin-top:0in;margin-right:1.5in;
margin-bottom:0in;margin-left:1.5in;margin-bottom:.0001pt;text-align:center'><o:p>&nbsp;</o:p></p>

<p class=MsoNormal align=center style='margin-top:0in;margin-right:1.5in;
margin-bottom:0in;margin-left:1.5in;margin-bottom:.0001pt;text-align:center'><o:p>&nbsp;</o:p></p>

<div style='mso-element:para-border-div;border:none;border-bottom:solid windowtext 1.0pt;
mso-border-bottom-alt:solid windowtext .75pt;padding:0in 0in 0in 0in;
margin-left:1.5in;margin-right:1.5in'>

<p class=MsoNormal align=center style='margin-bottom:6.0pt;text-align:center;
border:none;mso-border-bottom-alt:solid windowtext .75pt;padding:0in;
mso-padding-alt:0in 0in 0in 0in'><o:p>&nbsp;</o:p></p>

</div>

<p class=MsoNormal align=center style='margin-top:0in;margin-right:1.5in;
margin-bottom:0in;margin-left:1.5in;margin-bottom:.0001pt;text-align:center'>Professor
Dan Garcia</p>

<p class=MsoNormal align=center style='margin-top:0in;margin-right:1.5in;
margin-bottom:0in;margin-left:1.5in;margin-bottom:.0001pt;text-align:center'>Research
Advisor</p>

<p class=MsoNormal align=center style='margin-top:0in;margin-right:1.5in;
margin-bottom:0in;margin-left:1.5in;margin-bottom:.0001pt;text-align:center'><o:p>&nbsp;</o:p></p>

<div style='mso-element:para-border-div;border:none;border-bottom:solid windowtext 1.0pt;
mso-border-bottom-alt:solid windowtext .75pt;padding:0in 0in 0in 0in;
margin-left:1.5in;margin-right:1.5in'>

<p class=MsoNormal align=center style='margin-bottom:6.0pt;text-align:center;
border:none;mso-border-bottom-alt:solid windowtext .75pt;padding:0in;
mso-padding-alt:0in 0in 0in 0in'><a name="OLE_LINK2"></a><a name="OLE_LINK1"><span
style='mso-bookmark:OLE_LINK2'>May 13, 2016</span></a></p>

</div>

<span style='mso-bookmark:OLE_LINK2'></span><span style='mso-bookmark:OLE_LINK1'></span>

<p class=MsoNormal align=center style='margin-top:0in;margin-right:1.5in;
margin-bottom:0in;margin-left:1.5in;margin-bottom:.0001pt;text-align:center'>(Date)</p>

<p class=MsoNormal align=center style='margin-top:0in;margin-right:1.5in;
margin-bottom:0in;margin-left:1.5in;margin-bottom:.0001pt;text-align:center'><o:p>&nbsp;</o:p></p>

<p class=MsoNormal style='margin-right:1.5in'><o:p>&nbsp;</o:p></p>

<p class=MsoNormal align=center style='margin-top:0in;margin-right:1.5in;
margin-bottom:0in;margin-left:1.5in;margin-bottom:.0001pt;text-align:center'>*
* * * * * *</p>

<p class=MsoNormal align=center style='margin-top:0in;margin-right:1.5in;
margin-bottom:0in;margin-left:1.5in;margin-bottom:.0001pt;text-align:center'><o:p>&nbsp;</o:p></p>

<p class=MsoNormal align=center style='margin-top:0in;margin-right:1.5in;
margin-bottom:0in;margin-left:1.5in;margin-bottom:.0001pt;text-align:center'><o:p>&nbsp;</o:p></p>

<div style='mso-element:para-border-div;border:none;border-bottom:solid windowtext 1.0pt;
mso-border-bottom-alt:solid windowtext .75pt;padding:0in 0in 0in 0in;
margin-left:1.5in;margin-right:1.5in'>

<p class=MsoNormal align=center style='margin-bottom:6.0pt;text-align:center;
border:none;mso-border-bottom-alt:solid windowtext .75pt;padding:0in;
mso-padding-alt:0in 0in 0in 0in'><o:p>&nbsp;</o:p></p>

</div>

<p class=MsoNormal align=center style='margin-top:0in;margin-right:1.5in;
margin-bottom:0in;margin-left:1.5in;margin-bottom:.0001pt;text-align:center'>Professor Armando Fox</p>

<p class=MsoNormal align=center style='margin-top:0in;margin-right:1.5in;
margin-bottom:0in;margin-left:1.5in;margin-bottom:.0001pt;text-align:center'>Second
Reader</p>

<p class=MsoNormal align=center style='margin-top:0in;margin-right:1.5in;
margin-bottom:0in;margin-left:1.5in;margin-bottom:.0001pt;text-align:center'><o:p>&nbsp;</o:p></p>

<div style='mso-element:para-border-div;border:none;border-bottom:solid windowtext 1.0pt;
mso-border-bottom-alt:solid windowtext .75pt;padding:0in 0in 0in 0in;
margin-left:1.5in;margin-right:1.5in'>

<p class="MsoNormal" align=center style='margin-bottom:6.0pt;text-align:center;
border:none;mso-border-bottom-alt:solid windowtext .75pt;padding:0in;
mso-padding-alt:0in 0in 0in 0in'>May 13, 2016</p>

</div>

<p class=MsoNormal align=center style='margin-top:0in;margin-right:1.5in;
margin-bottom:0in;margin-left:1.5in;margin-bottom:.0001pt;text-align:center'>(Date)</p>

</div>
