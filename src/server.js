require("express-async-errors");
const migrationsRun = require("./database/sqlite/migrations");
const AppError = require("./utils/AppError");

const express = require("express");
const routes = require("./routes")

migrationsRun();

const app = express();
app.use(express.json());
 
app.use(routes);

app.use((error, request, response, next) => {
  if(error instanceof AppError){
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    })   
  }

  return response.status(500).json({
    status: "error",
    message: "Erro no servidor"
  });

});


const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));







/*const { request, response } = require("express");
const express = require("express");

const app = express();
app.use(express.json()); // informar ao Insomnia qual método extensão esta passando os valores JSON
*/


/* app.get( "/message/:id/:user" , (request, response)=>{
  const {id, user} = request.params;
 
  response.send(`
  Mensagem ID: ${id}.
  Para o usuário: ${user}.
  `)
});

 app.get("/user", (request, response) => {
  const {page, limit, title} = request.query;

  response.send(`Página: ${page}. Mostrar: ${limit}. Mostrar ${title}`);
}); */
/*
const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`)); */