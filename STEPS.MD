Criação do App Nextjs: npx create-...
Instalação do Prisma
Criação do schema.Prisma
Geração das Tabelas : yarn prisma migrate dev
Instação do graphql : yarn add graphql apollo-server-micro micro micro-cors
Instalação do types micro-cors: yarn add -D @types/micro-cors
Criar pasta raiz graphql ( organizar tudo relacionado ao graphql )

- context ( oque o graphql pode pegar do prisma) - oque solicitar
- resolvers ( como ocorre a busca ) como solicitar
- schema- ( nome: typeDefs.ts)

Instalar biblioteca: yarn add @graphql-codegen/cli ( gera types e outras informações exigidas no resolvers (parent, args e ctx))

Rodar comando: npx graphql-codegen init ( gera arquivo de configuração)
----------------------------- Execução e perguntas respondidas -------------------
Welcome to GraphQL Code Generator!
Answer few questions and we will setup everything for you.

? What type of application are you building? Backend - API or server
? Where is your schema?: (path or url) ./graphql/typeDefs.ts
? Pick plugins: TypeScript (required by other typescript plugins)
? Where to write the output: ./graphql/resolvers-types.ts
? Do you want to generate an introspection file? No
? How to name the config file? codegen.ts
? What script in package.json should run the codegen? codegen
Fetching latest versions of selected plugins...

Config file generated at codegen.ts

------------- arquivo finalizado ---------------------------------------------------------------------------------

Instalar a bilioteca: yarn add -D @graphql-codegen/typescript-resolvers

Rodar comando para geração: codegen...
yarn codegen

yarn add @apollo/client

Refatorando projeto para Graphql ( yoga / pothos )

yarn add graphql graphql-yoga

yarn add @pothos/plugin-prisma @pothos/core

yarn add @pothos/plugin-relay

Referência: https://www.prisma.io/blog/fullstack-nextjs-graphql-prisma-2-fwpc6ds155
