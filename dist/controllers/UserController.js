"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserController {
    constructor() { }
    static async open(request, response) {
        response.json({
            message: 'Parabéns, você foi autenticado!',
        });
    }
}
exports.default = UserController;
