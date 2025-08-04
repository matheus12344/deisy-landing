# Landing Page - Deisy Ribeiro Psicóloga

Uma landing page moderna e responsiva para a psicóloga Deisy Ribeiro, desenvolvida com Next.js, TypeScript e Tailwind CSS.

## 🎨 Características

- **Design Moderno**: Interface limpa e profissional com paleta de cores verde musgo
- **Responsivo**: Otimizado para todos os dispositivos
- **Animações**: Efeitos visuais suaves e atrativos
- **Integração WhatsApp**: Redirecionamento direto para agendamento via WhatsApp
- **Modal de Agendamento**: Interface intuitiva para seleção de serviços, data e horário
- **Acessibilidade**: Foco em usabilidade e navegação clara

## 🚀 Tecnologias Utilizadas

- **Next.js 14**: Framework React com App Router
- **TypeScript**: Tipagem estática para maior confiabilidade
- **Tailwind CSS**: Framework CSS utilitário
- **React Hooks**: Gerenciamento de estado
- **CSS Animations**: Animações personalizadas

## 📱 Funcionalidades

### ✅ Implementadas
- [x] Header com navegação
- [x] Seção hero com call-to-action
- [x] Seção de serviços
- [x] Seção sobre a psicóloga
- [x] Seção de contato
- [x] Modal de agendamento
- [x] Integração com WhatsApp
- [x] Animações e transições
- [x] Design responsivo

### 🔄 Próximas Implementações
- [ ] Sistema de agendamento online completo
- [ ] Integração com Google Calendar
- [ ] Sistema de pagamentos
- [ ] Área administrativa
- [ ] Blog/Artigos
- [ ] Depoimentos de pacientes
- [ ] Chat online

## 🛠️ Configuração do Projeto

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone [url-do-repositorio]
cd Deisy-Landing
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em desenvolvimento:
```bash
npm run dev
```

4. Acesse [http://localhost:3000](http://localhost:3000)

## 📋 Configurações

### Número do WhatsApp
Atualize o número do WhatsApp no arquivo `src/app/page.tsx`:
```typescript
const phoneNumber = "5511992371810"; // Número da Deisy
```

### Configurações de Agendamento
Edite o arquivo `src/config/booking.ts` para personalizar:
- Serviços oferecidos
- Horários de atendimento
- Preços
- Mensagens padrão

## 🔧 Integrações Futuras

### Sistema de Agendamento Online

#### Opção 1: Calendly
```typescript
// Em src/config/booking.ts
integrations: {
  externalBooking: {
    enabled: true,
    provider: "calendly",
    url: "https://calendly.com/deisy-ribeiro"
  }
}
```

#### Opção 2: Google Calendar API
```typescript
// Configurar no Google Cloud Console
integrations: {
  googleCalendar: {
    enabled: true,
    calendarId: "deisy.ribeiro@gmail.com",
    apiKey: process.env.GOOGLE_API_KEY
  }
}
```

#### Opção 3: Sistema Customizado
- Implementar API REST própria
- Banco de dados (PostgreSQL/MongoDB)
- Sistema de notificações
- Dashboard administrativo

### Sistema de Pagamentos

#### Stripe
```bash
npm install @stripe/stripe-js
```

#### Mercado Pago
```bash
npm install mercadopago
```

### WhatsApp Business API
```bash
npm install whatsapp-web.js
```

## 🎨 Personalização

### Cores
A paleta de cores está definida em:
- Verde musgo principal: `#5a7c3a`
- Verde escuro: `#2d5016`
- Verde claro: `#a8c090`
- Fundo: `#faf9f6`

### Fontes
- Inter (Google Fonts)

### Animações
As animações estão definidas no arquivo `src/app/page.tsx` usando CSS-in-JS.

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte o repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático

### Netlify
1. Build: `npm run build`
2. Publish directory: `out`

## 📞 Contato

Para suporte ou dúvidas sobre o projeto:
- Email: [seu-email]
- WhatsApp: [seu-numero]

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

**Desenvolvido com ❤️ para Deisy Ribeiro**
