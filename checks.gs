
// add construct to handle the sheet being gone or broken

//GLOBALS
var studentEmailSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Students");
var roomListSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("List of Rooms");
var bookMarkSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Bookmark");
var toCheck = "Please check the following rooms: \n";

function main()
{
  // Date objects
  var now = new Date();
  var dayOfWeek = now.getDay();

  if(dayOfWeek != 5 && dayOfWeek !=6)
  {
  //setting the email of the student
  var studentEmail = ""; //email address of student performing nightly checks
  switch (dayOfWeek)
  {
    case 0://sunday
      studentEmail = studentEmailSheet.getRange(1,1).getValue();
      break;
    case 1://monday
      studentEmail = studentEmailSheet.getRange(2,1).getValue();
      break;
    case 2://tuesday
      studentEmail = studentEmailSheet.getRange(3,1).getValue();
      break;
    case 3://wednesday
      studentEmail = studentEmailSheet.getRange(4,1).getValue();
      break;
    case 4://thursday
      studentEmail = studentEmailSheet.getRange(5,1).getValue();
      break;
  }

  studentEmail += ", {supervisor email goes here}";

  //setting details of email
  var subject = "Nightly Checks Assignment";

  //reading in the old bookmark
   var bookmarkCell = bookMarkSheet.getActiveCell();
   var oldBookmark = bookmarkCell.getValue();

  //Gets five rooms and adds them to the body of the email
   for(i=0; i < 5; i++)
   {
     var room = roomListSheet.getRange(oldBookmark, 1).getValue();//returns a specific cell
     if(room == null)//if the room value from the end of the list is null
     {
        Logger.log("We've reached the end of the list");
        oldBookmark = 1;
     }
     else
     {
       toCheck += "\n" + room; //adds current iteration's room to the list to check
       //addToEmail(room, toCheck);
     }
     oldBookmark += 1;
   }

  bookmarkCell.setValue(oldBookmark);//write new bookmark value to our sheet

  toCheck += "\n The Nightly Checks form can be found here: \n {google forms link here}";
  //sending email
  MailApp.sendEmail(studentEmail, subject, toCheck)

  }
}
