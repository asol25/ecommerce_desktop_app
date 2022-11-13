const data = [
        {
                "id": 4,
                "username": "Alma Boehm",
                "password": "123",
                "verified": "no",
                "status": "banned",
                "email": "AlmaBoehm@gmail.com",
                "role": {
                        "id": 4,
                        "name": "user"
                }
        },
        {
                "id": 5,
                "username": "Alvin Mildler",
                "password": "123",
                "verified": "yes",
                "status": "banned",
                "email": "AlvinMicslle@gmail.com",
                "role": {
                        "id": 4,
                        "name": "user"
                }
        },
        {
                "id": 9,
                "username": "Alvin Mhildler",
                "password": "123",
                "verified": "yes",
                "status": "banned",
                "email": "AlvinMicsjlle@gmail.com",
                "role": {
                        "id": 4,
                        "name": "user"
                }
        },
        {
                "id": 30,
                "username": "thinh",
                "password": "thinh",
                "verified": "yes",
                "status": "active",
                "email": "thinh@gmail.com",
                "role": {
                        "id": 4,
                        "name": "user"
                }
        },
        {
                "id": 31,
                "username": "cuop",
                "password": "cuop",
                "verified": "no",
                "status": "active",
                "email": "cuop@gmail.com",
                "role": {
                        "id": 4,
                        "name": "user"
                }
        },
        {
                "id": 32,
                "username": "Nguyen Thi Hoang Phuc",
                "password": "01284375954",
                "verified": "yes",
                "status": "active",
                "email": "cuop@gmail.com",
                "role": {
                        "id": 4,
                        "name": "user"
                }
        }
]

const searchString = "cuop@gmail.com";
const user  = data.filter((user) => user.email.toLocaleLowerCase().indexOf(searchString) !== -1)

console.log(user);