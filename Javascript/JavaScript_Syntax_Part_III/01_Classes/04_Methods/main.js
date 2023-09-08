class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  get name(){
    return this._name;
  }
  get department(){
    return this._department;
  }
  get remainingVacationDays(){
    return this._remainingVacationDays;
  }
  takeVacationDays(arg){
    this._remainingVacationDays=this._remainingVacationDays-arg;
  }
}

const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');
surgeonJackson.takeVacationDays(15);
console.log(`${surgeonJackson.name} + ${surgeonJackson.department} + ${surgeonJackson.remainingVacationDays}`);
