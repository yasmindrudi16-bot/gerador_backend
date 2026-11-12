# gerador_backend

### Gerador Automático de Backend com Node.js, Express e MySQL2

O **SQL2Node** é uma ferramenta desenvolvida para automatizar a criação de backends a partir de scripts SQL. Com ela, é possível gerar a estrutura de uma API REST utilizando Node.js, Express e MySQL2, seguindo o padrão de organização MVC (Model, Controller e Routes).

O objetivo do projeto é facilitar o desenvolvimento de backends, reduzir tarefas repetitivas e tornar a criação de APIs mais rápida e organizada.

##  Funcionalidades

- **Importação de SQL:** permite importar arquivos `.sql` ou inserir comandos SQL diretamente no editor.
- **Detecção automática:** identifica o banco de dados, as tabelas, as colunas e as chaves primárias.
- **Geração automática de backend:** cria os arquivos necessários para uma API utilizando Node.js, Express e MySQL2.
- **Arquitetura MVC:** organiza o código em Models, Controllers e Routes.
- **CRUD completo:** gera operações de cadastro, listagem, busca, atualização e exclusão.
- **Tratamento de erros:** inclui blocos `try/catch` nos Controllers para tratar erros durante as operações.
- **Integração com MySQL:** gera a configuração de conexão com o banco de dados.
- **Coleção para Insomnia:** cria automaticamente um arquivo JSON com requisições para testar os endpoints.
- **Visualização de código:** permite visualizar e copiar os arquivos gerados.
- **Download individual:** possibilita baixar arquivos separadamente.
- **Download ZIP:** permite exportar todo o backend em um único arquivo compactado.

##  Tecnologias utilizadas

| Tecnologia | Finalidade |
|---|---|
| HTML5 | Estrutura da aplicação |
| Tailwind CSS | Estilização da interface |
| JavaScript | Lógica e geração dos arquivos |
| Node.js | Ambiente de execução do backend gerado |
| Express | Criação das rotas e API REST |
| MySQL | Banco de dados relacional |
| MySQL2 | Conexão entre Node.js e MySQL |
| JSZip | Compactação dos arquivos em ZIP |
| Insomnia | Teste das requisições da API |

## 📁 Estrutura do backend gerado

```text
meu-banco-api/
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   └── tabela.controller.js
│   │
│   ├── models/
│   │   └── tabela.model.js
│   │
│   └── routes/
│       └── tabela.routes.js
│
├── insomnia/
│   └── insomnia_collection.json
│
├── .env
├── package.json
└── server.js
```

##  Como utilizar

1. Abra o SQL2Node no navegador.
2. Insira seu script SQL no editor ou importe um arquivo `.sql`.
3. Configure os dados de conexão com o MySQL:
   - Host;
   - Porta;
   - Nome do banco;
   - Usuário;
   - Senha;
   - Porta da API.
4. Clique em **Gerar Estrutura Backend**.
5. Visualize os arquivos e as rotas geradas.
6. Clique em **Baixar Projeto (.zip)** para exportar o backend.

##  Como executar o backend gerado

### 1. Extraia o arquivo ZIP

Extraia o projeto baixado em uma pasta de sua preferência e abra essa pasta no VS Code.

### 2. Instale as dependências

No terminal do VS Code, execute:

```bash
npm install
```

### 3. Configure o banco de dados

Certifique-se de que o MySQL esteja em execução e que o banco de dados e suas tabelas tenham sido criados por meio do script SQL original.

Confira também as informações do arquivo `.env`.

### 4. Inicie o servidor

```bash
node server.js
```

O servidor será iniciado na porta configurada.

## 🔗 Endpoints gerados

Para cada tabela identificada no script SQL, são criadas cinco rotas:

| Método | Endpoint | Descrição |
|---|---|---|
| POST | `/tabelas/cadastrar` | Cadastra um registro |
| GET | `/tabelas/listar` | Lista os registros |
| GET | `/tabelas/buscar/:id` | Busca um registro pelo ID |
| PATCH | `/tabelas/atualizar/:id` | Atualiza um registro |
| DELETE | `/tabelas/excluir/:id` | Exclui um registro |

O nome `tabelas` é substituído automaticamente pelo nome da rota correspondente à tabela identificada.

##  Testando com Insomnia

O SQL2Node gera automaticamente a coleção de requisições para o Insomnia.

Para utilizá-la:

1. Abra o Insomnia.
2. Selecione a opção de importar.
3. Escolha o arquivo `insomnia/insomnia_collection.json`.
4. Abra a coleção gerada.
5. Execute as requisições para testar as operações da API.

##  Objetivo do projeto

O SQL2Node busca simplificar o processo de desenvolvimento backend, automatizando a criação de estruturas e operações CRUD a partir de um banco de dados já definido em SQL.

Assim, desenvolvedores e estudantes podem economizar tempo, compreender melhor a organização de uma API e concentrar seus esforços na construção das funcionalidades de seus projetos.

---

**SQL2Node — Transformando SQL em Backend!** 🚀
