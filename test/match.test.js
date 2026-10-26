const src = require("fs").readFileSync(require("path").join(__dirname, "../public/index.html"), "utf8").split("// MATCH-START")[1].split("// MATCH-END")[0];
eval(src + `
const assert = require("assert");
assert(isMatch("sweet caroline", "Sweet Caroline"));
assert(isMatch("Sweet Carolin", "Sweet Caroline"));
assert(isMatch("sweat caroline", "Sweet Caroline"));
assert(isMatch("sweetcaroline!", "Sweet Caroline"));
assert(!isMatch("caroline", "Sweet Caroline"));
assert(!isMatch("swede carrot lime", "Sweet Caroline"));
assert(isMatch("living on a prayer", "Livin' on a Prayer|Living on a Prayer"));
assert(isMatch("mr brightside", "Mr. Brightside|Mister Brightside"));
assert(isMatch("bohemian rapsody", "Bohemian Rhapsody"));
assert(isMatch("halo", "Halo") && isMatch("hallo", "Halo") && !isMatch("hey", "Halo"));
assert(isMatch("beyonce halo".slice(7), "Halo"));
assert(!isMatch("", "Halo"));
assert.strictEqual(points(0), 1000); assert.strictEqual(points(7500), 750); assert.strictEqual(points(15000), 500); assert.strictEqual(points(90000), 500); assert.strictEqual(points(-5), 1000);
console.log("ok");`);
