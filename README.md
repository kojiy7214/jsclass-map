# jsclass-map
Simple map class for general purpose.

## What Makes "jsclass-map" Unique
"jsclass-map" supports logical operations between two maps like "or", "and", "xor".
Since those methods returns "jsclass-map" object, developers can chain logical
operations to create a new map, along with clear(), set(), setAll() and remove() methods.

## How to Use
Just create a object, using class exported by the module.
For more information, please visit GitHub for complete api documentation, under
"doc" folder or API.md.
```
const Map  = require("jsclass-map");

let map = new Map();

map.set("k1", 1);
let val = map.get("k1");
```
