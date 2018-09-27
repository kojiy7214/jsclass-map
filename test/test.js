let Map = require("../../jsclass-map");
let assert = require("assert");

describe('Map', function() {
  let map;
  let create_populate_map = function() {
    let it = [{
        key: "k1",
        value: 1
      },
      {
        key: "k2",
        value: 2
      }
    ];

    map = new Map(it);
  }

  describe('Create Map', function() {
    it('#constructor()', function() {
      map = new Map();
      assert.equal(map instanceof Map, true);
    })
    it('#constructor(map)', function() {
      create_populate_map();

      assert.equal(map.get("k1"), 1);
      assert.equal(map.get("k2"), 2);
    })
  })

  describe('Clear Map', function() {
    it('#clear()', function() {
      assert.equal(map.get("k1"), 1);
      assert.equal(map.get("k2"), 2);
      map.clear();
      assert.equal(map.get("k1"), undefined);
      assert.equal(map.get("k2"), undefined);
    })
  })

  describe('Check If Map Is Empty', function() {
    it('#isEmpty()', function() {
      assert.equal(map.isEmpty(), true);
      create_populate_map();
      assert.equal(map.isEmpty(), false);
    })
  })

  describe('Get Size of the Map', function() {
    it('#size()', function() {
      assert.equal(map.size(), 2);
      map.clear();
      assert.equal(map.size(), 0);
    })
  })

  describe('Set/Get Key & Value', function() {
    it('#set() & get()', function() {
      map.set("k1", 1);
      assert.equal(map.get("k1"), 1);
      assert.equal(map.size(), 1);

      map.set("k2", undefined);
      assert.equal(map.get("k2"), undefined);
      assert.equal(map.size(), 2);

      map.set("k3", null);
      assert.equal(map.get("k3"), null);
      assert.equal(map.size(), 3);

      map.set("k3", 3);
      assert.equal(map.get("k3"), 3);
      assert.equal(map.size(), 3);

    })
  })

  describe('Set All Elements from Iterator', function() {
    it('#setAll()', function() {
      let it = [{
          key: "k4",
          value: 4
        },
        {
          key: "k5",
          value: 5
        }
      ];

      map.setAll(it);
      assert.equal(map.get("k4"), 4);
      assert.equal(map.get("k5"), 5);
      assert.equal(map.size(), 5);
    })
  })

  describe('Remove Specified Key from Map', function() {
    it('#remove()', function() {
      map.remove("k5");
      assert.equal(map.get("k5"), undefined);
      assert.equal(map.size(), 4);

      // no exception shoulf be thrown
      map.remove("undefined");
    })
  })

  describe('Check If Key Exists', function() {
    it('#has()', function() {
      assert.equal(map.has("k5"), false);
      assert.equal(map.has("k4"), true);
    })
  })

  describe('Check If Value Exists', function() {
    it('#hasValue()', function() {
      assert.equal(map.hasValue(5), false);
      assert.equal(map.hasValue(4), true);
      assert.equal(map.hasValue("4"), false);
    })
  })

  describe('Get All Keys in Map', function() {
    it('#keys()', function() {
      let keys = map.keys();
      assert.equal(keys.indexOf("k1") !== -1, true);
      assert.equal(keys.indexOf("k2") !== -1, true);
      assert.equal(keys.indexOf("k3") !== -1, true);
      assert.equal(keys.indexOf("k4") !== -1, true);
      assert.equal(keys.indexOf("k5") !== -1, false);
      assert.equal(keys.length, 4);
    })
  })

  describe('Get Union of 2 Maps', function() {
    it('#or()', function() {
      let it = [{
          key: "k4",
          value: 14
        },
        {
          key: "k5",
          value: 15
        },
        {
          key: "k6",
          value: 16
        }
      ];

      let another_map = new Map(it);

      let union_map = map.or(another_map);

      assert.equal(union_map.size(), 6);
      assert.equal(union_map.get("k1") === 1, true);
      assert.equal(union_map.get("k2") === undefined, true);
      assert.equal(union_map.get("k3") === 3, true);
      assert.equal(union_map.get("k4") === 14, true);
      assert.equal(union_map.get("k5") === 15, true);
      assert.equal(union_map.get("k6") === 16, true);
    })
  })

  describe('Get Intersection of 2 Maps', function() {
    it('#and()', function() {
      let it = [{
          key: "k4",
          value: 14
        },
        {
          key: "k5",
          value: 15
        },
        {
          key: "k6",
          value: 16
        }
      ];

      let another_map = new Map(it);

      let intersect_map = map.and(another_map);

      assert.equal(intersect_map.size(), 1);
      assert.equal(intersect_map.get("k4") === 14, true);
    })
  })

  describe('Get Difference of 2 Maps', function() {
    it('#xor()', function() {
      let it = [{
          key: "k4",
          value: 14
        },
        {
          key: "k5",
          value: 15
        },
        {
          key: "k6",
          value: 16
        }
      ];

      let another_map = new Map(it);

      let diff_map = map.xor(another_map);

      assert.equal(diff_map.size(), 5);
      assert.equal(diff_map.has("k4"), false);

      assert.equal(diff_map.get("k1") === 1, true);
      assert.equal(diff_map.get("k2") === undefined, true);
      assert.equal(diff_map.get("k3") === 3, true);
      assert.equal(diff_map.get("k5") === 15, true);
      assert.equal(diff_map.get("k6") === 16, true);
    })
  })

  describe('Get Elements Which Has Same Key but Different Value', function() {
    it('#diffVal()', function() {
      let it = [{
          key: "k2",
          value: 12
        }, {
          key: "k3",
          value: 3
        }, {
          key: "k4",
          value: 14
        },
        {
          key: "k5",
          value: 15
        },
        {
          key: "k6",
          value: 16
        }
      ];

      let another_map = new Map(it);

      let diff_map = map.diffVal(another_map);

      assert.equal(diff_map.size(), 2);
      assert.equal(diff_map.has("k2"), true);
      assert.equal(diff_map.has("k4"), true);
    })
  })
})