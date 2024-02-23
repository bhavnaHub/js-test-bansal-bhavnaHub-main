/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
        const stack = [];
        const bracketPairs = {
            '(': ')',
            '[': ']',
            '{': '}'
        };
    
        for (let char of s) {
            if (bracketPairs[char]) {
                
                stack.push(char);
            } else {
            
                const lastBracket = stack.pop();

                if (bracketPairs[lastBracket] !== char) {
                    return false;
                }
            }
        }
        return stack.length === 0;
};

module.exports = { isValid };


