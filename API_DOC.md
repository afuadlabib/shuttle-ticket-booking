# TRAVEL BUS

## Model

## User & Driver

### User

```
- username: string
- email: string
- password: string
- role: string
- age: string
```
### Driver

```
- user_id: string
- license: string
```


### End point:

- POST `/api/users/register`
- POST `/api/users/login`
- POST `/api/users/register/admin`

#### authorization & authentication

- POST `/api/users/register/drivers/:userId`
### POST api/users/register

- Create user data

#### Request:

- Body

```json
{
  "email": "string",
  "password": "string",
  "username": "string",
  "age": "string"
}
```

#### Reponse: _201 created_

```json
{
  "id": "string",
  "username": "string",
  "email": "string",
  "age": "string"
}
```

#### BadRequest: _400 badRequest_

```json
{
    "message": "email must be unique"
}
(or)
{
    "message": "email is required"
}
(or)
{
    "message": "invalid email format"
}
(or)
{
    "message": "username is required"
}
(or)
{
    "message": "password min 5 character"
}
(or)
{
    "message": "password is required"
}
```

### POST api/users/login

- Login user data

#### Request:

- Body

```json
{
  "username": "string",
  "email": "string"
}
```

#### Response: _200 ok_

```json
{
  "access_token": "string"
}
```

#### BadRequest: _400 badReaquest_

```json
{
    "message": "email is required"
}
(or)
{
    "message": "password is required"
}
```

#### BadRequest: _401 unAuthorize_

```json
{
  "message": "invalid email or password"
}
```

### POST api/users/register/admin

- Create admin data

#### Request:

- Body

```json
{
  "email": "string",
  "password": "string",
  "username": "string",
  "age": "string"
}
```

#### Reponse: _201 created_

```json
{
  "id": "string",
  "username": "string",
  "email": "string",
  "age": "string"
}
```

#### BadRequest: _400 badRequest_

```json
{
    "message": "email must be unique"
}
(or)
{
    "message": "email is required"
}
(or)
{
    "message": "invalid email format"
}
(or)
{
    "message": "username is required"
}
(or)
{
    "message": "password min 5 character"
}
(or)
{
    "message": "password is required"
}
```

### POST api/users/register/drivers/:userId

- create Driver data

#### Request:

- params:

```json
{
  "userId": "string"
}
```

- Authorization Bearer

```json
{
  "Authorization": "string"
}
```

- Body

```json
{
  "user_id": "string"
}
```

#### Response: _201 created_

```json
{
  "id": "7682e4a1-16f6-40bd-99d9-17b598cfb813",
  "user_id": "7356f417-6942-4ba6-a5b2-3d80b4c760e6",
  "license": "license_xc"
}
```

#### Response: _200 ok_

```json
{
  "message": "all ready register driver"
}
```

#### BadRequest: _400 badRequest_

```json
{
  "message": "license is required"
}
```




## Seat

```
- name: string
- column: number
- row: number
```

### End point:

#### authentication

- GET `/api/seats`
- POST `/api/seats`

#### authorization & authentication

- PUT `/api/seats/:seatId`
### GET api/seats

- Find All Seats

#### Request:

- Authorization Bearer

```json
{
  "Authorization": "string"
}
```

#### Response: _200 ok_

```json
[
  {
    "id": "011394b5-0f05-47f5-beee-9934b326159d",
    "name": "Bus Seat 24",
    "column": 4,
    "row": 8
  }
]
```

### POST api/seats

- Create Seats

#### Request:

- Authorization Bearer

```json
{
  "Authorization": "string"
}
```

#### Response: _200 ok_

```json
{
  "id": "0aeea4f5-08a0-4d16-a08d-742f52a9795a",
  "name": "Bus Seat 24"
}
```

#### BadRequest: _400 badRequest_

```json
{
    "message": "name is required"
}
(or)
{
    "message": "column is required"
}
(or)
{
    "message": "row is required"
}
```

