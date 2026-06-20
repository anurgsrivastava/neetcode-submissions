class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        let cS = [];
        let tC = '';
        if (s.length % 2 !== 0 ) {
            return false;
        }
        for(let b of s) {
            switch(b) {
                case '(':
                case '{':
                case '[':
                    cS.push(b);
                    break;
                case ')':
                    tC = cS.length && cS.pop();
                    if(tC !== '(') {
                        return false;
                    }
                    break;
                case '}':
                    tC = cS.length && cS.pop();
                    if(tC !== '{') {
                        return false;
                    }
                    break;
                case ']': 
                    tC = cS.length && cS.pop();
                    // console.log(']', cS.length, tC)
                    if(tC !== '[') {
                        return false;
                    }
            }
        }
        return cS.length ? false : true;
    }
}
