# Default Api link 
https://water-plants-app-tt42.herokuapp.com/

## User End points

### Register: /api/users/register
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

### Register: /api/users/login
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


user router
-take user id  returns all of the users plants
update user take user id update user at user id

plant router
add plant - user id adds plants return newplant
delete plants - plant id deletes plant at plant id
update plant - plant id update plant at plant id
