class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        let opArr = [];
        for(let i = 0; i < operations.length; i++) {
            switch (operations[i]) {
                case '+':
                    // console.log('+ before', opArr, currentTop, Number(opArr[currentTop]), Number(opArr[currentTop - 1]));
                    if(opArr.length) {
                        opArr.push(Number(opArr[opArr.length - 1]) + Number(opArr[opArr.length - 2]));
                    }
                    // console.log('+ after', opArr, currentTop);
                    break;
                case 'D':
                    if( opArr.length >= 0) {
                        opArr.push(Number(opArr[opArr.length - 1]) * 2);
                    }
                    // console.log('D', opArr, currentTop);
                    break;
                case 'C':
                    opArr.pop();
                    // console.log('C', opArr, currentTop);
                    break;
                default:
                    opArr.push(Number(operations[i]));
                    // console.log('default', opArr, currentTop);
                    break;
            }
        }
        return opArr.length ? opArr.reduce((a, b) => a + b) : 0;
    }
}
