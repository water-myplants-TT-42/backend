# Default Api link 
https://water-plants-app-tt42.herokuapp.com/

## User End points



### Register(POST): /api/users/register
Requires:

`{
    username: ,
    password": ,
    phoneNumber":
}`

Returns:

`{
    "user_id": ,
    "username": ,
    "phoneNumber": 
}`

### Login(POST): /api/users/login
Requires:

`{
    username: ,
    password":
}`

Returns:

`{
 message: "Welcome " + user.username + ". Enjoy your plants!",
  user_id: user.user_id,
  token:"returns jwt token"     
}`

### Update User info(PUT): /api/users/"user_id" ***Requires Token***
Requires:

`{
    "password":"",
    "phoneNumber":""
`}

Returns

`{
    "user_id": ,
    "username": "",
    "phoneNumber": ""
}`

### Get User's Plants(GET): /api/users/user_id/plants ***Requires Token***
Requires:

`Nothing`

Returns:

`[
    {plant objects}
]`


## Plant end points 

### Get Plant(GET): /api/plants/plant_id ***Requires Token***
Requires:

`Nothing`

Returns:

`{
    "plant_id": "",
    "nickname": "t",
    "species": "",
    "h2oFrequency": "",
    "user_id": ""
}`

### Add Plant(POST) /api/plants ***Requires Token***
Requires:

`{
    "nickname": "",
    "species": "",
    "h2oFrequency": "",
    "user_id": ""
}`

Returns:

`{
    "plant_id": "",
    "nickname": "t",
    "species": "",
    "h2oFrequency": "",
    "user_id": ""
}`

### Update Plant(PUT) /api/plants/plant_id ***Requires Token***
Requires:

`{
    updated plant info
}`

Returns:

`{
    "plant_id": "",
    "nickname": "t",
    "species": "",
    "h2oFrequency": "",
    "user_id": ""
}`

### Delete Plant(DELETE) /api/plants/plant_id ***Requires Token***
Requires:

`Nothing`

Returns:

"Plant `plant_id` was deleted."


