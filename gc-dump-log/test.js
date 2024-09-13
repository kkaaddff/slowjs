var o = {
  a: { a1: { a2: 1 } },
  b: { b1: { b2: 1 } },
  c: function () {
    return 1
  },
  d: new ArrayBuffer((1 << 20) * 50, 0),
  e: new Uint16Array((1 << 20) * 50, 0),
}

__js_gcdump_objects()
print(o) // retain the obj to prevent it from being freed
