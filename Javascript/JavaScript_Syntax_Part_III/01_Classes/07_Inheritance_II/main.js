class HospitalEmployee{
  constructor(name){
	this._name=name;
	//this._insurance=insurance;
	this._remainingVacationDays=20;
  }
  get name(){
   return this._name;
  }

  get remainingVacationDays(){
   return this._remainingVacationDays;
  }
 
  takeVacationDays(daysOff){
   this._remainingVacationDays=this._remainingVacationDays-daysOff;
  }

}


