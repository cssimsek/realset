const RealSet = require("./realset.js");

(async () => {
    const realSetInstance1 = new RealSet([]);
    const realSetInstance2 = new RealSet([]);
    for(let i=0;i<10;i+=1){
        if(i<=5)realSetInstance1.add(i);
        if(i>=5)realSetInstance2.add(i);
    }
    let intersectSet = realSetInstance1.intersect(realSetInstance2);
    let unionSet = realSetInstance1.union(realSetInstance2);
    return {
        "Intersect": Array.from(intersectSet.values()),
        "Union": Array.from(unionSet.values())
    }
})().then(data => {
    for(let key in data){
        console.log(`${key}: ${data[key]}`);
    }
});
  