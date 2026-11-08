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
