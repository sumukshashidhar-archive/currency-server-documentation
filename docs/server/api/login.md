---
id: login
title: Login
slug: /server/api/login
---

This route is to authenticate existing users.

### Route

`/login`

### Methods

`POST`

### Sample Code

#### Sample cURL request

```shell script
curl --request POST \
  --url http://localhost:3000/login \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --data email=user@example.com \
  --data password=plainTextPassword
```

#### Sample Python Code

```py

import requests

url = "http://localhost:3000/login"

payload = "email=user%40example.com&password=plainTextPassword"
headers = {'Content-Type': 'application/x-www-form-urlencoded'}

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)

```

### Response

`JSON`

#### On Success

On a successful response, we return the token for redirection to the dashboard!

##### Structure

```JSON
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20iLCJyb2xlIjoidXNlciIsImRhdGEiOnt9LCJpYXQiOjE2MDU4MTM2MDUsImV4cCI6MTYwNTkwMDAwNX0.-hJQ8lhLP2cAq5jfALBjHxAQKA2LJEYa7PRkT4xR25c"
}
```


#### Failures

If the supplied password is wrong

##### Structure
```JSON
{
  "debugError": "Wrong Password"
}
```

If the user does not exist
```JSON
{
  "debugError": "No such user"
}
```

If the required arguments are not passed
```
Error: celebrate request validation failed
    at /Users/sumuk/Documents/p2p-essay-review-system/node_modules/celebrate/lib/celebrate.js:95:19
    at processTicksAndRejections (node:internal/process/task_queues:93:5)
```