try {
  await kuzzle.ms.set('foo', 'bar');

  // Prints: 1
  console.log(await kuzzle.ms.exists(['foo']));

  await kuzzle.ms.expireat('foo', 1318425955);

  // Prints: 0
  // RIP  :-(
  console.log(await kuzzle.ms.exists(['foo']));

  console.log('Success');
} catch (error) {
  console.error(error.message);
}
