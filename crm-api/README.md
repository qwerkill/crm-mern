![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)


#Starting porject

```bash
#Start container
docker-compose up -d
# Start node server
npm run start:dev
```

# TODO
> Create model user (email, password)
> Create userController
> Create userRouter

### features
- [x] Create user
- [x] Update user
- [x] Delete user
- [x] GetOne user
- [x] Get all user 
Relation user > customer 
One user can have many customers

# Mongo doc 

```bash	
# Look container
docker container ls
# Going in to container mongo
docker exec -it mongo bash
# Connect to dbmongo 
mongosh
```	

# Docker clean 
``` bash
docker volume rm $(docker volume ls -q) && docker rmi $(docker images -q)
```
## Credentials

- Developer -[Alban Munoz](https://github.com/qwerkill)
- Author - [Alban Munoz](https://github.com/qwerkill)