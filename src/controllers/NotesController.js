const knex = require("../database/knex");

class NotesController{
  async create(request, response){
    const { título_filme, descrição_filme, nota_filme} = request.body;
    const {user_id} = request.params;

    const note_id = await knex("movie_notes").insert({
      título_filme,
      descrição_filme,
      nota_filme,
      user_id
    });

    const notaInsert = nota_filme.map(link => {
      return {
        note_id,
        url: link
      }

    });

    await knex("nota_filme").insert(notaInsert);

    const tagsInsert = movie_tags.map(name => {
      return {
        note_id,
        name,
        user_id
      }
    });

    await knex("movie_tags").insert(tagsInsert);

     response.json();  

  }

  async show(request, response){
    const {id} = request.params;

    const note = await knex("movie_notes").where({id}).first();
    

    return response.json(note);
  }

  async delete(request, response){
    const {id} = request.params;

    await knex("movie_notes").where({id}).delete();

    return response.json();
   }

   async index(request, response){
    const {user_id} = request.query;

    const notes = await knex("movie_notes")
    .where({user_id});
   

    return response.json(notes);
   }
  
}

 module.exports = NotesController;