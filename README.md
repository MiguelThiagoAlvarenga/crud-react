# crud-react

1. Dependencia -- Instalar o node.js versão 12.9.0 e npm versão 6.10.2

2. Backend

  2.1. Postgres 10 -- Criar uma base com o nome de crud_exemplo.
  
  2.2. na pasta "backend" executar pelo terminao os seguintes comandos:
  
    >> npm install
    
    -- configurar o arquivo 'config/database.js', dentro da pasta backend, com as configurações do seu banco.
    
    ## SUBIR MIGRATION ##
        --- yarn sequelize db:migrate
    ## DESFAZER TODAS MIGRATIONS  - DEIXANDO ESTADO INICIAL ##
        ---  yarn sequelize db:migrate:undo:all
    ## DESFAZENDO A ULTIMA MIGRATION ##
        --- yarn sequelize db:undo
    ## DESFAZENDO UMA MIGRATION ESPECÍFICA ##
        --- yarn sequelize db:migrate:undo:all --to XXXXXXXXXXXXXX-create-users.js
    
    >> npm start
    
3. Frontend

  3.1. executar:
  
      >> npm install
    
      >> npm start
