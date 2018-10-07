## Modules

<dl>
<dt><a href="#module_jsclass-map">jsclass-map</a></dt>
<dd><p>Simple map class, which support logical operator.</p>
</dd>
</dl>

## Classes

<dl>
<dt><a href="#Map">Map</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#constructor">constructor(it)</a></dt>
<dd><p>Creates map object.  You may pass itereator to initialize map at creation.
Iterator should contain objects with &quot;key&quot; and &quot;value&quot; property.</p>
</dd>
</dl>

<a name="module_jsclass-map"></a>

## jsclass-map
Simple map class, which support logical operator.

<a name="Map"></a>

## Map
**Kind**: global class  

* [Map](#Map)
    * [.clear()](#Map+clear) ⇒ [<code>Map</code>](#Map)
    * [.isEmpty()](#Map+isEmpty) ⇒ <code>Boolean</code>
    * [.size()](#Map+size) ⇒ <code>Number</code>
    * [.set(key, val)](#Map+set) ⇒ [<code>Map</code>](#Map)
    * [.setAll(it)](#Map+setAll) ⇒ [<code>Map</code>](#Map)
    * [.get(key)](#Map+get) ⇒ <code>any</code>
    * [.remove(key)](#Map+remove) ⇒ [<code>Map</code>](#Map)
    * [.has(key)](#Map+has) ⇒ <code>Boolean</code>
    * [.hasValue(v)](#Map+hasValue) ⇒ <code>Boolean</code>
    * [.keys()](#Map+keys) ⇒ <code>Array</code>
    * [.or(map)](#Map+or) ⇒ [<code>Map</code>](#Map)
    * [.and(map)](#Map+and) ⇒ [<code>Map</code>](#Map)
    * [.xor(map)](#Map+xor) ⇒ [<code>Map</code>](#Map)
    * [.diffVal(map)](#Map+diffVal) ⇒ [<code>Map</code>](#Map)

<a name="Map+clear"></a>

### map.clear() ⇒ [<code>Map</code>](#Map)
Remove all elements.

**Kind**: instance method of [<code>Map</code>](#Map)  
**Returns**: [<code>Map</code>](#Map) - This Map  
<a name="Map+isEmpty"></a>

### map.isEmpty() ⇒ <code>Boolean</code>
Check if the map has no element.

**Kind**: instance method of [<code>Map</code>](#Map)  
**Returns**: <code>Boolean</code> - If map has no element, then true.  
<a name="Map+size"></a>

### map.size() ⇒ <code>Number</code>
Count elements in map.

**Kind**: instance method of [<code>Map</code>](#Map)  
**Returns**: <code>Number</code> - Count of elements in map.  
<a name="Map+set"></a>

### map.set(key, val) ⇒ [<code>Map</code>](#Map)
Set element to map.  If the map already has a same key, old value will be
over written by aruguments value.
Key may take any object, but null and undefined.

**Kind**: instance method of [<code>Map</code>](#Map)  
**Returns**: [<code>Map</code>](#Map) - This Map  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>any</code> | Key of the element to set. |
| val | <code>any</code> | Value of th element to set. |

<a name="Map+setAll"></a>

### map.setAll(it) ⇒ [<code>Map</code>](#Map)
Set all elemetns in given iterator to map.  All elements in the Iterator
should have "key" and "value" as property.

**Kind**: instance method of [<code>Map</code>](#Map)  
**Returns**: [<code>Map</code>](#Map) - This Map  

| Param | Type | Description |
| --- | --- | --- |
| it | <code>iterator</code> | Iteratable object with valid elements. |

<a name="Map+get"></a>

### map.get(key) ⇒ <code>any</code>
Returns the value associated with key.  If key is not present in map,
then undefined will be returned.

**Kind**: instance method of [<code>Map</code>](#Map)  
**Returns**: <code>any</code> - Associated value.  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>any</code> | Key of an element tobe located. |

<a name="Map+remove"></a>

### map.remove(key) ⇒ [<code>Map</code>](#Map)
Remove element, with given key.  If key is not present in map,
then nothing happens.

**Kind**: instance method of [<code>Map</code>](#Map)  
**Returns**: [<code>Map</code>](#Map) - This Map  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>any</code> | Key of an element to remove. |

<a name="Map+has"></a>

### map.has(key) ⇒ <code>Boolean</code>
Check if given key is present in map

**Kind**: instance method of [<code>Map</code>](#Map)  
**Returns**: <code>Boolean</code> - If present, then true.  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>any</code> | Key to check. |

<a name="Map+hasValue"></a>

### map.hasValue(v) ⇒ <code>Boolean</code>
Check if given value is present in map

**Kind**: instance method of [<code>Map</code>](#Map)  
**Returns**: <code>Boolean</code> - If present, then true.  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>any</code> | value to check. |

<a name="Map+keys"></a>

### map.keys() ⇒ <code>Array</code>
Returns an array of key, contains in map.

**Kind**: instance method of [<code>Map</code>](#Map)  
**Returns**: <code>Array</code> - Array of keys.  
<a name="Map+or"></a>

### map.or(map) ⇒ [<code>Map</code>](#Map)
Merge two maps and create a new map.  When both maps have elements with
same key, vallues are set to match argument map.

**Kind**: instance method of [<code>Map</code>](#Map)  
**Returns**: [<code>Map</code>](#Map) - Result map.  

| Param | Type | Description |
| --- | --- | --- |
| map | [<code>Map</code>](#Map) | Map to operate. |

<a name="Map+and"></a>

### map.and(map) ⇒ [<code>Map</code>](#Map)
Extract common elements between original map and argument maps.
Values are set to match argument map.

**Kind**: instance method of [<code>Map</code>](#Map)  
**Returns**: [<code>Map</code>](#Map) - Result map.  

| Param | Type | Description |
| --- | --- | --- |
| map | [<code>Map</code>](#Map) | Map to operate. |

<a name="Map+xor"></a>

### map.xor(map) ⇒ [<code>Map</code>](#Map)
Merge elements with unique keys between original and argument map.
Result Map will be exactly the same map as, sustarcting the intersection
from the union of original and argument maps.

**Kind**: instance method of [<code>Map</code>](#Map)  
**Returns**: [<code>Map</code>](#Map) - Result map.  

| Param | Type | Description |
| --- | --- | --- |
| map | [<code>Map</code>](#Map) | Map to operate. |

<a name="Map+diffVal"></a>

### map.diffVal(map) ⇒ [<code>Map</code>](#Map)
Extract elements between twu maps, which have common key but different values.

**Kind**: instance method of [<code>Map</code>](#Map)  
**Returns**: [<code>Map</code>](#Map) - Result map.  

| Param | Type | Description |
| --- | --- | --- |
| map | [<code>Map</code>](#Map) | Map to compare. |

<a name="constructor"></a>

## constructor(it)
Creates map object.  You may pass itereator to initialize map at creation.
Iterator should contain objects with "key" and "value" property.

**Kind**: global function  

| Param | Type |
| --- | --- |
| it | <code>Iterator</code> | 

