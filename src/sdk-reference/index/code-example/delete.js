kuzzle
  .index
  .delete('nyc-open-data')
  .then(result => {
    console.log('index deleted')
  })
  .catch(error => {
    console.error(error.message)
  });
