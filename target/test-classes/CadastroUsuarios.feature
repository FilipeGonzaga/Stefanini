#language: pt
@automacao
Funcionalidade: Cadastrar Usuários Stafanini

	Como usuário do sistema.
	Desejo realizar o cadastro de novos usuários.
	Para seja possível armazenar e gerenciar seus dados.
	

Contexto: Verificar preenchimento obrigatório de todos os campos
    Dado que estou no site da Stefanini

Esquema do Cenário: Validar informações de preenchimento    
    E preencho <nome>
    E preencho o <email>
    E preencho a <senha>
    Quando clico em cadastrar
    Então verifico se não consigo logar sem preenchimento de algum campo obrigatório através da <mensagem>
    
Exemplos: 
   | nome                              | email                         | senha       | mensagem                                      |      
   | ""                                | "filipegcsilva@yahoo.com.br"  | "12345678"  | "O campo Nome é obrigatório."                 | 
   | "Filipe Gonzaga Costa da Silva"   | ""                            | "12345678"  | "O campo E-mail é obrigatório."               | 
   | "Filipe Gonzaga Costa da Silva"   | "filipegcsilva@yahoo.com.br"  | ""          | "O campo Senha é obrigatório."                | 
	 | "Filipe"                          | "filipegcsilva@yahoo.com.br"  | "12345678"  | "Por favor, insira um nome completo."         | 
   | "Filipe Gonzaga Costa da Silva"   | "filipegcsilva"              | "12345678"   | "Por favor, insira um e-mail válido."         | 
	 | "Filipe Gonzaga Costa da Silva"   | "filipegcsilva@yahoo.com.br"  | "1234"      | "A senha deve conter ao menos 8 caracteres."  | 
	 


Esquema do Cenário: Cadastrar usuário 
    E preencho <nome>
    E preencho o <email>
    E preencho a <senha>
    Quando clico em cadastrar
    Então valido se foi cadastrado corretamente <mensagem>
    Mas excluo para gerenciamento de massa
    
Exemplos: 
   | nome                              | email                         | senha       | mensagem                 |     
   | "Filipe Gonzaga Costa da Silva"   | "filipegcsilva@yahoo.com.br"  | "12345678"  | "Usuários cadastrados"   | 
   | "Luiz Gonzaga da Silva"           | "filipegcsilva@hotmail.com "  | "12345678"  | "Usuários cadastrados"   | 
	 
    
	 
    
	 
	 