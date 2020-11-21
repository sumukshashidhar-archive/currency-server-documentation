---
id: register
title: Registration
slug: /server/api/register
---

This route is to facilitate the registration of new users.

### Route

`/register`

### Methods

`POST`

### Sample Code

#### Sample cURL request

```shell script
curl --request POST \
  --url http://localhost:3000/register \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --data email=user@example.com \
  --data password=plainTextPassword
```

#### Sample Python Code

```py

import requests

url = "http://localhost:3000/register"

payload = "email=user%40example.com&password=plainTextPassword"
headers = {'Content-Type': 'application/x-www-form-urlencoded'}

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)

```

### Response

`JSON`


On a successful response, we return the token for redirection to the dashboard!

### Structure

```JSON
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20iLCJyb2xlIjoidXNlciIsImRhdGEiOnt9LCJpYXQiOjE2MDU4MTM2MDUsImV4cCI6MTYwNTkwMDAwNX0.-hJQ8lhLP2cAq5jfALBjHxAQKA2LJEYa7PRkT4xR25c"
}
```
