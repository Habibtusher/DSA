const join = function (arr1, arr2) {
  const ob = {};
  for (const i of arr1) {
      ob[i.id] = i;
  }
  for (const i of arr2) {
      ob[i.id] = ob[i.id] ? ob[i.id] = { ...ob[i.id], ...i } : ob[i.id] = i;
  }
  return Object.values(ob);
};
console.log(
  join(
    [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }],
    [{ id: 1, b: { c: 84 }, v: [1, 3] }]
  )
);

const obj = {
  id: 1,
  value:"ewew"
}
const obj2 = {
  id: 2,
  name:"habib",
  value:"yyy"
}
console.log({...obj, ...obj2});