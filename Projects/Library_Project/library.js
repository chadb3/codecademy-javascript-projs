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
getAverageRating()
{
 const sum = this._ratings.reduce((a,c)=>a+c,0);
 //console.log(sum);
 //console.log(this._ratings.length);
 let ret_val = 0;
 if(this._ratings.length>0){
    ret_val=sum/this._ratings.length;
  }else{
   ret_val=0;
   }
 return ret_val;
}
addRating(rating)
{
 this.ratings.push(rating);
}

}

class Book extends Media
{
 constructor(title,author,pages){
  super(title);
  this._author=author;
  this._pages=pages;
 }
 get author()
 {
  return this._author;
 }
 get pages()
 {
  return this._pages;
 }
 set pages(pageCount)
 {
  this._pages=pageCount;
 }
 set author(authorIn)
 {
  this._author=authorIn;
 }

}

const newMedia = new Media("Cheese");
console.log(`${newMedia.title}\nIs Checked Out: ${newMedia.isCheckedOut}`);
newMedia.isCheckedOut=true;
console.log(`${newMedia.title}\nIs Checked Out: ${newMedia.isCheckedOut}`);
newMedia.isCheckedOut="asdf";
newMedia.toggleCheckedOutStatus();
console.log(newMedia.isCheckedOut);
newMedia.addRating(10);
newMedia.addRating(11);
console.log(`rating: ${newMedia.getAverageRating()}`);
