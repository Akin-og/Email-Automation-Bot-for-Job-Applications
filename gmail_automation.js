// Global Variables
var RESUME_ID = 'YOUR_RESUME_FILE_ID'; // Replace with your resume's file ID
var TARGET_LABEL = 'Jobs';  // Label under which you want to reply
var MESSAGE_BODY = 'Hi, \n\nPlease find my resume attached for your consideration.\n\nBest regards,\n[Your Name]';
var SCRIPT_PROPERTIES = PropertiesService.getScriptProperties();

function replyWithResume() {
  var label = GmailApp.getUserLabelByName(TARGET_LABEL);
  
  if (!label) {
    Logger.log("Label not found.");
    return;
  }

  var threads = label.getThreads(0, 10);  // Get latest 10 threads under the "Jobs" label
  var resumeFile = DriveApp.getFileById(RESUME_ID);
  
  
  threads.forEach(function (thread) {
    var messages = thread.getMessages();
    var lastMessage = messages[messages.length - 1];

  
    var lastRepliedMessageId = SCRIPT_PROPERTIES.getProperty('lastRepliedMessageId_' + thread.getId());
    
    if (!lastMessage.isInChats() && !lastMessage.isDraft() && lastMessage.getId() !== lastRepliedMessageId) {
      // Reply to the email with the resume attached
      lastMessage.reply(MESSAGE_BODY, {
        attachments: [resumeFile.getAs(MimeType.PDF)]
      });

      // Store the ID of the replied message to avoid replying again
      SCRIPT_PROPERTIES.setProperty('lastRepliedMessageId_' + thread.getId(), lastMessage.getId());

      Logger.log("Replied to: " + lastMessage.getFrom());
    }
  });
}
