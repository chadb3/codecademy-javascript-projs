class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

//start here

class Nurse extends HospitalEmployee{
	// we only need name and certifications
	// name will be passed to the parent class "HospitalEmployee"
	// and certifications will be set here.
	// we don't have to worry about setting "_remainingVacationDays"
	// as it is set in the parent class
	constructor(name, certifications){
	 super(name);
	 this._certifications=certifications;
	}
}
const nurseOlynyk = new Nurse("Olynyk",['Trauma','Pediatrics']);

const g=new Nurse("Eric","LPN");
// testing to see if this works. And it did.
console.log(g.remainingVacationDays);
