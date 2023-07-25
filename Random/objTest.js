// This is becuse I started this repo after I had already past the object section.

const aQ=(a,b,c)=>
{
 obj={thing:b,gross_weight:c, get name(){return this._name}, set name(nameIn){this._name=nameIn}};
 obj.name=a;
 return obj;
}

console.log(aQ("AP628530MQ","Metal Cabinet",300))

