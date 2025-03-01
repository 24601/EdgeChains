const codeRegex = /```(.*)(\r\n|\r|\n)(?<code>[\w\W\n]+)(\r\n|\r|\n)```/;
const codeRegex2 = /```javascript(.*)(\r\n|\r|\n)(?<code>[\w\W\n]+)(\r\n|\r|\n)```/i;
const codeRegex3 = /```json(.*)(\r\n|\r|\n)(?<code>[\w\W\n]+)(\r\n|\r|\n)```/i;

export function preprocessJsonInput(text) {
    try {
        return text.match(codeRegex).groups.code.trim();
    } catch (e) {
        return text.trim();
    }
}

export function parseArr(text) {
    try {
        if (text.startsWith("[") && text.endsWith("]")) {
            return JSON.parse(text);
        }
        if (text.startsWith("```Javascript")) {
            return text.match(codeRegex2).groups.code.trim();
        }
        if (text.startsWith("```json")) {
            return text.match(codeRegex3).groups.code.trim();
        }
        if (text.startsWith("```")) {
            return text.match(codeRegex).groups.code.trim();
        }
        return text;
    } catch (e) {
        console.log({ text });
        throw new Error("No code found");
    }
}

export { parseSite } from "./page-parser.js";
