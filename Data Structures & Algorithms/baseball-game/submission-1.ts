class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        let opArr = [];
        let currentTop = -1;
        for(let i = 0; i < operations.length; i++) {
            switch (operations[i]) {
                case '+':
                    // console.log('+ before', opArr, currentTop, Number(opArr[currentTop]), Number(opArr[currentTop - 1]));
                    if( currentTop - 1 >= 0) {
                        opArr.push(Number(opArr[currentTop]) + Number(opArr[currentTop - 1]));
                    }
                    currentTop += 1;
                    // console.log('+ after', opArr, currentTop);
                    break;
                case 'D':
                    if( currentTop >= 0) {
                        opArr.push(Number(opArr[currentTop]) * 2);
                    }
                    currentTop += 1;
                    // console.log('D', opArr, currentTop);
                    break;
                case 'C':
                    opArr.pop();
                    currentTop -= 1;
                    // console.log('C', opArr, currentTop);
                    break;
                default:
                    opArr.push(Number(operations[i]));
                    currentTop += 1;
                    // console.log('default', opArr, currentTop);
                    break;
            }
        }
        let sum = 0;
        for(let o of opArr) {
            sum += o;
        }
        return sum;
    }
}
