<h1>Trabalhar com Fila sem ambiente AWS</h1>

<h3>Tecnologias usadas no projeto</h3>
Bull e redis para filas (queue)<br>
Bull-board para monitoramento da fila<br>
Docker com conterner redis <br/>
NodeJs com framework Express para rotas das APIs<br/>
WebSocket server ws<br/>
npm gerenciador de pacotes </br>
Docker conterner MySql banco de dados </br>
Docker-compose</br>
<br/>

<h3>Requisitos para rodar projeto</h3>
Docker-compose é extremamente necessário pora rodar o MySql , redis, ws e armazenar as filas.
<h3>Diagrama fluxo do projeto</h3>
<img src="img/projetoFluxo2.PNG" width="70%"/>

<h3>Passo a passo para iniciar projeto 
<h4>1° Clone o projeto</h4> 
<pre>
    git clone https://github.com/20100000/api-queue.git<br/>
    cd api-queue
</pre>
<h4>2° Instale as dependências</h4>  
na raiz do projeto
crie node_module com as dependências.<br/>
<pre>
    npm install
</pre>
<h4>3° Iniciar contaners com redis, mysql e node</h4>
já fiz tudo e só usar detalhe o banco de dados sera importado também com esse comando abaixo
<pre>
    docker-compose up
</pre>

<h4>5̣° Banco de dados</h4>
A base de dados vai ser executado na porta 3308 ex: jdbc:mysql://localhost:3308/ <br>
Em docker-compose.yml configure database valores padrão.<br>
  HOST: '127.0.0.1',<br>
  PORT: '3608',<br>
  PASSWORD: 'root',<br>
  USER: 'root',<br>
  DATABASE: 'api_queue'<br>

<h4>Rotas APIs</h4>
Monitoramento da fila
<pre>
GET
http://localhost:3000/dashboard/queues
</pre>

Inserir produto para ser processado em fila
<pre>
POST
http://localhost:3000/product
{
    "name":"Name your product",
    "description": "Description product",
    "supplier_id" : 1
}
</pre>
Inserir fornecedor para ser processado em fila
<pre>
POST
http://localhost:3000/supplier
{
    "name":"Name your product",
    "doc": "Description product"
}
</pre>
Consutar todos
<pre>
GET
http://localhost:3000/product/
</pre>
<pre>
GET
http://localhost:3000/supplier/
</pre>

