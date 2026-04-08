# 🌌 AuraStream - Catálogo de Filmes Premium

O **AuraStream** é um aplicativo mobile (com suporte web) desenvolvido em **React Native** e **Expo**. O projeto foi criado como um MVP (Mínimo Produto Viável) para demonstrar habilidades em navegação, componentização avançada e estilização com foco em UI/UX moderna.

## 🎨 Identidade Visual & Design
O aplicativo utiliza uma estética **Dark Mode** com a cor **Ametista (Purple Neon)** como destaque. 
- **Glassmorphism:** Uso de transparências nos cards e botões para um visual futurista.
- **Grid Dinâmico:** Layout de duas colunas otimizado para visualização de posters.
- **Curadoria:** Seleção focada em obras de alto impacto visual, como *Spider-Verse* e *Entergalactic*.

## 🛠️ O que foi desenvolvido?

### 1. Navegação Dinâmica (React Navigation)
Foi implementado um fluxo de navegação via **Stack**, permitindo que o usuário transite de forma fluida entre a listagem principal e a tela de detalhes de cada filme, passando dados em tempo real.

### 2. Componentização de Elite
- **MovieCard:** Um componente inteligente que renderiza posters, notas (badges) e títulos, adaptando-se automaticamente ao layout de grid.
- **Custom Button:** Botões estilizados com sombras e efeitos de hover (no PC).

### 3. Integração de Dados (Service API)
Criação de um serviço de dados simulado (`api.js`) que centraliza:
- Informações dos filmes (Sinopses detalhadas, anos e notas).
- Paleta de cores global para facilitar a manutenção da identidade visual.
- URLs dinâmicas para posters vindos do banco de dados do TMDB.

### 4. Suporte Multiplataforma
O projeto foi configurado para rodar tanto em dispositivos móveis (Android/iOS via Expo Go) quanto no navegador, com ajustes de responsividade para garantir que as imagens apareçam corretamente em qualquer tela.

## 🚀 Tecnologias
- **React Native** (Core)
- **Expo** (Framework & CLI)
- **React Navigation v6** (Navegação entre telas)
- **JavaScript (ES6+)**

---

### 📖 Como rodar o projeto
1. Clone este repositório.
2. No terminal, entre na pasta: `cd CatalogoFilmes`
3. Instale as dependências: `npm install`
4. Inicie o app: `npx expo start --web` (para PC) ou `npx expo start` (para celular).

---
*Projeto desenvolvido para fins acadêmicos - 2024*