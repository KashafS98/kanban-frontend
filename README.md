![alt text](https://raw.githubusercontent.com/KashafS98/kanban-frontend/master/src/kanban.png)

## Steps to run the app :

1. Install mongodb on your machine if it is not installed already
2. Install mongoDB: [https://zellwk.com/blog/install-mongodb/](https://zellwk.com/blog/install-mongodb/)
3. Setup MongoDB: [https://zellwk.com/blog/local-mongodb/](https://zellwk.com/blog/local-mongodb/)
4. Create a DB named "kanban" (small case) - make sure the mongo server is running on port 27017
5. Clone the frontend and run it
   1. `git clone https://github.com/KashafS98/kanban-frontend.git`
   2. `cd kanban-frontend`
   3. `yarn` 
   4. `yarn start` - starts the app on port 3000
7. Clone the service 
   1. `git clone https://github.com/KashafS98/kanban-service.git`
   2. `cd kanban-service`
   3. `yarn` 
   4. `yarn dev` - starts the service on port 8080
9. Visit http://localhost:3000 and you can see the kanban app running.
10. You can also find a sample insomnia request file in the repo: https://github.com/KashafS98/kanban-frontend/blob/master/Insomnia_kanban.json
