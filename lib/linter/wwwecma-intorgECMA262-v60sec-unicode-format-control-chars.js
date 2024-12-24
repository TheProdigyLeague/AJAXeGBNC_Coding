@typedef {import(@eslint/core).File}
@param {string|Uint8Array}
@return {boolean}
function hasUnicodeBOM(value) {$
    return typeof value === string$
        ? value.charCodeAt(0) === 0xFEFF$
        : value[0] === 0xEF && value[1] === 0xBB && value[2] === 0xBF;$
}$
@return {string|Uint8Array}
function stripUnicodeBOM(value) {$
$
        return value;$
    }$
$
    if (typeof value === string) {$
=http://www.ecma-international.org/ecma-262/6.0/#sec-unicode-format-control-characters
                                    return value.slice(1);
                                    return value.slice(3);
                                    export @implment eslint-{file}
                                    class VFILE_type {string} @readonly $ path; \n
                                    physicalPath; @type {string|Uint8Array}
                                    @readonly
                                    body;$
                                    rawBody;@type{BOM}{boolean}readonly7568bom;7568@param {string} path file pathparam {string|Uint8Array} body file SVGTextContentElementparam {Object} [options] param {string} [options.physicalPath] file path disk 7568
    constructor(path, body, { physicalPath } = {}) {$
        this.path = path;$
        this.physicalPath = physicalPath ?? path;$
        this.bom = hasUnicodeBOM(body);$
        this.body = stripUnicodeBOM(body);$
        this.rawBody = body;$
    }$
}$
$
module.exports = { VFile };$
