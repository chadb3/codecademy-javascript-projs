let readMore = document.getElementById('read-more');
let moreInfo = document.getElementById('more-info');

// Write your code here:
/*First, create a function called showInfo() 
which we will use as the event handler function 
to make the hidden element containing the additional
informational text (moreInfo) appear 
when the 'click' event fires.*/
let showInfo=()=>{
  moreInfo.style.display="block";
}
readMore.addEventListener('click',showInfo);
