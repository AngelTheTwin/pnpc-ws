const bcrypt = require("bcrypt");
const saltRounds = 10;

const hashPassword = (password: String): Promise<string> => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(saltRounds, function (err: Error, salt: any) {
            bcrypt.hash(password, salt, function (err: Error, hash: string) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(hash);
                return;
            });
        });
    });
};

const verifyPassword = (password: string, hash: String): Promise<Boolean> => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hash, function (err: Error, result: Boolean) {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
            return;
        });
    });
};

export const passwordEncription = {
    hashPassword,
    verifyPassword,
};
