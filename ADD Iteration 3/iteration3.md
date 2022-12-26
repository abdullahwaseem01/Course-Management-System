# Iteration 3: Addressing Quality Attribute Scenario Driverss
## Step 2: Establish Iteration Goal by Selecting Drivers
For this iteration the focus will be on:
a. QA-2: Availability
b. QA-5: Security
c. CON-3: A database server must be used
d. CON-5: Must have a backup server for the system
e. CRN-2: Ensure that all information is kept private
f. CON-4: At least 100 users must be able to access the system at the same time.

## Step 3: Choose One of More Elements of the System to Refine
In this iteration the elements will be refined are the application server and database
server. Some attention will also be given to the security component.

## Step 4: Choose One or More Design Concepts That Satisfy the Selected Drivers
Design Decisions and Location | Rationale |
|:---|:---|
Apply active redundancy in the application server | This allows the system to respond in the event of an application failure by switching to a replica of the current application. This fulfills QA-2 and CON-5.
Apply active redundancy in the database server | This allows the system to respond in the event of a database failure by switching to a replica of the current application. This fulfills QA-2 and CON-5. | 
Allow the system to be able to access data from the database | When new users join their login information will be stored in the database alongside their information on courses. This will ensure that only login information that matches can access the database. This fulfills CRN-2,CON-3 and QA-5. |
Use a load balancer | A load balancer acts as the “traffic cop” sitting in front of your servers and routing client requests across all servers capable of fulfilling those requests in a manner that maximizes speed and capacity utilization and ensures that no one server is overworked, which could degrade performance. This fulfills CON-4. |

 ## Step 5: Instantiate Architectural Elements, Allocate Responsibilities, and Define Interfaces
Design Decisions and Location | Rationale
|:---|:---|
Use MongoDB to store data | MongoDB is a document database. It stores data in a type of JSON format called BSON. We can use this store and retrieve user and course information. This fulfills CON-3. |
Archiving backups | Backups that have been created and saved by previous users can be accessed and used while maintenance is being done. This fulfills CON-5.|
Upload Load balancer | Load balancer used to control traffic on the two application servers. This fulfills CON-4. |

## Step 6: Sketch Views and Record Design Decisions
# Image 

Element | Responsibility
|:---|:---|
LoadBalancer | Dispatches (and balances the load of) requests coming from clients to the application servers. The load balancer also presents a unique IP address to the clients.|

The UML sequence diagram shown below shows how a lecturer can make a new team to
support UC-2,which is also associated with QA-2 (availability).

# Image

## Step 7: Perform Analysis of Current Design and Review Iteration Goal And Achievement of Design Purpose
Not Addressed | Partially Addressed | Completely Addressed | Design Decision Made During the Iteration|
|:---|:---|:---|:---|
| |QA-1 | |  If a student is denied access then he can't see information associated with that account |
||QA-2 ||Duplicated servers to ensure that during a failure the system can still run even with a failure of one component.
||QA-3 ||No relevant decisions made. |
||QA-4|| No relevant decisions made
||QA-5|| Login information stored in database has to match one entered to be given access to account
||QA-6|| No relevant decisions made
||CON-1|| No relevant decisions made
|CON-2|||| No relevant decisions made|
||CON-3|| MongoDB was chosen as a database to store user and course information
||CON-4|| Load balancer was introduced to make sure the system could handle lots of requests from multiple users
||CON-5|| Backups were made and can be made for each system
||CON-6|| No relevant decisions made
||CRN-1|| The servers have duplicates that can be used if one part fails so the downtime of the system is very low
||CRN-2|| Only users with the correct password and username that stored in the database can have access to information associated with that account
||CRN-3|| No relevant decisions made
||CRN-4|| No relevant decisions made
||CRN-5|| No relevant decisions made