### PUT api/seats/seatId

- Update Seat

#### Request:

- Authorization Bearer

```json
{
  "Authorization": "string"
}
```

- Params

```json
{
  "seatId": "string"
}
```

- Body

```json
{
  "name": "string",
  "column": "integer",
  "row": "integer"
}
```

#### Response: _200 ok_

```json
{
  "message": "success update seat <name>"
}
```

#### BadRequest: _400 BadRequest_

```json
{
    "message": "name is required"
}
(or)
{
    "message": "column is required"
}
(or)
{
    "message": "row is required"
}
```
## Armada

```
- name: string
- plate_number: string
- color: string
- seat_id: string
```

### End point:

#### authentication

- GET `/api/armadas`

#### authorization & authentication

- POST `/api/armadas`
- PUT `/api/armadas/:armadasId`
### POST api/armadas

- Create armada data

#### Request:

- Body

```json
{
  "email": "string",
  "password": "string",
  "username": "string",
  "age": "string"
}
```

#### Reponse: _201 created_

```json
{
  "id": "a65092e1-3b07-4511-9518-8cc698581c20",
  "name": "Bus 1",
  "plate_number": "G 1212 XX",
  "color": "Red",
  "seat_id": "0aeea4f5-08a0-4d16-a08d-742f52a9795a"
}
```

#### BadRequest: _400 badRequest_

```json
{
    "message": "name is required"
}
(or)
{
    "message": "plate_number is required"
}
(or)
{
    "message": "color is required"
}
(or)
{
    "message": "Armada.seat_id cannot be null"
}
(or)
{
    "message": "Validation notEmpty on seat_id failed"
}
```

### GET api/armadas

- Find All Armada

#### Request:

- Authorization Bearer

```json
{
  "Authorization": "string"
}
```

#### Response: _200 ok_

```json
[
  {
    "id": "a65092e1-3b07-4511-9518-8cc698581c20",
    "name": "Bus 1",
    "plate_number": "G 1212 XX",
    "color": "Red",
    "seat_id": "0aeea4f5-08a0-4d16-a08d-742f52a9795a"
  }
]
```

### PUT api/armadas/armadaId

- Update Armada

#### Request:

- params

```json
{
  "armadaId": "string"
}
```

- Authorization Bearer

```json
{
  "Authorization": "string"
}
```

#### Response: _200 ok_

```json
{
  "message": "success update <name>"
}
```
## Schedule

```
- time: string
- origin: string
- destination: string
- price: integer
- estimation: string
- armada_id: string
- driver_id: string
```

### End point:

#### authentication

- GET `/api/schedules`

#### authorization & authentication

- POST `/api/schedules`
- PUT `/api/schedules/:armadasId`
### GET api/schedules

- Find All Schedule

#### Request:

- Authorization Bearer

```json
{
  "Authorization": "string"
}
```

#### Response: _200 ok_

```json
[
  {
    "id": "90d6bc7c-4bb7-4f8c-a711-028cae147a10",
    "time": "14.00",
    "origin": "jakarta",
    "destination": "bandung",
    "estimation": "2.30 jam",
    "armada_id": "1dd53dbb-c3a3-48cc-b263-206037b186e5",
    "driver_id": "3bd96766-b890-4f8b-a6f0-dbc7e721d65d"
  },
  {
    "id": "556442a9-a011-4795-ba9b-dddfd929ba3e",
    "time": "14.00",
    "origin": "jakarta",
    "destination": "bandung",
    "estimation": "2.30 jam",
    "armada_id": "1dd53dbb-c3a3-48cc-b263-206037b186e5",
    "driver_id": "3bd96766-b890-4f8b-a6f0-dbc7e721d65d"
  },
  {
    "id": "783741c6-2a65-4fcc-b8c7-72e38e8f15ac",
    "time": "14.00",
    "origin": "jakarta",
    "destination": "bandung",
    "estimation": "2.30 jam",
    "armada_id": "1dd53dbb-c3a3-48cc-b263-206037b186e5",
    "driver_id": "3bd96766-b890-4f8b-a6f0-dbc7e721d65d"
  },
  {
    "id": "f106fb95-7434-4e67-bd3c-01dabc50ebd4",
    "time": "14.00",
    "origin": "jakarta",
    "destination": "bandung",
    "estimation": "2.30 jam",
    "armada_id": "1dd53dbb-c3a3-48cc-b263-206037b186e5",
    "driver_id": "3bd96766-b890-4f8b-a6f0-dbc7e721d65d"
  }
]
```

