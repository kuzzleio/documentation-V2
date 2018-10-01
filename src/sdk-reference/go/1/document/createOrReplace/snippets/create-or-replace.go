response, err := kuzzle.Document.CreateOrReplace("nyc-open-data", "yellow-taxi", "some-id", json.RawMessage(`{"licence": "valid"}`), nil)

if err != nil {
  log.Fatal(err)
} else {
  fmt.Println(string(response))
  /*
  {
    "_index": "nyc-open-data",
    "_type": "yellow-taxi",
    "_id": "some-id",
    "_version": 1,
    "result": "created",
    "_shards": {
      "total": 2,
      "successful": 1,
      "failed": 0
    },
    "created": true,
    "_source": {
      "licence": "valid",
      "_kuzzle_info": {
        "author": "-1",
        "createdAt": 1537445737667,
        "updatedAt": null,
        "updater": null,
        "active": true,
        "deletedAt": null
      }
    },
    "_meta": {
      "author": "-1",
      "createdAt": 1537445737667,
      "updatedAt": null,
      "updater": null,
      "active": true,
      "deletedAt": null
    }
  }
  */
  fmt.Println("Success")
}

