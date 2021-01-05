// 同步 variable.js ，请在node环境使用
const fs = require("fs");
const path = require("path");

console.log("开始转换less静态变量到 variable.js 文件");

const jsPath = path.resolve(__dirname, "variable.js");
const cssPath = path.resolve(__dirname, "../css/variable.less");

const lessFileStr = fs.readFileSync(cssPath, "utf8");

const lessList = lessFileStr.split("\n");
lessList.pop();

if (fs.existsSync(jsPath)) fs.unlinkSync(jsPath);

const writeList = lessList.map(val => {
  let [ori, first, second] = /^@(.*)+:(.*)+;/.exec(val);
  if (second.includes("#")) second = `'${second.trim()}'`;
  if (second.includes("rgb")) second = `'${second.trim()}'`;
  if (second.includes("px")) second = second.trim().replace("px", "");
  return `export const ${first.trim()} = ${second.trim()};\n`;
});

writeList.forEach(line => {
  fs.writeFileSync(jsPath, line, {
    flag: "a",
    encoding: "utf8"
  });
});
