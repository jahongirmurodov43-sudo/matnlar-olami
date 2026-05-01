const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const publicDir = path.join(root, "public");

fs.rmSync(publicDir, { recursive: true, force: true });
fs.mkdirSync(publicDir, { recursive: true });

fs.copyFileSync(path.join(root, "index.html"), path.join(publicDir, "index.html"));
fs.writeFileSync(path.join(publicDir, "_redirects"), "/* /index.html 200\n");

console.log("Static site copied to public/");
