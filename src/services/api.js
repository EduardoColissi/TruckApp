import axios from "axios";

//Define a rota da API, o ideal é criar um arquivo .env, copiar o conteudo da .env.example e adicionar as configurações
//de acordo com seu ambiente de desenvolvimento

const api = axios.create({
  baseURL: "http://localhost:3007",
});

export default api;
