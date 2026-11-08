# Convite · Olívia 15 anos

- `index.html`: entrada com animação de carregamento, cenário e cortinas.
- `menu.html`: cópia do menu no estado final, sem animação de introdução. Os links “Voltar ao menu” das páginas secundárias devem apontar para `menu.html`.
- `styles.css`: estilos compartilhados pelas duas páginas, incluindo os ajustes para mobile.
- `script.js`: carregamento dos recursos, sequência da introdução e ações dos botões.

Ao mudar o conteúdo do menu, mantenha o HTML das duas páginas atualizado. A apresentação e os comportamentos são compartilhados.

Os próximos recursos obrigatórios podem ser registrados em `requiredAssets`, no `script.js`. As imagens presentes no HTML já são aguardadas automaticamente.

Para testar a partir da raiz do superprojeto:

```sh
python3 -m http.server 8080 --directory invitation
```

Abra `http://localhost:8080/src/` ou `http://localhost:8080/src/menu.html`. Servir a pasta `invitation` mantém disponíveis as imagens em `generated/`.

## Prévia do link no WhatsApp

As seis páginas contêm metadados Open Graph diretamente no `<head>`, sem depender da animação ou de JavaScript. A página inicial identifica o convite como “Olívia • 15 anos”, com descrição e URL canônica do domínio.

A imagem de compartilhamento está em `static/img/convite.jpg`: JPG de 1200 × 630 pixels, com cerca de 333 KB. A URL configurada é `https://olivia.brasidata.com.br/static/img/convite.jpg`. O arquivo é servido pelo GitHub Pages, independentemente do servidor Django da área do convidado.

A arte foi criada com ImageGen a partir do logo e do jardim prateado existentes. Prompt: capa horizontal para compartilhamento, logo “Olívia / 15 Anos” centralizado, azul-marinho e prata fria, rosas, estrelas e lua, sem botões ou textos adicionais. A imagem é usada somente nos metadados, sem mudar a apresentação da página.

Após publicar, confira a URL da imagem e compartilhe `https://olivia.brasidata.com.br/?v=2` para testar uma nova URL. A prévia efetivamente mostrada depende do cache e do processamento do WhatsApp; os arquivos precisam estar publicados para que o aplicativo os leia.
