"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
class User {
    constructor() {
        this.user = [];
    }
    async createUser(user) {
        const pass = await this.hashPassword(user.password);
        this.user.push({
            id: this.user.length + 1,
            username: user.username,
            password: pass,
        });
        console.log(pass);
    }
    findUserByUsername(username) {
        return this.user.find((user) => user.username == username);
    }
    async hashPassword(plainTextPassword) {
        const saltRounds = 10;
        try {
            const salt = await bcrypt_1.default.genSalt(saltRounds);
            const hashedPassword = await bcrypt_1.default.hash(plainTextPassword, salt);
            return hashedPassword;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
}
exports.default = User;
