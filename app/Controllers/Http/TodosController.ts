import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class TodosController {
  public async index({ view }: HttpContextContract) {
    return view.render("todos/index");
  }
}
