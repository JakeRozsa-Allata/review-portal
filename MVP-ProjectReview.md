# **Review Portal**

## **1\. Problem Statement**

- When a project is finished within a company, there is no good way to provide feedback that persists and can be easily navigated to improve current processes.
- The only solutions i have found that are widely used are forms that pass the data into spreadsheets.

## **2\. Target Audience**

- The target audience for this app would be companies with employees work on a project cycle. This can benefit companies with internal company projects or contract work as well. I see this especially useful in the tech/laywer/consultancy sectors.

## **3\. Value Proposition**

- This will make it easier for companies to receive feedback, understand employees strengths and weaknesses, evaluate projects, and improve overall in a streamlined environment.

## **4\. Core Features**

- employee review, project review, company dashboard, employee dashboard, project dashboard, employee import, project import

## **5\. User Journey**

- A company signs up to use the services.
- Company import their employees and projects into the system.
- Employees get sent an email to fill out basic info about themselves and their projects.
- Upon a significant event (roll off project, complete a technical challenge, etc) employees will submit reviews of other employees, or their project.
- An employee can view their profile to find the things they need to work on.
- Managers can view employee lists to see what employees excel at to pick who to add to their projects.
- A user can view and review any project on the project profile.
- A home page will be a configurable dashboard with a default template that shows company health, employee status, project health, recently submitted reviews, etc.

## **6\. Technology Stack**

- Vue.js, Java (with springboot), SQL.

## **TEAM:**

- Mykeal
- Jake
- Sean
- Antonio Camacho

## **Components to build**

- employee to employee review forms
- employee to project review forms
- Client to employee review forms
- Client to project review form?
- project info page
  - auth to decide who can view / edit / delete
  - link to employees that have been on project
  - suggestions of future employees to put on project
    - This will be based off stack of project to stack of employees strengths
- Employee profile page
  - auth to decide who can view / edit / delete
  - Add review
  - have scoring of employee in specific categories
    - frontend, backend, communication, documentation, drive, etc.
- Company manager portal
  - Review company name.
  - Review pricing package?
  - Review employees
    - Make changes to employees status, pros/cons, etc.
- Employee List page
  - Sort by ranking of categories
  - filter by anything
  - adjust column widths, number of columns, etc.
  - create graphs of overall employee strengths and weaknesses.
    - identify weaknesses in the company?
    - identify weak employees in the company?
  -
- SUSI
  - Ability to sign up a company
    - Import all employees and clients basic info into site
    - Choose pricing Plan
  - Build single sign-on for employees.
- Payment Processing?
  - subscription based payment?
- Email's to employees related to reviews.
  - On submission of employee review, employee receives email notification.
  - On submission of project review, List of stakeholders in project receive email
