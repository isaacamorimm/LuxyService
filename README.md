# 🛡️ Luxy Service - Site Institucional Oficial

Repositório oficial do front-end do site corporativo da **Luxy Service**. O projeto foi arquitetado para ser uma Single Page Application (SPA) de alta performance, focada na apresentação de serviços de segurança (CFTV, controle de acesso) e na conversão estruturada de leads comerciais.

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
├── components/     # Componentes visuais isolados (Header, Footer, Buttons, Cards)
│   ├── Layout/     # Componentes de estrutura de página
│   └── ...         # Seções específicas (Hero, ContactSection, ServicesSection)
├── hooks/          # Hooks customizados do React (ex: useFetch.js)
├── lib/            # Configurações de bibliotecas de terceiros e utilitários base
├── pages/          # Componentes de nível de rota (Home, Services, CftvIp)
├── services/       # Camada de integração com APIs (api.js)
├── store/          # Gerenciamento de estado global com Zustand (useStore.js)
└── utils/          # Funções utilitárias puras (cn.js, format.js)
