async function foo() {
  return await 1;
}

foo().then(function(val) {
  console.log(val);
});
