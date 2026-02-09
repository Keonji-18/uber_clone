# Users — POST /users/register

## Description
Registers a new user. Validates input, hashes the password, creates a user record, and returns an auth token and the created user on success.

- Method: POST
- URL: /users/register
- Content-Type: application/json

## Request body (JSON)
Required fields:
- `fullname.firstname` (string) — minimum 3 characters
- `password` (string) — minimum 6 characters
- `email` (string) — must be a valid email address

Optional:
- `fullname.lastname` (string)

Example:
{
  "fullname": {
    "firstname": "Suyash",
    "lastname": "Pandey"
  },
  "email": "suyash@example.com",
  "password": "securePassword123"
}

## Validation rules (implemented)
- `email` — must be a valid email
- `fullname.firstname` — at least 3 characters
- `password` — at least 6 characters

If validation fails, the endpoint responds with `400 Bad Request` and the validation errors array.

## Responses / Status Codes
- 200 OK — Registration successful. Response body:
{
  "token": "<jwt-token>",
  "user": {
    "_id": "...",
    "fullname": {
      "firstname": "Suyash",
      "lastname": "Pandey"
    },
    "email": "suyash@example.com"
  }
}
- 400 Bad Request — Validation failed:
{ "errors": [ /* validation error objects */ ] }
- 500 Internal Server Error — Unexpected server error.

## Example curl
curl -X POST http://localhost:3000/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": {"firstname":"Suyash","lastname":"Pandey"},
    "email":"suyash@example.com",
    "password":"securePassword123"
  }'


# Users — POST /users/login

## Description
Authenticates an existing user. Validates input, verifies the provided password against the stored hash, and returns an auth token and the user on success.

- Method: POST
- URL: /users/login
- Content-Type: application/json

## Request body (JSON)
Required fields:
- `email` (string) — must be a valid email address
- `password` (string) — minimum 6 characters

Example:
{
  "email": "suyash@example.com",
  "password": "securePassword123"
}

## Validation rules (implemented)
- `email` — must be a valid email
- `password` — at least 6 characters

If validation fails, the endpoint responds with `400 Bad Request` and the validation errors array.

## Responses / Status Codes
- 200 OK — Login successful. Response body:
{
  "token": "<jwt-token>",
  "user": {
    "_id": "...",
    "fullname": {
      "firstname": "Suyash",
      "lastname": "Pandey"
    },
    "email": "suyash@example.com"
  }
}
- 400 Bad Request — Validation failed:
{ "errors": [ /* validation error objects */ ] }
- 401 Unauthorized — Invalid email or password:
{ "message": "Invalid email or password" }
- 500 Internal Server Error — Unexpected server error.

## Example curl
curl -X POST http://localhost:3000/users/login \
  -H "Content-Type: application/json" \
  -d '{
    "email":"suyash@example.com",
    "password":"securePassword123"
  }'
