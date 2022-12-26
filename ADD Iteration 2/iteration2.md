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
