# School Catalogue

## Overview

The School Catalogue is a digital reference system designed for the New York City Department of Education. It serves to organise and store information about schools, allowing users to easily access essential details about various educational institutions across the city.

## Project Structure

This project is built using object-oriented programming (OOP) principles, featuring a parent class School and three child classes: Primary, Middle, and High. The inheritance structure allows for shared properties and methods while enabling specialisation for different school types.

## Requirements

### School Class

    Properties:
        name (string): The name of the school.
        level (string): The educational level ('primary', 'middle', or 'high').
        numberOfStudents (number): The total number of students enrolled in the school.

    Getters:
        All properties have associated getters.

    Setters:
        The numberOfStudents property has a setter to update the student count.

    Methods:
        .quickFacts(): Returns a string summarizing key details about the school.
        .pickSubstituteTeacher(): A static method that selects a substitute teacher from a predefined list.

### Primary Class

    Inherits all properties and methods from the School class.
    
    Additional Property:
        pickupPolicy (string): The policy for student pickup.

### Middle Class

    Inherits all properties and methods from the School class.
    
    No additional properties or methods.

### High Class

    Inherits all properties and methods from the School class.
    
    Additional Property:
        sportsTeams (array of strings): Lists the sports teams available at the school.


## Usage
```
    Create instances of Primary, Middle, and High schools to populate the catalogue.
    Utilize the .quickFacts() method to retrieve quick summaries.
    Use .pickSubstituteTeacher() to randomly select a substitute teacher.

```
### Example
```
const mySchool = new High("Lincoln High", "high", 1200, ["Basketball", "Soccer"]);
console.log(mySchool.quickFacts());
console.log(High.pickSubstituteTeacher());
```