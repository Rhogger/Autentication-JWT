"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AuthController_1 = __importDefault(require("../controllers/AuthController"));
const TokenMiddleware_1 = __importDefault(require("../middlewares/TokenMiddleware"));
const UserController_1 = __importDefault(require("../controllers/UserController"));
const router = express_1.default.Router();
exports.default = router;
router.post('/signin', AuthController_1.default.signin);
router.post('/signup', AuthController_1.default.signup);
router.get('/protected', TokenMiddleware_1.default.authenticate, UserController_1.default.open);
