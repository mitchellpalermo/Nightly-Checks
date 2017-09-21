# Nightly-Checks

Author: Mitchell Palermo

Email: mpalermo@trinity.edu


This project is meant to be used in conjunction with Google Sheets. The code here is being used from a google account that is a part of a Google for Education Enterprise group. So if your campus is not a google campus, this may not work for you. You'll see at the bottom a section to add a link it'll look like this `{add google forms link here}`. Replace that text and the brackets with the link to your google form that you've created.  

## The program's purpose is to

Assign rooms to student workers to be checked on that night. This assignment will be delivered via email.

## The program works by

Reading data from and writing data to a Google Sheets file. Within this file there are three sheets. 

1. Complete list of rooms to be checked
2. Bookmark
3. List of student emails to be used when assigning. 

These spreadsheets are pulled into the project by searching for their name. Then the program determines the day of the week and using that value, the correct student name is read in from sheet # 3. The subject of the email is then assigned.

The `bookmark` value is then read in from spreadsheet # 2. This value will later tell the program where we left off in our list of rooms. 

A for loop then begins executing using the value from the bookmark file. Essentially it is reading in a room from spreadsheet # 1 and adding it to the body of our assignment email. Every time the loop iterates is moves down by one row in the spreadsheet, making sure to add 1 to the bookmark value during every iteration. 

After the rooms are read in, the new value of `bookmark` is written to spreadsheet # 2. 

The program then adds the link to the nightly checks google form at the bottom of the assignment email.

The last step is to send the email.

## Other steps that need to be taken

You must set up triggers for your code to run. I reccomend using "time-based" triggers. I've set my project to run daily at 5pm. 

This code needs permission from a google account to be able to send emails and work in the Google Sheets document. I authorized the permissions from our departmental account so that this process wasn't dependent on me. 
