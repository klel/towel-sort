
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(!matrix)
        return [];
        
    let r = matrix.reduce((acc, curr, i) => {
        if(Array.isArray(curr)){
            curr = i % 2 !== 0 ? curr.reverse() : curr;
            acc.push(...curr);
        }
        else
            acc.push(curr);
        return acc;
    }, []);

    
    return r;
}
