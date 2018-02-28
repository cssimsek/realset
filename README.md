# RealSet extends Set

RealSet is a class that extends the standard Set implementation in JavaScript with intersect and union methods.

## Getting Started

```javascript
npm i realset-implementation
or
yarn add realset-implementation

```

### Example usage

```javascript
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
## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details
