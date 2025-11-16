# ConsultorSPA - Gerenciamento de Consultores

Este é um projeto de Single Page Application (SPA) desenvolvido com Angular para o gerenciamento de consultores.

## Visão Geral do Projeto

O objetivo principal é fornecer uma interface para realizar operações de CRUD (Create, Read, Update, Delete) para uma lista de consultores. A arquitetura do projeto foi planejada para ser moderna, escalável e de fácil manutenção, utilizando as práticas mais recentes do ecossistema Angular.

## Detalhes Técnicos

*   **Framework**: [Angular](https://angular.dev/)
*   **Arquitetura**: **Standalone Components**. O projeto utiliza a arquitetura baseada em componentes standalone, que simplifica a estrutura da aplicação, eliminando a necessidade de `NgModules` na maioria dos casos.
*   **Roteamento**: O roteamento é configurado para carregar componentes de forma preguiçosa (*Lazy Loading*) usando `loadComponent`, o que melhora o desempenho inicial da aplicação.
*   **Estilização**: CSS puro e modularizado por componente.
*   **Modelagem de Dados**: As interfaces para os modelos de dados (como `Consultor` e `AreaDeAtuacao`) estão localizadas em `src/app/models`.

## Servidor de Desenvolvimento

Para iniciar o servidor de desenvolvimento local, execute o comando abaixo e acesse `http://localhost:4200/` no seu navegador.

```bash
ng serve
```

O aplicativo será recarregado automaticamente se você alterar qualquer um dos arquivos de origem.

## Comandos Úteis do Angular CLI

O Angular CLI inclui ferramentas poderosas para auxiliar no desenvolvimento.

### Gerando Novos Componentes

Para gerar um novo componente, execute:

```bash
ng generate component nome-do-componente
```

Você também pode usar outros esquemas como `directive`, `pipe`, `service`, `class`, `guard`, `interface`, `enum` e `module`.

### Construindo o Projeto (Build)

Para compilar e construir o projeto para produção, execute:

```bash
ng build
```

Os artefatos da compilação serão armazenados no diretório `dist/`.

### Executando Testes Unitários

Para executar os testes unitários com o [Karma](https://karma-runner.github.io), use o comando:

```bash
ng test
```

## Recursos Adicionais

Para mais informações sobre o Angular CLI, visite a [documentação oficial](https://angular.dev/tools/cli).
