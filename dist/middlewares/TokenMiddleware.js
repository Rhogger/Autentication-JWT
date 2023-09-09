"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRETKEY_1 = require("../constants/SECRETKEY");
class TokenMiddlewares {
    // private token
    static authenticate(request, response, next) {
        const { authorization } = request.headers;
        jsonwebtoken_1.default.verify(authorization, SECRETKEY_1.SECRET_KEY, (error, user) => {
            if (error) {
                response.status(401).json({
                    message: 'Erro, token inválido.',
                });
                return;
            }
            request.body.user = user;
            next();
        });
    }
}
exports.default = TokenMiddlewares;
