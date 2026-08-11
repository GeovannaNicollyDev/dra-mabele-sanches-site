# Guia de segurança

## Princípios aplicados

- JavaScript sem `eval`, `new Function`, `document.write` ou inserção de dados não confiáveis via `innerHTML`.
- CSP restritiva, HTTPS e cabeçalhos contra clickjacking e MIME sniffing.
- Nenhuma chave, token ou credencial está no repositório.
- Links externos usam HTTPS e `rel="noopener noreferrer"`.

## Antes da publicação

1. Troque os números de telefone, URLs, domínio canônico e imagens de demonstração.
2. Hospede as fontes localmente se possível e então remova seus domínios do CSP.
3. Valide o CSP em modo Report-Only antes de aplicá-lo, principalmente após adicionar Analytics.
4. Mantenha dependências inexistentes/minimizadas; qualquer backend futuro deve validar, normalizar e escapar toda entrada do usuário no servidor.
5. Configure HTTPS, HSTS e renovação de certificado no provedor.

## Reporte de vulnerabilidades

Defina um e-mail de segurança no domínio da clínica antes do lançamento. Não publique dados de pacientes ou prontuários em nenhum canal público.
