try {
  await kuzzle.ms.zadd();
  console.log('Success');
} catch (error) {
  console.error(error.message);
}
