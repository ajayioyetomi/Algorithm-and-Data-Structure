let genArray = (length,min,max) =>{
    let arr = [];
    let i = 0;
    for(i = 0;i<length;i++){
        arr.push(Math.floor(Math.random() * max-min+1)+min)
    }
    return arr;
}

const merge_sort = (arr) =>{

    const sort_arr = (leftArr,rightArr) =>{
        let i;
        let len = rightArr.length;
        if(len > 0){
            for(i = 0;i < len;i++){
                leftArr.push(rightArr[i])
                let len2 = leftArr.length -1;
                for(j = len2;j>0;j-- ){
                    if(leftArr[j] < leftArr[j-1]){
                        [leftArr[j],leftArr[j-1]] = [leftArr[j-1],leftArr[j]];
                    }
                    else{
                        break;
                    }
                }
                
            } 
            return leftArr;
        }
        return leftArr;
        

    }

    const recursiveCall = (array) =>{
        if(array.length <= 1){
            return array;
        }
        let mid = Math.floor(array.length/2);
        let leftArr = array.slice(0,mid);
        let rightArr = array.slice(mid);
        return sort_arr(recursiveCall(leftArr),recursiveCall(rightArr));
    }

    return recursiveCall(arr);

}

//let result = merge_sort(genArray(20,1,300))
//console.log(result);

const solution = (s)=>{
    
    let len = s.length;
    let obj = {};
    s = s.sort((a,b)=>a-b);
    console.log(s,'new s')
    for(let i = 0;i<len-1;i++){
       obj[s[i]-s[i+1]] = (obj[s[i]-s[i+1]] ||0)+1;
    }
    let result = Object.values(obj).sort((a,b)=>a-b).at(-1);
    console.log(result+1);
}

solution([50, 3, 10, 7, 40, 80]);
