class School {
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
  
    get name() {
      return this._name;
    }
  
    get level() {
      return this._level;
    }
  
    get numberOfStudents() {
      return this._numberOfStudents;
    }
  
    set numberOfStudents(value) {
      if (typeof this._numberOfStudents === 'number') {
        this._numberOfStudents = value;
    } else {
        return 'Invalid input: numberOfStudents must be set to a Number.';
      }
    }
  
    quickFacts() {
      console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level`);
    }
  
    static pickSubstituteTeacher(substituteTeachers) {
      const randInt = Math.floor(substituteTeachers.length * Math.random());
      return substituteTeachers[randInt];
    }
  }
  
  class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
      super(name, "primary", numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
  
    get pickupPolicy() {
      return this._pickupPolicy;
    }
  }
  
  class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
      super(name, "high", numberOfStudents);
      this._sportsTeams = sportsTeams;
    }
  
    get sportsTeams() {
      return this._sportsTeams;
    }
  }
  
  const newlands = new PrimarySchool("Newlands", 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
  
  newlands.quickFacts();
  
  const sub = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
  const ellington = new HighSchool("Ellington", 650, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(ellington.sportsTeams);
    