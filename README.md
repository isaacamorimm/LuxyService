# 🛡️ Luxy Service - Site Institucional Oficial

Repositório oficial do front-end do site corporativo da **Luxy Service**. O projeto foi arquitetado para ser uma Single Page Application (SPA) de alta performance, focada na apresentação de serviços de segurança (CFTV, controle de acesso, infraestrutura) e na conversão estruturada de leads comerciais.

---

## 🚀 Stack Tecnológica

O projeto foi construído utilizando as ferramentas mais modernas do ecossistema JavaScript para garantir escalabilidade, performance e facilidade de manutenção:

* **Core:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
* **Roteamento:** [React Router DOM v7](https://reactrouter.com/)
* **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/) + Utilitários (`clsx`, `tailwind-merge`)
* **Animações e Micro-interações:** [Framer Motion](https://www.framer.com/motion/) + `tailwindcss-animate`
* **Gerenciamento de Estado:** [Zustand](https://zustand-demo.pmnd.rs/)
* **Formulários e Validação:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
* **Requisições HTTP:** [Axios](https://axios-http.com/)
* **Ícones:** [Lucide React](https://lucide.dev/)

---

## 📂 Arquitetura e Estrutura de Pastas

O projeto segue uma arquitetura modularizada, separando as responsabilidades de negócio, interface e integração.

```text
src/
├── assets/         # Imagens estáticas, SVGs e ícones globais
├── components/     # Componentes visuais genéricos e seções (Header, Footer, Hero, ContactSection, etc.)
│   ├── Layout/     # Componentes de estrutura base de página principal
│   ├── Reveal/     # Wrapper de animação isolado usando Framer Motion
│   └── ...         
├── hooks/          # Hooks customizados do React
├── lib/            # Configurações de bibliotecas de terceiros (ex: shadcn/ui utils)
├── pages/          # Páginas da aplicação e instâncias de roteamento (Home, Portfolio, Services, SobreNos, CftvIp)
├── services/       # Camada de integração com APIs ou serviços externos
├── store/          # Gerenciamento de estado global com Zustand
└── utils/          # Funções utilitárias puras
```

---

## ✨ Funcionalidades Principais

* **Navegação SPA:** Roteamento rápido e persistente utilizando o `react-router-dom`.
* **Animações Avançadas:** Scroll animations (`Reveal` component) e page transitions suaves implementadas com `framer-motion`.
* **Tratamento de Formulários Robusto:** Formulário de contato otimizado com `react-hook-form` e tipagem estrita com schemas do `zod`.
* **Design Responsivo e Moderno:** Interface 100% responsiva construída *mobile-first* com `Tailwind CSS`.
* **Gerenciamento Global Eficiente:** Controle de estado do menu e outras interações com `zustand`, evitando *prop drilling*.
* **Otimização de Performance:** Assets lazy-loaded e build altamente otimizado via `Vite`.

---

## 💻 Como Executar o Projeto Localmente

### Pré-requisitos
Certifique-se de ter o **Node.js** (versão 18+ recomendada) e um gerenciador de pacotes (`npm`, `yarn` ou `pnpm`) instalados na sua máquina.

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd LuxyService
```

2. Instale as dependências. O projeto utiliza preferencialmente o `pnpm` (dado o arquivo `pnpm-lock.yaml`), mas você pode usar o pacote manager de sua preferência:
```bash
pnpm install
```

3. Inicie o servidor de desenvolvimento:
```bash
pnpm dev
```

4. Acesse a aplicação no seu navegador: `http://localhost:5173`

---

## 🛠️ Scripts Disponíveis

No diretório do projeto, você pode executar os comandos listados no arquivo `package.json`:

- `pnpm run dev`: Executa a aplicação em modo de desenvolvimento local com hot-reloading.
- `pnpm run build`: Cria a versão de produção otimizada dentro da pasta `dist/`.
- `pnpm run lint`: Roda o linter (ESLint) para analisar sintaticamente e consertar problemas de formatação no código.
- `pnpm run preview`: Inicia um servidor web web local e serve o conteúdo estático da pasta de `/dist` para testar os artefatos de build de produção localmente.
