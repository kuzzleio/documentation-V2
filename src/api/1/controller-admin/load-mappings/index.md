---
layout: full.html.hbs
title: loadMappings
---

# loadMappings

{{{since "1.6.6"}}}

Apply mappings to the storage layer.

**Notes:**

* The mapping can contain any number of index and collection configurations.
* Field definitions follow the [Elasticsearch](https://www.elastic.co/guide/en/elasticsearch/reference/5.6/mapping.html) mapping format.
* If an index or collection does not exist, it will be created automatically.
* Mappings are loaded sequentially, one index/collection pair at a time. If a failure occurs, Kuzzle immediately interrupts the sequence.
* Mappings can be replayed as you want, as long as they do not change in-between.

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/admin/_loadMappings[?refresh=wait_for]
Method: POST
Body:
```

```js
{
  "index": {
    "collection": {
      "properties": {
        "field1": {},
        "field2": {},
        "field...": {}
      }
    }
  }
}
```

### Other protocols


```js
{
  "controller": "admin",
  "action": "loadMappings",
  "body": <fixtures>
}
```

## Arguments

### Optional:

* `refresh`: if set to `wait_for`, Kuzzle will not respond until the mappings are loaded

---

## Response

Returns a confirmation that the command is being executed.

```js
{
  "requestId": "d16d5e8c-464a-4589-938f-fd84f46080b9",
  "status": 200,
  "error": null,
  "controller": "admin",
  "action": "loadMappings",
  "collection": null,
  "index": null,
  "result": { "acknowledge": true }
}
```