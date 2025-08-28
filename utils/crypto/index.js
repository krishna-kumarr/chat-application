import CryptoJS from "crypto-js";

const SECRET = process.env.NEXT_PUBLIC_CRYPTO_SECRET;

export async function decryptData(encrypted) {
    try {
        const bytes = CryptoJS.AES.decrypt(encrypted, SECRET);
        if (!bytes?.sigBytes) return null;
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    } catch (err) {
        return null; // Not decryptable
    }
}

export async function encryptData(data) {
    try {
        const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), SECRET);
        return encrypted.toString();
    } catch (err) {
        return null; // Not encryptable
    }
}
