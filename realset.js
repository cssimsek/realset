module.exports =  class RealSet extends Set {
	constructor(){
		super();
	}
	union(setB){
        const unionSet = new RealSet([]);
        unionSet.refStore=[this,setB];
        unionSet.refresh = ()=>{
                return unionSet.refStore[0].union(unionSet.refStore[1]);
            }
        const [larger,smaller] = this.size>setB.size?[this,setB]:[setB,this];
        for(let itemX of larger){
            unionSet.add(itemX);
        }
        for(let itemY of smaller){
            if(!larger.has(itemY))unionSet.add(itemY);
        }
        return unionSet;
	}
  intersect(setB){
        const intersectSet = new RealSet([]);
        intersectSet.refStore=[this,setB];
        intersectSet.refresh = ()=>{
            return intersectSet.refStore[0].intersect(intersectSet.refStore[1]);
        }
        const [larger,smaller] = this.size>setB.size?[this,setB]:[setB,this];
        for(let item of smaller){
            if(larger.has(item))intersectSet.add(item);
        }
        return intersectSet;
	}
}


