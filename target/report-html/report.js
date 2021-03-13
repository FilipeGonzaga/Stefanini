$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:/D:/dimi_/Area%20de%20Trabalho/aulas/cucumber/Stefanini/src/test/java/CadastroUsuarios.feature");
formatter.feature({
  "name": "Cadastrar Usuários Stafanini",
  "description": "\tComo usuário do sistema.\n\tDesejo realizar o cadastro de novos usuários.\n\tPara seja possível armazenar e gerenciar seus dados.",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@automacao"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Validar informações de preenchimento",
  "description": "",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "name": "preencho \u003cnome\u003e",
  "keyword": "E "
});
formatter.step({
  "name": "preencho o \u003cemail\u003e",
  "keyword": "E "
});
formatter.step({
  "name": "preencho a \u003csenha\u003e",
  "keyword": "E "
});
formatter.step({
  "name": "clico em cadastrar",
  "keyword": "Quando "
});
formatter.step({
  "name": "verifico se não consigo logar sem preenchimento de algum campo obrigatório através da \u003cmensagem\u003e",
  "keyword": "Então "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "nome",
        "email",
        "senha",
        "mensagem"
      ]
    },
    {
      "cells": [
        "\"\"",
        "\"filipegcsilva@yahoo.com.br\"",
        "\"12345678\"",
        "\"O campo Nome é obrigatório.\""
      ]
    },
    {
      "cells": [
        "\"Filipe Gonzaga Costa da Silva\"",
        "\"\"",
        "\"12345678\"",
        "\"O campo E-mail é obrigatório.\""
      ]
    },
    {
      "cells": [
        "\"Filipe Gonzaga Costa da Silva\"",
        "\"filipegcsilva@yahoo.com.br\"",
        "\"\"",
        "\"O campo Senha é obrigatório.\""
      ]
    },
    {
      "cells": [
        "\"Filipe\"",
        "\"filipegcsilva@yahoo.com.br\"",
        "\"12345678\"",
        "\"Por favor, insira um nome completo.\""
      ]
    },
    {
      "cells": [
        "\"Filipe Gonzaga Costa da Silva\"",
        "\"filipegcsilva\"",
        "\"12345678\"",
        "\"Por favor, insira um e-mail válido.\""
      ]
    },
    {
      "cells": [
        "\"Filipe Gonzaga Costa da Silva\"",
        "\"filipegcsilva@yahoo.com.br\"",
        "\"1234\"",
        "\"A senha deve conter ao menos 8 caracteres.\""
      ]
    }
  ]
});
formatter.background({
  "name": "Verificar preenchimento obrigatório de todos os campos",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "que estou no site da Stefanini",
  "keyword": "Dado "
});
formatter.match({
  "location": "CadastroUsuarios.que_estou_no_site_da_Stefanini()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar informações de preenchimento",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@automacao"
    }
  ]
});
formatter.step({
  "name": "preencho \"\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroUsuarios.preencho(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o \"filipegcsilva@yahoo.com.br\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroUsuarios.preencho_o(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho a \"12345678\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroUsuarios.preencho_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico em cadastrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastroUsuarios.clico_em_cadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verifico se não consigo logar sem preenchimento de algum campo obrigatório através da \"O campo Nome é obrigatório.\"",
  "keyword": "Então "
});
formatter.match({
  "location": "CadastroUsuarios.verifico_se_não_consigo_logar_sem_preenchimento_de_algum_campo_obrigatório_através_da(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Verificar preenchimento obrigatório de todos os campos",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "que estou no site da Stefanini",
  "keyword": "Dado "
});
formatter.match({
  "location": "CadastroUsuarios.que_estou_no_site_da_Stefanini()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar informações de preenchimento",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@automacao"
    }
  ]
});
formatter.step({
  "name": "preencho \"Filipe Gonzaga Costa da Silva\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroUsuarios.preencho(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o \"\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroUsuarios.preencho_o(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho a \"12345678\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroUsuarios.preencho_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico em cadastrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastroUsuarios.clico_em_cadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verifico se não consigo logar sem preenchimento de algum campo obrigatório através da \"O campo E-mail é obrigatório.\"",
  "keyword": "Então "
});
formatter.match({
  "location": "CadastroUsuarios.verifico_se_não_consigo_logar_sem_preenchimento_de_algum_campo_obrigatório_através_da(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Verificar preenchimento obrigatório de todos os campos",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "que estou no site da Stefanini",
  "keyword": "Dado "
});
formatter.match({
  "location": "CadastroUsuarios.que_estou_no_site_da_Stefanini()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar informações de preenchimento",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@automacao"
    }
  ]
});
formatter.step({
  "name": "preencho \"Filipe Gonzaga Costa da Silva\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroUsuarios.preencho(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o \"filipegcsilva@yahoo.com.br\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroUsuarios.preencho_o(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho a \"\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroUsuarios.preencho_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico em cadastrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastroUsuarios.clico_em_cadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verifico se não consigo logar sem preenchimento de algum campo obrigatório através da \"O campo Senha é obrigatório.\"",
  "keyword": "Então "
});
formatter.match({
  "location": "CadastroUsuarios.verifico_se_não_consigo_logar_sem_preenchimento_de_algum_campo_obrigatório_através_da(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Verificar preenchimento obrigatório de todos os campos",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "que estou no site da Stefanini",
  "keyword": "Dado "
});
formatter.match({
  "location": "CadastroUsuarios.que_estou_no_site_da_Stefanini()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar informações de preenchimento",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@automacao"
    }
  ]
});
formatter.step({
  "name": "preencho \"Filipe\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroUsuarios.preencho(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o \"filipegcsilva@yahoo.com.br\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroUsuarios.preencho_o(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho a \"12345678\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroUsuarios.preencho_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico em cadastrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastroUsuarios.clico_em_cadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verifico se não consigo logar sem preenchimento de algum campo obrigatório através da \"Por favor, insira um nome completo.\"",
  "keyword": "Então "
});
formatter.match({
  "location": "CadastroUsuarios.verifico_se_não_consigo_logar_sem_preenchimento_de_algum_campo_obrigatório_através_da(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Verificar preenchimento obrigatório de todos os campos",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "que estou no site da Stefanini",
  "keyword": "Dado "
});
formatter.match({
  "location": "CadastroUsuarios.que_estou_no_site_da_Stefanini()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar informações de preenchimento",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@automacao"
    }
  ]
});
formatter.step({
  "name": "preencho \"Filipe Gonzaga Costa da Silva\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroUsuarios.preencho(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o \"filipegcsilva\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroUsuarios.preencho_o(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho a \"12345678\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroUsuarios.preencho_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico em cadastrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastroUsuarios.clico_em_cadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verifico se não consigo logar sem preenchimento de algum campo obrigatório através da \"Por favor, insira um e-mail válido.\"",
  "keyword": "Então "
});
formatter.match({
  "location": "CadastroUsuarios.verifico_se_não_consigo_logar_sem_preenchimento_de_algum_campo_obrigatório_através_da(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Verificar preenchimento obrigatório de todos os campos",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "que estou no site da Stefanini",
  "keyword": "Dado "
});
formatter.match({
  "location": "CadastroUsuarios.que_estou_no_site_da_Stefanini()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar informações de preenchimento",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@automacao"
    }
  ]
});
formatter.step({
  "name": "preencho \"Filipe Gonzaga Costa da Silva\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroUsuarios.preencho(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o \"filipegcsilva@yahoo.com.br\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroUsuarios.preencho_o(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho a \"1234\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroUsuarios.preencho_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico em cadastrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastroUsuarios.clico_em_cadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verifico se não consigo logar sem preenchimento de algum campo obrigatório através da \"A senha deve conter ao menos 8 caracteres.\"",
  "keyword": "Então "
});
formatter.match({
  "location": "CadastroUsuarios.verifico_se_não_consigo_logar_sem_preenchimento_de_algum_campo_obrigatório_através_da(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Cadastrar usuário",
  "description": "",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "name": "preencho \u003cnome\u003e",
  "keyword": "E "
});
formatter.step({
  "name": "preencho o \u003cemail\u003e",
  "keyword": "E "
});
formatter.step({
  "name": "preencho a \u003csenha\u003e",
  "keyword": "E "
});
formatter.step({
  "name": "clico em cadastrar",
  "keyword": "Quando "
});
formatter.step({
  "name": "valido se foi cadastrado corretamente \u003cmensagem\u003e",
  "keyword": "Então "
});
formatter.step({
  "name": "excluo para gerenciamento de massa",
  "keyword": "Mas "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "nome",
        "email",
        "senha",
        "mensagem"
      ]
    },
    {
      "cells": [
        "\"Filipe Gonzaga Costa da Silva\"",
        "\"filipegcsilva@yahoo.com.br\"",
        "\"12345678\"",
        "\"Usuários cadastrados\""
      ]
    },
    {
      "cells": [
        "\"Luiz Gonzaga da Silva\"",
        "\"filipegcsilva@hotmail.com \"",
        "\"12345678\"",
        "\"Usuários cadastrados\""
      ]
    }
  ]
});
formatter.background({
  "name": "Verificar preenchimento obrigatório de todos os campos",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "que estou no site da Stefanini",
  "keyword": "Dado "
});
formatter.match({
  "location": "CadastroUsuarios.que_estou_no_site_da_Stefanini()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Cadastrar usuário",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@automacao"
    }
  ]
});
formatter.step({
  "name": "preencho \"Filipe Gonzaga Costa da Silva\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroUsuarios.preencho(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o \"filipegcsilva@yahoo.com.br\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroUsuarios.preencho_o(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho a \"12345678\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroUsuarios.preencho_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico em cadastrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastroUsuarios.clico_em_cadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido se foi cadastrado corretamente \"Usuários cadastrados\"",
  "keyword": "Então "
});
formatter.match({
  "location": "CadastroUsuarios.validoSeFoiCadastradoCorretamente(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "excluo para gerenciamento de massa",
  "keyword": "Mas "
});
formatter.match({
  "location": "CadastroUsuarios.excluo_para_gerenciamento_de_massa()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Verificar preenchimento obrigatório de todos os campos",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "que estou no site da Stefanini",
  "keyword": "Dado "
});
formatter.match({
  "location": "CadastroUsuarios.que_estou_no_site_da_Stefanini()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Cadastrar usuário",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@automacao"
    }
  ]
});
formatter.step({
  "name": "preencho \"Luiz Gonzaga da Silva\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroUsuarios.preencho(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o \"filipegcsilva@hotmail.com \"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroUsuarios.preencho_o(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho a \"12345678\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroUsuarios.preencho_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico em cadastrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastroUsuarios.clico_em_cadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido se foi cadastrado corretamente \"Usuários cadastrados\"",
  "keyword": "Então "
});
formatter.match({
  "location": "CadastroUsuarios.validoSeFoiCadastradoCorretamente(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "excluo para gerenciamento de massa",
  "keyword": "Mas "
});
formatter.match({
  "location": "CadastroUsuarios.excluo_para_gerenciamento_de_massa()"
});
formatter.result({
  "status": "passed"
});
});