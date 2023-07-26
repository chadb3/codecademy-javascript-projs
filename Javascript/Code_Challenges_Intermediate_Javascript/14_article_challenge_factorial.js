const factorial=(numIn)=>
{
	let sol=1;
	for(let i=numIn;i>0;i--)
	{
		sol*=i
	}
	//console.log(sol);
	return sol;

}
factorial(6);

