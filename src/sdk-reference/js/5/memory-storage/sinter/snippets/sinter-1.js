
// Using callbacks (NodeJS or Web Browser)
kuzzle.memoryStorage.sinter(['key1', 'key2', '...'], function (err, values) {
  // callback called once the action has completed
});

// Using promises (NodeJS only)
kuzzle.memoryStorage.sinterPromise(['key1', 'key2', '...'])
  .then(values => {
    // resolved once the action has completed
  });
