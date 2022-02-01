/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from "@ioc:Adonis/Core/Route";

// import TodosController from "App/Controllers/Http/TodosController";

// Route.get("/todos", (ctx) => new TodosController().index(ctx));
// Route.get('/todos', async (ctx) => {
//   const TodosController = (await import('App/Controllers/Http/TodosController'))
//     .default
//   return new TodosController().index(ctx)
// });
// Route.get("/", "TodosController.index"); //meilleur facon d'ecrire

Route.get("/", async ({ view }) => {
  return view.render("welcome");
});
