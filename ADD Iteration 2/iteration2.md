# Iteration 2: Identifying Structures to Support Primary Functionality

## Step 1: Review the Iteration Goal
The focus of this section is to present the results of the activities that are performed in each of the steps of the ADD in the second iteration of the design process for the CMS system. There were generic descriptions of the functionalities described in iteration 1. The goal was to establish an overall system structure. Iteration 2 provides detailed descriptions and decisions that result in the formation of development teams; its goal is to reason about the units of implementation that affect formation, interfaces and also the manner in which development tasks are distributed, outsourced and implemented in sprints.

We need to design in a systematic way, by showing discipline about the decisions we make as we cannot design everything from the start. We initially focus on the biggest risks and then focus on finer details.

## Step 2: Establish Iteration Goal by Selecting Drivers
The goal of iteration 2 is to address the general architectural concern of identifying structures to support primary functionality. In this second iteration, the architect considers the system’s primary use cases:
* UC-1
* UC-4
* UC-5

## Step 3: Choose One or More Elements of the System to Refine
The elements that are to be refined in iteration 2 are the ones that were located in the different layers defined by the three-tier reference architectures in iteration 1. The collaboration of the components that associate with the modules located in different layers is required for the support of functionality in the system.

## Step 4: Choose One or More Design Concepts that Satisfy the Selected Drivers
The following table summarizes the design decisions.
Design Decisions and Location  | Rationale and Assumptions
---|--- |
Create a Domain Model for the application | An initial domain model is necessary for the system, which identifies major entities and their relationships. |
Identify Domain Objects that map to functional requirements | A domain object, where each distinct functional element of the application needs to be encapsulated in a self containing building block. |
Decompose Domain Objects into general and specialized components | React is a widely used client side JavaScript framework. Express is a server side JavaScript framework. React and Express integrate well with each other. There are no alternatives considered for the application development. React and express were selected because they are easy to implement and the development team is familiar with it, resulting in greater and earlier productivity.

## Step 5: Instantiate Architectural Elements, Allocate Responsibilities, and Define Interfaces
Design Decisions and Location  | Rationale and Assumptions
---|--- |
Create only an initial domain model | To accelerate this phase of design, only an initial domain model is created. |
Map the system use cases to domain objects | By analyzing the system’s use cases, an initial identification of domain objects can be made. For all of the use cases in the use case description, domain objects are identified. |
Decompose the domain objects across the layers to identify layer-specific modules with an explicit interface. | This will ensure that the modules that support all of the functionalities are identified. Since the architect will perform this task for just the primary use cases, another team member is required to identify the rest of the modules. The architect discovers the necessity to test the modules, except the ones that implement UI functionalities therefore a new architectural concern is identified: CRN-6: There is a test required on most of the modules. |
Connect components associated with modules using React | Since React uses the inversion of control approach, different aspects are supported and the modules are unit-tested. |
Associate frameworks with a module in the data layer | The modules that are in the data layer summarize Object Relational Mapping.

## Step 6: Sketch Views and Record Design Decisions
#### 1. Figure shows the initial domain model for the system.
![image](https://user-images.githubusercontent.com/80362352/209499969-6df96456-576c-442e-bc75-c2b609a36018.png)
#### 2. Figure below shows the domain objects that are to be instantiated from the use case model
![image](https://user-images.githubusercontent.com/80362352/209500112-7dc8bda6-be2f-4e43-a198-68c04ba19765.png)
#### 3. Figure below shows the module view with the modules that support the primary use cases. 
![image](https://user-images.githubusercontent.com/80362352/209500175-35a8bfe4-f5f2-4594-b6e5-04d0319d8da8.png)

#### 4. The following sequence diagrams for the primary use cases: UC-1, UC-4 and UC-5 were created in the step of the method that defined interfaces.
##### UC-1
  ![image](https://user-images.githubusercontent.com/80362352/209500356-f989a75f-409c-45bb-b4d5-6e967b5a0dbd.png)

##### UC-4
![image](https://user-images.githubusercontent.com/80362352/209500544-5c4ee508-b042-4a4b-b234-9b2332065531.png)

##### UC-5
![image](https://user-images.githubusercontent.com/80362352/209500569-52e582bb-b0fb-4248-87b7-00b56f62d16e.png)

## Step 7: Perform Analysis of Current Design and Review Iteration Goal and Achievement of Design Purpose
Through the decisions made in this iteration, an initial understanding of how functionality is supported in the system was determined.
|Not Addressed | Partially Addressed | Addressed | Design Decision made in this Iteration |
|---|---|---|---|
|   |   | UC-1  | Modules across the layers and preliminary interfaces to support this use case have been identified. |
|   |   | UC-4  | Modules across the layers and preliminary interfaces to support this use case have been identified. |
|   | QA-1  |   | The elements that support the associated use case (UC-1) have been identified. |
|   | QA-2  |   | No relevant decisions made |
|   | QA-3  |   | No relevant decisions made |
|   | QA-4  |   | The elements that support the associated use case (UC-4) have been identified |
|   | QA-5  |   | No relevant decisions made |
|   | QA-6  |   | The elements that support the associated use case (UC-5) have been identified. |
|   | CON-1  |   | No relevant decisions made |
|   | CON-2  |   | No relevant decisions made |
|   | CON-3  |   | No relevant decisions made |
|   | CON-4  |   | No relevant decisions made |
|   | CON-6  |   | No relevant decisions made |
|   | CRN-1  |   | No relevant decisions made |
|   | CRN-2  |   | No relevant decisions made |
|   | CRN-3  |   | Concern is expected to be addressed well through the capable and quality use of React and Express. |
|   | CRN-4  |   | No relevant decisions made |
|   | CRN-5  |   | The architectural concern that all types of course information is provided was partially addressed in the third figure in iteration 2. |