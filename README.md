# jsclass-map
Simple map class for general purpose.

## What Makes "jsclass-map" Unique
"jsclass-map" supports logical operations between two maps like "or", "and", "xor".
Since those methods returns "jsclass-map" object, developers can chain logical
operations to create a new map.

## How to Use
Just create a object, using class exported by the module.
For more information, please visit GitHub for complete api documentation, under
"doc" folder.
```
let Map  = requires("jsclass-map");

let map = new Map();

map.set("k1", 1);
map.get("k1");
```
