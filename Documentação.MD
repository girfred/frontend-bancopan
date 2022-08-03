# Documentação

## Passos

### Instalação

- Acesse a raiz do projeto
- Execute npm install

### Inicialização

- Acesse a raiz do projeto
- Execute npm start
- Acesse localhost:4200

### Testes

- Acesse a raiz do projeto
- Execute ng test
  - Lista de testes:
    - CpfPipe
    - Transformar 12345678910 em 123.456.789-10
    - create an instance
  - PhonePipe
    - create an instance
    - Transformar 11987654321 em (11) 98765-4321
  - LocalStorageService
    - Clear
    - Set
    - Get
    - should be created
  - FormComponent
    - Valor inicial
    - Form Inválido
    - Form Válido
    - should create
    - Qtd Campos Form
  - UsersService
    - should be created
    - Insert
    - Update
    - Delete
    - Pegar do Local
    - Pegar da API
  - HomeComponent
    - should create
  - CardComponent
    - should create
  - AppComponent
    - should create the app
    - should have as title 'banco-pan'

## Tecnologias Usadas

- ngx-mask (https://www.npmjs.com/package/ngx-mask)
  - Facilitar o padrão na hora de inserir os dados
- angular material (https://material.angular.io/)
  - Para criação utilizando certos components já criados pelo time do Angular
- angular flex-layout (https://github.com/angular/flex-layout)
  - Para facilitar o posicionamento de elementos

## Fluxos

- No inicio da aplicação, é checado se já existe um campo 'users' no local storage. Se não, pega da API e insere no local storage.

### Inserção
- Ao clicar em 'Adicionar Usuário', é chamado um Mat Dialog que age como um modal, com os campos para inserção de novo usuário.
  - A validação dos campos é feita da seguinte forma:
    - name: required, minLength(1), maxLength(256)
	- email: required, email
	- phone: required, minLength(11), maxLength(11)
	- cpf: required, minLength(11), maxLength(11)
  - O botão só fica enable quando todos os campos estiverem válidos
- Clicando em 'Adicionar Usuário', insere o usuário no final do array de usuários e insere no local storage.

### Atualização
- Ao clicar no icone de usuário ao lado direito das informações, é chamado um Mat Dialog com as informações do usuário já preenchidas.
  - A validação dos campos é feita da seguinte forma:
    - name: required, minLength(1), maxLength(256)
	- email: required, email
	- phone: required, minLength(11), maxLength(11)
	- cpf: required, minLength(11), maxLength(11)
  - O botão só fica enable quando todos os campos estiverem válidos
- Clicando em 'Atualizar Usuário', atualiza o array de usuários pelo index do usuário em questão e insere no local storage.

### Exclusão
- Ao clicar no icone vermelho ao lado direito das informações, remove o usuário em questão pelo index no array de usuários e insere no local storage.