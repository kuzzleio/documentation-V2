
// Using callbacks (NodeJS or Web Browser)
kuzzle.memoryStorage.zrange('key', 0, -1, function (err, members) {
  // callback called once the action has completed
});

// Using promises (NodeJS only)
kuzzle.memoryStorage.zrangePromise('key', 0, -1)
  .then(members => {
    // resolved once the action has completed
  });
