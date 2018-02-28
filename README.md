# RealSet extends Set

RealSet is a class that extends the standard Set implementation in JavaScript with intersect and union methods.

## Getting Started

The file realset.js contains example usage.

### Example usage

```
const realSetInstance1 = new RealSet([]);
const realSetInstance2 = new RealSet([]);
for(let i=0;i<10;i+=1){
    if(i<=5)realSetInstance1.add(i);
    if(i>=5)realSetInstance2.add(i);
}
let intersectSet = realSetInstance1.intersect(realSetInstance2);
let unionSet = realSetInstance1.union(realSetInstance2);

console.log(`Intersect: ${Array.from(intersectSet.values())}`);
//Logs Intersect: 5

console.log(`Union: ${Array.from(unionSet.values())}`);
//Logs Union: 0,1,2,3,4,5,6,7,8,9

//Update instance following mutation in parents
realSetInstance1.add(6);
intersectSet=intersectSet.refresh();
console.log(`Intersect: ${Array.from(intersectSet.values())}`);
//Logs Intersect: 5,6

```

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE.md](LICENSE.md) file for details
