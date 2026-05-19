# Geektopia - Site oficial

Migracao do portal para React + Vite com visual moderno, interativo e responsivo.

## Stack

- React 18
- Vite 5
- CSS custom com identidade visual inspirada no banner
- Formspree para contato

## Desenvolvimento local

1. Instale dependencias:

```bash
npm install
```

2. Rode o ambiente local:

```bash
npm run dev
```

3. Build de producao:

```bash
npm run build
```

4. Preview do build:

```bash
npm run preview
```

## Estrutura principal

- `src/App.jsx`: layout, dados das edicoes, contador e interacoes
- `src/styles.css`: design system, componentes visuais e responsividade
- `public/_redirects`: fallback SPA para Netlify
- `netlify.toml`: configuracao de build/publicacao

## Deploy Netlify

O projeto ja esta pronto para deploy com:

- Build command: `npm run build`
- Publish directory: `dist`

## Conteudo editavel

- Data do evento: variavel `eventDate` em `src/App.jsx`
- Edicoes e fotos: array `editions` em `src/App.jsx`
- Cores e tipografia: variaveis CSS em `src/styles.css`
