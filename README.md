# AWS_PHOTO_DRIVE
A Google Drive Clone hosted by AWS

## Motivation

I'm tired of just learning what I need to succeed. I want to build something and learn a whole lot, as free from AI assistance as possible.

Thi sproject will be an exercise in my coding competence, resourcefulness, and determination. I want to make some sort of contribution to this repo, every week, and make sizeable progress till I can use and/or demo this for others.

I'm not making the next facebook. This is not a business venture, this is a "just because I can project".

## Architecture

For a project as ambitious as this, I have to define the parts of this project, that I will need to define each portion as I have envisioned it as if now.

This is what I plan to have the app made of (If it changes, you can just check the Git History)

The [full conversation with the OpenAI bot](AWS_Google_Drive_Clone_Chat_Guide.pdf) can be found in the project directory 

### Components (and probable technologies)

* User Interface (Front-End) Will likely be made with React and such.

* Application Layer (Back-End) Will want to make use of maybe Spring Boot or Node.js backend. (Always wanted to learn this in more detail)

* Authentication (User Management) Will use AWS tools. Will only allow myself to have an account, but be extendible such that others can have accounts if needed.

* Storage (Document Container) Will use AWS S3 for this. This will hold the actual documents.

* Database (documents metadata & possible account info). Will use AWS DynamoDB

* File Uploads. Will use API Gateway with AWS Lambda (Whatever that means)

* Search (Stretch) AWS Elastisearch.

* Logging and Monitoring (Performance watching) AWS Cloud(Watch/Trail).

* Security & Permissions Use IAM & KMS for access to internal resources.