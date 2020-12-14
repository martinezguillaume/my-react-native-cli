"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = exports.alias = exports.description = void 0;
var fontello = require("./fontello");
var configureEnv = require("./configure-env");
var scripts = {
    Fontello: fontello,
    'Configure env': configureEnv,
};
exports.description = 'List of scripts to manage react-native project easily';
exports.alias = ['s'];
exports.run = function (toolbox) { return __awaiter(void 0, void 0, void 0, function () {
    var prompt, script;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                prompt = toolbox.prompt;
                return [4 /*yield*/, prompt.ask({
                        type: 'select',
                        name: 'script',
                        choices: Object.keys(scripts),
                        message: 'Which script do you want to run 🤭',
                    })];
            case 1:
                script = (_a.sent()).script;
                scripts[script].run(toolbox);
                return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9zY3JpcHRzL3NjcmlwdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EscUNBQXNDO0FBQ3RDLDhDQUErQztBQUkvQyxJQUFNLE9BQU8sR0FBMEQ7SUFDckUsUUFBUSxFQUFFLFFBQVE7SUFDbEIsZUFBZSxFQUFFLFlBQVk7Q0FDOUIsQ0FBQTtBQUVZLFFBQUEsV0FBVyxHQUN0Qix1REFBdUQsQ0FBQTtBQUU1QyxRQUFBLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBRWIsUUFBQSxHQUFHLEdBQUcsVUFBTyxPQUF1Qjs7Ozs7Z0JBQ3ZDLE1BQU0sR0FBSyxPQUFPLE9BQVosQ0FBWTtnQkFFUCxxQkFBTSxNQUFNLENBQUMsR0FBRyxDQUFxQjt3QkFDdEQsSUFBSSxFQUFFLFFBQVE7d0JBQ2QsSUFBSSxFQUFFLFFBQVE7d0JBQ2QsT0FBTyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO3dCQUM3QixPQUFPLEVBQUUsb0NBQW9DO3FCQUM5QyxDQUFDLEVBQUE7O2dCQUxNLE1BQU0sR0FBSyxDQUFBLFNBS2pCLENBQUEsT0FMWTtnQkFPZCxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBOzs7O0tBQzdCLENBQUEifQ==