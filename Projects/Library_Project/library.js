//Building a Library!
class Media{
constructor(title){
this._title=title;
this._isCheckedOut=false;
this._ratings=[];
}
get title(){
 return this._title;
}
get isCheckedOut(){
 return this._isCheckedOut;
}
get ratings(){
 return this._ratings;
}
set isCheckedOut(newVal){
if(typeof(newVal)==='boolean')
 {
  this._isCheckedOut=newVal;
 }else{
  console.log("Please use: True or False");
  console.log(`current value: ${this._isCheckedOut}`);  
  }
}
toggleCheckedOutStatus(){
 if(this._isCheckedOut){
  this._isCheckedOut=false;
}else{this._isCheckedOut=true;}
}
}

const newMedia = new Media("Cheese");
console.log(`${newMedia.title}\nIs Checked Out: ${newMedia.isCheckedOut}`);
newMedia.isCheckedOut=true;
console.log(`${newMedia.title}\nIs Checked Out: ${newMedia.isCheckedOut}`);
newMedia.isCheckedOut="asdf";
newMedia.toggleCheckedOutStatus();
console.log(newMedia.isCheckedOut);
