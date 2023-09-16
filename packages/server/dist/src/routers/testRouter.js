"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _express = /*#__PURE__*/ _interop_require_default(require("express"));
const _util2 = require("@webapp/shared/util2");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const router = _express.default.Router();
router.use('/test', (req, res)=>{
    const testSum = (0, _util2.testFunction)(1, 2);
    console.log('test sum', testSum);
    res.sendStatus(200);
});
const _default = router;
