
# How to use this api

## Features

    Each user has all the permissions on their own notes. No one can access other people's notes. It doesn't have a adminpanel.


## API Endpoint

 - POST - (/signup) - signup using fullName, email and password.
 - POST - (/login) - log back in later with email and password.
 - GET - (/notes) - get all your notes.
 - POST - (/notes) - create a note.
 - GET - (/note/:id) - get one note with id.
 - PUT - (/note/:id) - update one note with id.
 - DELETE - (/note/:id) - delete one note with id.


### Signup Example

/signup

`
{
    "fullName": "Anaconda Bros",
    "email": "anaconda@mail.com",
    "password": "wheewhjeh"
}
`

### Login Example

/login

`
{
    "email": anaconda@mail.com",
    "password": "wheewhjeh"
}
`
