---
layout: sdk.html.hbs
title: Conclassor
description: Create a new Kuzzle object connected to the backend
order: 0
---

# Conclassor

This is the main entry point to communicate with Kuzzle.  
Each instance represent a connection to Kuzzle with specific options.

## Signature

```csharp
```

## Arguments

| Argument  | Type        | Description                     |
| --------- | ----------- | ------------------------------- |
| `protocol`    | <pre><a href={{ site_base_path }}sdk-reference/csharp/1/protocol/>Protocol</a></pre> | Network protocol configuration |
| `options` | <pre>Options</pre>   | Kuzzle connection configuration |


### options

| Option               | Type               | Description                                                        | Default  | Required |
| -------------------- | ------------------ | ------------------------------------------------------------------ | -------- | -------- |
| `auto_queue`         | bool            | Automatically queue all requests during offline mode               | `false`  | no       |
| `auto_reconnect`     | bool            | Automatically reconnect after a connection loss                    | `true`   | no       |
| `auto_replay`        | bool            | Automatically replay queued requests on a `reconnected` event      | `false`  | no       |
| `auto_resubscribe`   | bool            | Automatically renew all subscriptions on a `reconnected` event     | `true`   | no       |
| `offline_mode`       | enum Mode          | Offline mode configuration. `MANUAL` or `AUTO`                     | `MANUAL` | no       |
| `queue_ttl`          | int           | Time a queued request is kept during offline mode, in milliseconds | `120000` | no       |
| `queue_max_size`     | int long      | Number of maximum requests kept during offline mode                | `500`    | no       |
| `replay_interval`    | int long      | Delay between each replayed requests, in milliseconds              | `10`     | no       |
| `reconnection_delay` | int long      | number of milliseconds between reconnection attempts               | `1000`   | no       |
| `volatile`           | string (json) | Common volatile data, will be sent to all future requests          | -        | no       |

## Getter & Setter

The properties can be writable.  
For example, you can read the `volatile` property via `getVolatile()` and set it via `setVolatile()`.

| Property name | Type               | Description                                                   | Availability |
| ------------- | ------------------ | ------------------------------------------------------------- | :----------: |
| `autoReplay`  | bool            | Automatically replay queued requests on a `reconnected` event |     Set      |
| `jwt`         | string        | Token used in requests for authentication.                    |     Get      |
| `volatile`    | string (json) | Common volatile data, will be sent to all future requests     |   Get/Set    |

**Notes:**

- multiple methods allow passing specific `volatile` data. These `volatile` data will be merged with the global Kuzzle `volatile` object when sending the request, with the request specific `volatile` taking priority over the global ones.
- the `queueFilter` property is a function taking a `query_object` as an argument. This object is the request sent to Kuzzle, following the [Kuzzle API]({{ site_base_path }}api/1/query-syntax) format
- if `queueTTL` is set to `0`, requests are kept indefinitely
- The offline buffer acts like a first-in first-out (FIFO) queue, meaning that if the `queueMaxSize` limit is reached, older requests are discarded to make room for new requests
- if `queueMaxSize` is set to `0`, an unlimited number of requests is kept until the buffer is flushed
- the `offlineQueueLoader` must be set with a function, taking no argument, and returning an array of objects containing a `query` member with a Kuzzle query to be replayed, and an optional `cb` member with the corresponding callback to invoke with the query result
- updates to `autoReconnect`, `reconnectionDelay` and `sslConnection` properties will only take effect on next `connect` call

## Return

A `Kuzzle` instance.

## Usage

[snippet=conclassor]