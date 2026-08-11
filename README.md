# Site institucional — Dra. Mabele Sanches

## Personalização rápida

| Item | Onde alterar |
| --- | --- |
| Logo | Substitua o bloco `.brand` em `index.html` por uma imagem em `assets/images/` e ajuste o `alt`. |
| Telefone e WhatsApp | Busque por `5511000000000` e `(11) 0000-0000` em `index.html`. Use o número no formato internacional sem símbolos no link do WhatsApp. |
| Instagram | Troque `https://instagram.com/` pelo perfil da clínica. |
| Fotos | Adicione os arquivos otimizados em `assets/images/`; substitua as áreas marcadas como foto e os fundos `hero.jpg`/`cta.jpg`. Prefira WebP/AVIF e inclua `alt` descritivo. |
| Depoimentos | Edite cada artigo `.testimonial` em `index.html`. Use somente relatos autorizados. |
| Mapa | Atualize a URL do iframe e o link “Como chegar” na seção `#contato`. |
| Cores | Altere as variáveis no início de `style.css`: `--gold`, `--paper`, `--ink` e `--sand`. |
| Domínio | Atualize canonical, Open Graph, `robots.txt` e `sitemap.xml` antes do deploy. |

## Publicação segura

Os arquivos em `security/` contêm exemplos para Nginx, Apache, Netlify e Vercel. Copie a configuração adequada para a raiz/configuração do provedor no momento do deploy. Leia `security/SECURITY.md` antes de ativar cabeçalhos em produção.

O projeto não usa dependências JavaScript externas. As animações de entrada foram implementadas com `IntersectionObserver`, preservando uma Content Security Policy sem `unsafe-inline` ou `unsafe-eval`.