### POST api/schedules

- create Schedule

#### Request:

- Authorization Bearer

```json
{
  "Authorization": "string"
}
```

#### Response: _201 ok_

```json
{
  "time": "14.00",
  "origin": "jakarta",
  "destination": "bandung",
  "armada_id": "1dd53dbb-c3a3-48cc-b263-206037b186e5",
  "driver_id": "3bd96766-b890-4f8b-a6f0-dbc7e721d65d"
}
```

#### BadResponse: _400 badRequest_

```json
{
    "message": "time is required"
}
(or)
{
    "message": "origin is required"
}
(or)
{
    "message": "destination is required"
}
(or)
{
    "message": "estimation is required"
}
```

### PUT api/schedules/scheduleId

- Update Schedule

#### Request:

- params

```json
{
  "scheduleId": "string"
}
```

- Authorization Bearer

```json
{
  "Authorization": "string"
}
```

#### Response: _200 ok_

```json
{
  "message": "success update schedule <time>"
}
```
## Ticket

```
- username: string
- id_ticket: string
- schedule_id: string
```
### End point:
- POST `/api/tickets`
#### authentication
- GET `/api/tickets`
#### authorization & authentication
- PUT `/api/tickets/ticketId`

### GET api/tickets

- Find All Ticket

#### Request:

#### Response: _200 ok_

```json
[
    {
        "id": "e1249250-115b-48b1-8c4a-d09eca59a531",
        "username": "test",
        "id_ticket": "njksdhkkdbh",
        "schedule_id": "556442a9-a011-4795-ba9b-dddfd929ba3e"
    },
    {
        "id": "eff1ae2d-e7fa-48ee-9603-c5116bb16f0e",
        "username": "test",
        "id_ticket": "njksdhkkdbh",
        "schedule_id": "556442a9-a011-4795-ba9b-dddfd929ba3e"
    }
]
```

### POST api/tickets

- Create Ticket

#### Request:

#### Response: _201 ok_

```json
{
    "id": "e1249250-115b-48b1-8c4a-d09eca59a531",
    "username": "test",
    "schedule_id": "556442a9-a011-4795-ba9b-dddfd929ba3e",
    "id_ticket": "njksdhkkdbh"
}
```
#### BadRequest: _400 badRequest_
```json
{
    "message": "username is required"
}
(or)
{
    "message": "id_ticket is required"
}
(or)
{
    "message": "id_ticket is required"
}
(or)
{
    "message": "Ticket.schedule_id cannot be null"
}
(or)
{
    "message": "schedule_id is required"
}
```
### PUT api/tickets/ticketId

- Update Ticket

#### Request: 
- params
```json
{
    "ticketId": "string"
}
```

#### Response: _200 ok_

```json
{
    "message": "success update e1249250-115b-48b1-8c4a-d09eca59a531"
}
```

## GLOBAL ERROR

#### BadRequest: _404 notFound_

```json
{
  "message": "not found"
}
```

#### BadRequest: _401 unAuthorize_

```json
{
  "message": "invalid token"
}
```

#### BadRequest: _403 forBidden_

```json
{
  "message": "unauthorized"
}
```

#### BadRequest: _500 Internal Server Error_

```json
{
  "message": "intenal server error"
}
```
