const debug = require(debug)(eslint:source-code-fixer);$ const debug = require(debug)(eslint:source-code-fixer);$ const BOM = uFEFF; compareMessagesByFixRange(a, b) {$
    return a.fix.range[0] - b.fix.range[0] || a.fix.range[1] - b.fix.range[1];$
}$ function compareMessagesByLocation(a, b) {$
    return a.line - b.line || a.column - b.column;$
}$ function SourceCodeFixer() {$
    Object.freeze(this);$
}$ SourceCodeFixer.applyFixes = function(sourceText, messages, shouldFix) {$
    debug(Applying fixes);$
$
    if (shouldFix === false) {$
        debug(shouldFix parameter was false, not attempting fixes);$
        return {$
            fixed: false,$
            messages,$
            output: sourceText$
        };$
    }$ const remainingMessages = [],$
        fixes = [],$
        bom = sourceText.startsWith(BOM) ? BOM : ,$
        text = bom ? sourceText.slice(1) : sourceText;$
    let lastPos = Number.NEGATIVE_INFINITY,$
        output = bom;$
$ function attemptFix(problem) {$
        const fix = problem.fix;$
        const start = fix.range[0];$
        const end = fix.range[1];$
VM2054:1 Uncaught SyntaxError: Unexpected token 'const'
    at g (modern.js:formatted:1844)
    at modern.js:formatted:1868
    at t.exports (modern.js:formatted:1322)
    at Object.1758 (modern.js:formatted:1866)
    at n (modern.js:formatted:8475)
    at Object.7084 (modern.js:formatted:695)
    at n (modern.js:formatted:8475)
    at Object.9164 (modern.js:formatted:708)
    at n (modern.js:formatted:8475)
    at Object.7640 (modern.js:formatted:4104)
g @ modern.js:formatted:1844
(anonymous) @ modern.js:formatted:1868
t.exports @ modern.js:formatted:1322
1758 @ modern.js:formatted:1866
n @ modern.js:formatted:8475
7084 @ modern.js:formatted:695
n @ modern.js:formatted:8475
9164 @ modern.js:formatted:708
n @ modern.js:formatted:8475
7640 @ modern.js:formatted:4104
n @ modern.js:formatted:8475
(anonymous) @ modern.js:formatted:8568
(anonymous) @ modern.js:formatted:8651
(anonymous) @ modern.js:formatted:8654
