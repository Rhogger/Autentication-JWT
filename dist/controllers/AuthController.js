"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../models/User"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRETKEY_1 = require("../constants/SECRETKEY");
const bcrypt_1 = __importDefault(require("bcrypt"));
const user = new User_1.default();
class AuthController {
    static async signin(request, response) {
        const { username, password } = request.body;
        const userFinded = user.findUserByUsername(username);
        if (!userFinded) {
            response.json({
                message: 'Usuário não encontrado.',
            });
            return;
        }
        if (!(await bcrypt_1.default.compare(password, userFinded.password))) {
            response.json({
                message: 'Usuário ou senha incorreto.',
            });
            return;
        }
        const token = jsonwebtoken_1.default.sign({
            id: userFinded.id,
        }, SECRETKEY_1.SECRET_KEY, {
            expiresIn: '1h',
        });
        response.json({ token });
    }
    static signup(request, response) {
        const { username, password } = request.body;
        const userFinded = user.findUserByUsername(username);
        console.log(userFinded);
        if (userFinded) {
            response.json({
                message: 'Usuário existente.',
            });
            return;
        }
        user.createUser({
            username,
            password,
        });
        response.json({
            message: 'Usuário criado.',
        });
    }
}
exports.default = AuthController;
