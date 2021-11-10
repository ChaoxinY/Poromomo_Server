import "reflect-metadata";
import { createConnection } from "typeorm";
import { Task } from "./entity/task";

createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "admin",
    database: "Poromomo",
    entities: [
        Task
    ],
    synchronize: true,
    logging: false
}).then(connection => {
    // here you can start to work with your entities
}).catch(error => console.log(error));