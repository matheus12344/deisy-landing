# 🚀 Guia de Deploy - Landing Page Deisy Ribeiro

## ✅ Build Local Concluído

O projeto foi testado localmente e está pronto para deploy:

```bash
npm run build
# ✅ Compiled successfully in 2000ms
# ✅ Linting and checking validity of types
# ✅ Collecting page data
# ✅ Generating static pages (5/5)
# ✅ Collecting build traces
# ✅ Finalizing page optimization
```

## 🌐 Opções de Deploy

### 1. **Vercel (Recomendado)**

**Vantagens:**
- ✅ Deploy automático
- ✅ SSL gratuito
- ✅ CDN global
- ✅ Integração com Git
- ✅ Analytics incluído
- ✅ Domínio personalizado

**Passos:**

#### Opção A: Via Interface Web
1. Acesse [vercel.com](https://vercel.com)
2. Faça login com GitHub/GitLab/Bitbucket
3. Clique em "New Project"
4. Importe o repositório
5. Clique em "Deploy"

#### Opção B: Via CLI
```bash
# Login no Vercel
vercel login

# Deploy
vercel

# Para produção
vercel --prod
```

### 2. **Netlify**

**Vantagens:**
- ✅ Deploy automático
- ✅ SSL gratuito
- ✅ Formulários incluídos
- ✅ Funções serverless

**Passos:**
1. Acesse [netlify.com](https://netlify.com)
2. Faça login
3. Arraste a pasta `.next` ou conecte com Git
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

### 3. **Railway**

**Vantagens:**
- ✅ Deploy simples
- ✅ SSL automático
- ✅ Integração com Git

**Passos:**
1. Acesse [railway.app](https://railway.app)
2. Conecte com GitHub
3. Selecione o repositório
4. Configure como projeto Node.js

### 4. **Render**

**Vantagens:**
- ✅ Deploy automático
- ✅ SSL gratuito
- ✅ Integração com Git

**Passos:**
1. Acesse [render.com](https://render.com)
2. Crie uma nova Web Service
3. Conecte com GitHub
4. Configure:
   - Build Command: `npm run build`
   - Start Command: `npm start`

## 🔧 Configurações Específicas

### Variáveis de Ambiente (Opcional)

Crie um arquivo `.env.local` para configurações:

```env
# WhatsApp da Deisy
NEXT_PUBLIC_WHATSAPP_NUMBER=5511992371810

# Google Analytics (opcional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Meta tags
NEXT_PUBLIC_SITE_URL=https://deisy-ribeiro.vercel.app
```

### Domínio Personalizado

Após o deploy, você pode configurar um domínio personalizado:

1. **Vercel:** Settings > Domains
2. **Netlify:** Domain settings
3. **Railway:** Settings > Domains

## 📊 Monitoramento

### Vercel Analytics
- Acesse o dashboard do Vercel
- Vá em Analytics
- Veja métricas de performance

### Google Analytics
Adicione o código no `layout.tsx`:

```tsx
// Google Analytics
<script
  async
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
/>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
    `,
  }}
/>
```

## 🚀 Comandos Úteis

```bash
# Build local
npm run build

# Teste local da build
npm start

# Deploy no Vercel
vercel

# Deploy em produção
vercel --prod

# Ver logs
vercel logs

# Listar deployments
vercel ls
```

## 📱 PWA (Progressive Web App)

Para transformar em PWA, adicione no `next.config.ts`:

```tsx
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
});

module.exports = withPWA(nextConfig);
```

## 🔒 Segurança

O projeto já inclui:
- ✅ Headers de segurança
- ✅ CSP (Content Security Policy)
- ✅ XSS Protection
- ✅ Frame Options

## 📈 Performance

Métricas esperadas:
- **Lighthouse Score:** 90+
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Cumulative Layout Shift:** < 0.1

## 🆘 Suporte

Se encontrar problemas:

1. **Build falha:** Verifique logs em `npm run build`
2. **Deploy falha:** Verifique configurações no dashboard
3. **Performance:** Use Lighthouse para análise
4. **Domínio:** Verifique configurações DNS

---

**🎉 Seu site estará online em minutos!** 