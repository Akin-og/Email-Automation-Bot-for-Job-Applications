# Email-Automation-Bot-for-Job-Applications

This project automates replying to job-related emails in Gmail. It detects emails under a specific label ("Jobs"), replies to new emails with a predefined message, and attaches a resume dynamically from Google Drive.

## Features
- **Automated Replies**: Sends a customized reply to emails under the "Jobs" label.
- **Resume Attachment**: Dynamically fetches and attaches the latest resume in PDF format from Google Drive.
- **Message Tracking**: Ensures each email is only replied to once by tracking the last processed message ID using Google Apps Script's `PropertiesService`.
- **Scheduled Execution**: Runs automatically at regular intervals using time-driven triggers.

## Technologies Used
- Google Apps Script
- Gmail API
- Google Drive API
- JavaScript

## Setup Instructions

### Prerequisites
1. A Gmail account with the label "Jobs" created.
2. Your resume uploaded to Google Drive (ensure sharing settings are set appropriately).
3. Access to [Google Apps Script](https://script.google.com/).

### Steps
1. Open Google Apps Script and create a new project.
2. Replace the content with the code in `gmail_automation.js`.
3. Replace `YOUR_RESUME_FILE_ID` in the code with the file ID of your resume from Google Drive.
   - To get the file ID, open your resume in Google Drive, copy the URL, and extract the ID between `/file/d/` and `/view`.
4. Save the script.

### Trigger Setup
1. In Google Apps Script, click the clock icon to open the **Triggers** menu.
2. Add a new trigger:
   - Function: `replyWithResume`
   - Event Source: Time-driven
   - Frequency: Every 10 minutes or based on your preference.

### Running the Script
1. Run the script manually the first time and authorize the required permissions.
2. After setup, the script will run automatically and reply to new emails under the "Jobs" label.

## How It Works
1. Detects new emails under the "Jobs" label in Gmail.
2. Checks if an email has already been replied to by comparing message IDs stored in `PropertiesService`.
3. Sends a reply with a customized message and a PDF attachment of the resume.
