// ·d, ·f
const [d, { e: f } = { e: 2 }] = [];

// ·i, = ·{}
const { h: { i = 1 } = {} } = {};

/* EXPECT(d):
        col_num 8
        put_var_init d
*/

/* EXPECT(f):
        col_num 16
        put_var_init f
*/

/* EXPECT(i):
        col_num 14
        put_var_init i
*/
