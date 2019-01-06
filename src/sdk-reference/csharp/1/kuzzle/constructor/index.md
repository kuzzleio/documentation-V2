---
layout: sdk.html.hbs
title: Constructor
description: Create a new Kuzzle object connected to the backend
order: 50
---

# Constructor

Use this constructor to create a new instance of the SDK.  
Each instance represent a different connection to a Kuzzle server with specific options.

## Signature

```csharp
```

## Arguments

| Argument  | Type        | Description                     |
| --------- | ----------- | ------------------------------- |
| `protocol`    | <pre><a href={{ site_base_path }}sdk-reference/csharp/1/protocol/>Protocol</a></pre> | Network protocol configuration |
| `options` | <pre>Options</pre>   | Kuzzle object configuration |

### options

| Option               | Type<br/>(default)               | Description         |
| -------------------- | ------------------ | ------------------------------------------------------------------ | 
| `auto_queue`         | <pre>bool</pre><br/>(`false`)  | Automatically queue all requests during offline mode   |
| `auto_reconnect`     | <pre>bool</pre><br/>(`true`)  | Automatically reconnect after a connection loss         |
| `auto_replay`        | <pre>bool</pre><br/>(`false`)  | Automatically replay queued requests on a `EVENT_RECONNECTED` event |
| `auto_resubscribe`   | <pre>bool</pre><br/>(`true`)  | Automatically renew all subscriptions on a `EVENT_RECONNECTED` event |
| `offline_mode`       | <pre>enum Mode</pre><br/>(`MANUAL`) | Offline mode configuration. `MANUAL` or `AUTO` |
| `queue_ttl`          | <pre>int</pre><br/>(`120000`) | Time a queued request is kept during offline mode, in milliseconds |
| `queue_max_size`     | <pre>long</pre><br/>(`500`) | Number of maximum requests kept during offline mode |
| `replay_interval`    | <pre>long</pre><br/>(`10`) | Delay between each replayed requests, in milliseconds |
| `reconnection_delay` | <pre>long</pre><br/>(`10000`) | Number of milliseconds between reconnection attempts |
| `volatile`           | <pre>string</pre><br/>(`"{}"`) | JSON string representing common volatile data, will be sent to all future requests |

## Return

A `Kuzzle` instance.

## Usage

[snippet=constructor]