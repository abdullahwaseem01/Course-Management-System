# Business Case 
The requirements analysis for the architectural drivers of the course registration system will focus on Use Case models, Quality Attributes for the application, System Constraints for the application, and Architectural Concerns. There are some general requirements for the course registration system. The system should provide static course information. The system should store static course information. The system should be able to represent static course information. The system should provide dynamic course information. The system should be able to store dynamic course information. The system should be able to represent dynamic course information. Finally, the system should provide a messaging system.

# Architectural Concerns
| ID | Concern | 
|:---|:---|
| CRN-1 | There is very low expected downtime|
| CRN-2 | Ensure that all information is kept private|
| CRN-3 | The system and UI is user friendly|
| CRN-4 | Grades are marked correctly and accessible to students|
| CRN-5 | All type of course information is provided|

# System Constraints 
| ID | Concern | 
|:---|:---|
| CON-1 | Network connection between user and system must be reliable|
| CON-2 | Complete each part of the project within a given deadline|
| CON-3 | System must be accessed through browser|
| CON-4 | At least 100 users must be able to access the system at the same time|
| CON-5 | Mist have backup server for the system|
| CON-6  | Must be able to upload any given files|

# Quality Attributes
| ID | Quality Attributes | Scenario | Associated Use Case | 
| --------- | ----------- | ---------------------- | --------------- |
| QA-1 | Privacy| A student attempts to attempts to view the grades of another and is sent a denied access, invalid credentials page and link to a user customizable visibility policy page is available.  | UC-1 |
| QA-2 | Availability | A failure occurs in the course management system. The system is operational within 30 seconds and the downtime is added to monthly downtime quota. The cause of failure is investigated by the system administrator. A notification is sent to users when system downtime is planned | UC-3 |
| QA-3| User Friendliness | Once the user logs in their session is saved with a timestamp and they have access to all protected pages given their access rights. Within user settings a user may change their language, choosing between english and dutch. The UI is based on a component engine and page data is rendered into the components. All UI elements are given meta descriptions user with accessibility issue which can be activated in settings. | UC-2 |
| QA-4| Accessibility| All UI elements are given meta descriptions user with accessibility issue which can be activated in settings. | UC-4 |
| QA-5| Security | A user registers with their student id and email and is given read and write permission to their profile. When on the profile page of another student they can change the other student's study information. | UC-6 |
| QA-6| Inoperability  | Only developers and system administrators are given access to make system changes on the server. Admin can also make changes to courses. User's can export their schedules to an ics file and import ics files to add to their calendar. | UC-5 |

# Use Cases
![image](https://user-images.githubusercontent.com/80362352/209514833-d7962ece-115f-4cd1-a1a2-19fe78d0732a.png)

| Use Case | Description |
|:---|:---|
UC-1: View course information | A student can view information regarding certain courses within the system. Contents of attended courses over the past years can be seen. Contact Information of students and lectures of these courses can also be retrieved. The grades statistics of these courses can also be viewed. |
 UC-2: Manage teams |  A lecturer can manage all the teams in the system. Teams for the course can be created or deleted. When they are made, they can also be named or renamed later. Assistant lecturers can also be assigned to teams. |
 UC-3: Control memory space | Maintainers can limit the size of files being uploaded and specify the total available space for courses. |
 UC-4: Manage courses | Administration can manage courses in the system. Courses can be created or deleted. The lecturer of a course can also be appointed. Lecturer information can be entered and retrieved later. Prerequisites for the course can also be specified and whether a student matches up to them or not administration can bypass them and sign them up.|
  UC-5: Manage backups | Maintainers can create backups and restore them completely or partially up to a specific date |
  UC-6: Change password | Students can update their personal information such as their password for the system using a password reset function and get it back in their email 
