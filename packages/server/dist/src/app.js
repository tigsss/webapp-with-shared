"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _express = /*#__PURE__*/ _interop_require_default(require("express"));
const _dotenv = /*#__PURE__*/ _interop_require_default(require("dotenv"));
const _testRouter = /*#__PURE__*/ _interop_require_default(require("./routers/testRouter"));
const _util2 = require("@webapp/shared/util2");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
_dotenv.default.config();
const app = (0, _express.default)();
const port = process.env.PORT ?? 8000;
app.use('/first', _testRouter.default); // Mount the router as middleware at path /first
const testSum2 = (0, _util2.testFunction)(1, 2);
console.log('Check imports from shared are working properly', testSum2);
app.get('/', (req, res)=>{
    const testSum = (0, _util2.testFunction)(1, 2);
    res.send(`Express + TypeScript with hot refresh pain: test sum ${testSum}`);
});
app.listen(port, ()=>{
    console.log(`⚡️ [server]: Server is running at http://localhost:${port}`);
});
