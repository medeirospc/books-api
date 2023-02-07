# Books API.

# Descrição
API REST de livros.

<br>

## Tecnologias
- Node.js
- Express.js
- MongoDB 
- Postman

<br>

## Modelo

<pre>

const livroSchema = new mongoose.Schema({

  id: { type: String },
  titulo: { type: String, required: true },
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "autores",
    required: true,
  },
  editora: { type: String, required: true },
  numeroPaginas: { type: Number },
});
  
}</pre>

<br>
<br>
<br>


Por: <a href="https://github.com/gustamtz">gustamtz</a>

Créditos: @Alura 
