# Cabeçalhos de segurança

Use **uma** configuração conforme a hospedagem: inclua `nginx-security.conf` no bloco `server`, `apache-security.conf` no VirtualHost/.htaccess (com `mod_headers`), copie `netlify.toml` para a raiz em Netlify ou copie `vercel.json` para a raiz em Vercel.

O CSP restringe scripts ao próprio site, fontes ao Google Fonts e frames ao Google Maps. `X-Frame-Options` e `frame-ancestors` bloqueiam clickjacking; `nosniff` evita inferência de MIME; a política de permissões desliga APIs não usadas. HSTS deve ser ativado apenas depois de confirmar HTTPS em todo o domínio.

Antes de publicar integrações novas (Analytics, formulário ou Maps API), adicione somente o domínio necessário ao CSP e nunca exponha chaves no front-end.
