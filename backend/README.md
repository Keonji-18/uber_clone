## Users — POST /users/register

### Description
Registers a new user: validates input, hashes the password, creates a user record, and returns an auth token and the created user on success.

- Method: POST
- URL: /users/register
- Content-Type: application/json
- Authentication: None

### Request body (JSON)
Required fields:
- `fullname.firstname` (string) — minimum 3 characters
- `password` (string) — minimum 6 characters
- `email` (string) — must be a valid email address

Optional:
- `fullname.lastname` (string)

Example request body:
```json
{
  "fullname": { "firstname": "Suyash", "lastname": "Pandey" },
  "email": "suyash@example.com",
  "password": "securePassword123"
}
```

### Validation rules
- `email` — must be a valid email
- `fullname.firstname` — at least 3 characters
- `password` — at least 6 characters

If validation fails, the endpoint responds with `400 Bad Request` and the validation errors array.

### Responses
- 200 OK — Registration successful. Response body:
```json
{
  "token": "<jwt-token>",
  "user": { "_id": "...", "fullname": { "firstname": "Suyash", "lastname": "Pandey" }, "email": "suyash@example.com" }
}
```
- 400 Bad Request — Validation failed: `{ "errors": [ ... ] }`
- 500 Internal Server Error — Unexpected server error.

### Example curl
```bash
curl -X POST http://localhost:3000/users/register \
  -H "Content-Type: application/json" \
  -d '{"fullname":{"firstname":"Suyash","lastname":"Pandey"},"email":"suyash@example.com","password":"securePassword123"}'
```

## Users — POST /users/login

### Description
Authenticates an existing user. Validates input, verifies the provided password, and returns an auth token and the user on success.

- Method: POST
- URL: /users/login
- Content-Type: application/json
- Authentication: None

### Request body (JSON)
Required fields:
- `email` (string)
- `password` (string)

Example request body:
```json
{ "email": "suyash@example.com", "password": "securePassword123" }
```

### Validation rules
- `email` — must be a valid email
- `password` — at least 6 characters

### Responses
- 200 OK — Login successful. Response body:
```json
{ "token": "<jwt-token>", "user": { "_id": "...", "fullname": { "firstname": "Suyash", "lastname": "Pandey" }, "email": "suyash@example.com" } }
```
- 400 Bad Request — Validation failed: `{ "errors": [ ... ] }`
- 401 Unauthorized — Invalid email or password: `{ "message": "Invalid email or password" }`
- 500 Internal Server Error — Unexpected server error.

### Example curl
```bash
curl -X POST http://localhost:3000/users/login \
  -H "Content-Type: application/json" \
  -d '{"email":"suyash@example.com","password":"securePassword123"}'
```

## Users — GET /users/profile

### Description
Returns the authenticated user's profile.

- Method: GET
- URL: /users/profile
- Authentication: Required (JWT in `token` cookie or `Authorization: Bearer <token>` header)

### Responses
- 200 OK — Authenticated. Response body (user object):
```json
{ "_id": "...", "fullname": { "firstname": "Suyash", "lastname": "Pandey" }, "email": "suyash@example.com", "socketId": "..." }
```
- 401 Unauthorized — Missing/invalid/blacklisted token.

### Example curl
Using cookie:
```bash
curl -i -b cookies.txt http://localhost:3000/users/profile
```
Using header:
```bash
curl -i -H "Authorization: Bearer <token>" http://localhost:3000/users/profile
```

## Users — GET /users/logout

### Description
Logs out the authenticated user by blacklisting the provided JWT and clearing the `token` cookie.

- Method: GET
- URL: /users/logout
- Authentication: Required (JWT in `token` cookie or `Authorization: Bearer <token>` header)

### Behavior
- The server reads the token from the `token` cookie or the `Authorization` header.
- If present, the token is added to the blacklist collection (duplicate entries ignored) and the `token` cookie is cleared.

### Responses
- 200 OK — Logged out successfully: `{ "message": "Logged Out Successfully" }`
- 400 Bad Request — Token not provided.
- 401 Unauthorized — If the auth middleware rejects the token before the logout handler runs.

### Example curl
Using cookie:
```bash
curl -i -b cookies.txt -X GET http://localhost:3000/users/logout
```
Using header:
```bash
curl -i -H "Authorization: Bearer <token>" -X GET http://localhost:3000/users/logout
```

### Notes
- Blacklist entries expire automatically (24h by default) via the model's TTL index.
- Ensure the client sends the same token for logout that was received at login (cookie or header).
- Method: GET

## Captains — POST /captains/register

### Description
Registers a new captain (driver). Validates input, hashes the password, creates a captain record, and returns an auth token and the created captain on success.

- Method: POST
- URL: /captains/register
- Content-Type: application/json
- Authentication: None

### Request body (JSON)
Required fields:
- `fullname.firstname` (string) — minimum 3 characters
- `email` (string) — valid email
- `password` (string) — minimum 6 characters
- `vehicle.color` (string) — minimum 3 characters
- `vehicle.plate` (string) — minimum 8 characters
- `vehicle.capacity` (integer) — minimum 1
- `vehicle.vehicleType` (string) — one of `auto`, `car`, `motocycle`

Optional:
- `fullname.lastname`
- `location.latitude`, `location.logitude`

Example request body:
```json
{
  "fullname": { "firstname": "Ravi", "lastname": "Kumar" },
  "email": "ravi@example.com",
  "password": "securePassword123",
  "vehicle": { "color": "Blue", "plate": "ABCD1234", "capacity": 4, "vehicleType": "car" }
}
```

### Validation rules
- `fullname.firstname` — at least 3 characters
- `email` — must be a valid email
- `password` — at least 6 characters
- `vehicle.color` — at least 3 characters
- `vehicle.plate` — at least 8 characters
- `vehicle.capacity` — integer >= 1
- `vehicle.vehicleType` — one of `auto`, `car`, `motocycle`

### Responses
- 200 OK — Registration successful. Response body:
```json
{ "token": "<jwt-token>", "captain": { "_id": "...", "fullname": { "firstname": "Ravi", "lastname": "Kumar" }, "email": "ravi@example.com", "vehicle": { "color": "Blue", "plate": "ABCD1234", "capacity": 4, "vehicleType": "car" } } }
```
- 400 Bad Request — Validation failed: `{ "errors": [ ... ] }`
- 500 Internal Server Error — Unexpected server error.

### Example curl
```bash
curl -X POST http://localhost:3000/captains/register \
  -H "Content-Type: application/json" \
  -d '{"fullname":{"firstname":"Ravi","lastname":"Kumar"},"email":"ravi@example.com","password":"securePassword123","vehicle":{"color":"Blue","plate":"ABCD1234","capacity":4,"vehicleType":"car"}}'
```

### Notes
- The service requires all vehicle fields and basic captain details; missing required fields will fail creation.
