---
layout: sdk.html.hbs
title: getConfig
description: Returns the current Kuzzle configuration.
---

# getConfig

Returns the current Kuzzle configuration.

<div class="alert alert-warning">
  This route should only be accessible to administrators, as it might return sensitive information about the backend.
</div>

## Signature

```csharp
public string getConfig();
public string getConfig(QueryOptions options);
```

## Arguments

| Arguments | Type          | Description       |
| --------- | ------------- | ------------------|
| `options` | <pre>Kuzzleio::QueryOptions\*</pre> | Query options |

### options

Additional query options

| Option     | Type<br/>(default)   | Description  |
| ---------- | ------- | -------------- |
| `queuable` | <pre>bool</pre><br/>(`true`) | If true, queues the request during downtime, until connected to Kuzzle again |

## Return

A JSON string representing current server configuration.

## Exceptions

Throws a `Kuzzleio::KuzzleException` if there is an error. See how to [handle error]({{ site_base_path }}sdk-reference/csharp/1/error-handling).

## Usage

[snippet=get-config]