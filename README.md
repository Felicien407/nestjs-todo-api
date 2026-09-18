# NestJS To-Do List API

A lightweight, RESTful To-Do List API built with **NestJS**, **Prisma ORM**, and **PostgreSQL**. Features full CRUD operations, input validation via DTOs, and environment configuration.

---

## 🛠 Tech Stack

* **Framework:** NestJS
* **Database:** PostgreSQL
* **ORM:** Prisma
* **Language:** TypeScript

---

## 📁 Directory Structure

```text
todo-api/
├── src/
│   ├── todos/
│   │   ├── dto/
│   │   │   ├── create-todo.dto.ts
│   │   │   └── update-todo.dto.ts
│   │   ├── todos.controller.ts
│   │   ├── todos.service.ts
│   │   └── todos.module.ts
│   │
│   ├── app.module.ts
│   └── main.ts
│
├── prisma/
│   └── schema.prisma
│
├── .env
└── package.json
```

## 🔌 API Endpoints

```text
Method,Endpoint,Description
GET,/todos,Retrieve all to-do items
GET,/todos/:id,Retrieve a specific to-do item by ID
POST,/todos,Create a new to-do item
PATCH,/todos/:id,Update an existing to-do item by ID
DELETE,/todos/:id,Delete a to-do item by ID
```
### 📄 License
This project is licensed under the MIT License.
