# Shipment Tracking API

> RESTful API for order fulfillment, delivery tracking, and multi-role logistics management.

---

## 🚧 Status do Projeto

![Status](https://img.shields.io/badge/status-in__development-yellow)
![Node.js](https://img.shields.io/badge/Node.js-20.x-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)

> ⚠️ **Aviso:** Este projeto está em **desenvolvimento ativo (fase inicial)**. As rotas, esquemas do banco de dados e regras de negócio estão sendo implementados de forma incremental.

---

## 📌 Sobre o Projeto

O **shipment-tracking-api** é um serviço backend voltado para a gestão e o acompanhamento de entregas de encomendas em tempo real. A aplicação foi concebida para conectar vendedores e clientes através de um fluxo completo de despacho de pedidos, atualização de status e auditoria de movimentações de transporte.

### Core Features (Em implementação)

- **Controle de Acesso Baseado em Papéis (RBAC):** Níveis de permissão distintos para os perfis de `Seller` (Vendedor) e `Customer` (Cliente).
- **Gestão de Pedidos:** Criação e vínculo de encomendas aos respectivos clientes.
- **Ciclo de Vida do Envio:** Controle de estados da encomenda (`PROCESSING`, `SHIPPED`, `DELIVERED`).
- **Histórico de Movimentações:** Rastreabilidade detalhada dos eventos de transporte (ex: _"Objeto saiu para entrega"_, _"Em trânsito"_).

---

## 🛠️ Tech Stack

- **Linguagem:** TypeScript / Node.js
- **Framework Web:** Express
- **ORM & Banco de Dados:** Prisma ORM, PostgreSQL (via Docker)
- **Validação de Dados:** Zod

---

## 📂 Estrutura de Arquivos (Inicial)

```text
shipment-tracking-api/
├── src/
│ ├── app.ts # Configuração das instâncias do Express e middlewares
│ └── server.ts # Ponto de entrada e inicialização do servidor HTTP
├── package.json
├── tsconfig.json
└── README.md
```

---

## ⚙️ Como Executar o Projeto Localmente

### Pré-requisitos

- Node.js (v18 ou superior)
- npm ou pnpm

### Passos

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/shipment-tracking-api.git
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd shipment-tracking-api
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Execute o servidor em modo de desenvolvimento:
   ```bash
   npm run dev
   ```

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
