############################################################################################################

Instructions for running the app  


To run the app on local server
npm start
To deploy the app on aws-lambda
serverless deploy

############################################################################################################

The app has a model User on which basic CRUD operations are performed. 

One can:
1. Create a new user with email, password, nickName, firstName, lastName
2. Update the firstName and lastName of the user
3. Login through email and password
4. Get a JWT token which would automatically authenticate the user for future requests
5. Delete a user from database
6. Update the firstName and lastName
7. View his full name from nickName