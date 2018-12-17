---
layout: sdk.html.hbs
title: login
description: Authenticate a user
---

# login

Authenticates a user.z


## Signature

```csharp
public string login(string strategy, string credentials);
public string login(string strategy, string credentials, int expiresIn);
```

## Arguments

| Arguments     | Type    | Description | Required
|---------------|---------|----------------------------------|----------
| `strategy`    | string  | the name of the strategy to use  | yes
| `credentials` | string  | the json credentials             | yes
| `expiresIn`   | int     | expiration time in milliseconds  | no

### strategy

The name of the authentication [strategy]({{ site_base_path }}guide/kuzzle-depth/authentication/#authentication) used to log the user in.

Depending on the chosen authentication `strategy`, additional [credential arguments]({{ site_base_path}}guide/kuzzle-depth/authentication/#authentication) may be required.  
The API request example in this page provides the necessary arguments for the [`local` authentication plugin](https://github.com/kuzzleio/kuzzle-plugin-auth-passport-local).

Check the appropriate [authentication plugin]({{ site_base_path }}plugins/1/essentials/strategies/) documentation to get the list of additional arguments to provide.

## Return

The **login** action returns an encrypted JSON Web Token, that must then be sent in the [requests headers]({{ site_base_path }}api/2/query-syntax/).

## Exceptions

Throws a `Kuzzleio::KuzzleException` if there is an error. See how to [handle error]({{ site_base_path }}sdk-reference/csharp/1/essentials/error-handling).

## Usage

[snippet=login]