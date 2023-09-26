let raceNumber = Math.floor(Math.random() * 1000);
const isEarly=true;
const runnerAge=35;
if(runnerAge>=18 && isEarly==true){
  raceNumber+=1000;
}
//console.log(raceNumber);
if(runnerAge>18&&isEarly==true){
  console.log(`You will race at 9:30 am, ${raceNumber}`)
}else if(runnerAge>18&&isEarly==false){
  console.log("Late adults will run at 11:00am")
}else if(runnerAge<18){
  console.log(`Runner ${raceNumber}, Youth registrants will run at 12:30 PM (regardless of registration)`);
} else{
  console.log(`Runner ${raceNumber} Please see registration desk immediately!`);
}
