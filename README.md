# Prompt Fiction

Aplicação web para gerar prompts reutilizáveis a partir de modelos.

Funciona no navegador, sem instalação, sem backend e sem dependências externas.

## Acesso

Publicado no GitHub Pages: [https://fabiocarlesso.github.io/prompt-finction](https://fabiocarlesso.github.io/prompt-finction)

---

## Como usar

1. Acesse a página pelo navegador (celular ou desktop).
2. Selecione o modelo de prompt desejado.
3. Preencha a descrição da tarefa (obrigatório).
4. Preencha os campos opcionais conforme necessário.
5. Clique em **Gerar Prompt**.
6. Clique em **Copiar** para copiar o resultado.

---

## Modelos disponíveis

| Modelo | Categoria | Descrição |
|---|---|---|
| `feature` | Desenvolvimento | Implementação de nova feature |
| `refactor` | Desenvolvimento | Refatoração de código existente |
| `bugfix` | Desenvolvimento | Correção de bug |
| `backend-review` | Review | Code review de backend |
| `frontend-review` | Review | Code review de frontend |
| `tests` | Qualidade | Criação de testes |
| `docs` | Documentação | Criação ou atualização de documentação |
| `pr-review` | Review | Review de Pull Request |
| `activity-implementation` | Desenvolvimento | Template completo para implementar atividade/issue com fluxo de contexto, execução, validação e finalização |

---

## Variáveis dos templates

Os templates utilizam as seguintes variáveis, substituídas automaticamente ao gerar o prompt:

| Variável | Campo correspondente |
|---|---|
| `{{TASK}}` | Descrição da tarefa (obrigatório) |
| `{{BRANCH}}` | Nome da branch |
| `{{LINK}}` | Link da issue ou PR |
| `{{TECH}}` | Tecnologia principal |
| `{{NOTES}}` | Observações adicionais |

---

## Como adicionar novos templates

Edite o arquivo `js/templates.js` e adicione uma nova entrada seguindo o padrão:

```js
meu-modelo: {
  label: "Nome amigável",
  category: "Categoria",
  content: `Conteúdo do template.

**Tarefa:** {{TASK}}

**Branch:** {{BRANCH}}

**Observações:** {{NOTES}}`
}
```

O novo modelo aparecerá automaticamente no dropdown da aplicação.

---


## Template de Issue no GitHub

O repositório inclui um template de issue para abertura de atividades em `.github/ISSUE_TEMPLATE/atividade.yml`.

Esse template padroniza o preenchimento de:
- contexto;
- objetivo;
- critérios de aceite;
- referências;
- tecnologia principal;
- observações adicionais.

Também foi incluído `.github/ISSUE_TEMPLATE/config.yml` para desabilitar issues em branco e direcionar dúvidas para Discussions.

---

## Estrutura do projeto

```
prompt-finction/
├── index.html        # Estrutura da página
├── css/
│   └── style.css     # Layout e estilos responsivos
├── js/
│   ├── app.js        # Lógica da aplicação
│   └── templates.js  # Modelos de prompt
├── .nojekyll         # Desabilita processamento Jekyll no GitHub Pages
└── README.md
```

---

## Como publicar no GitHub Pages

1. Faça o push dos arquivos para a branch `main`.
2. No repositório do GitHub, acesse **Settings → Pages**.
3. Em **Source**, selecione a branch `main` e a pasta `/ (root)`.
4. Clique em **Save**.
5. Aguarde alguns minutos e acesse a URL gerada.

---

## Tecnologias

- HTML
- CSS
- JavaScript puro
- GitHub Pages

---

## Roadmap

- [ ] Salvar último modelo usado no `localStorage`
- [ ] Histórico dos últimos prompts gerados
- [ ] Botão "Limpar campos"
- [ ] Botão "Baixar como Markdown"
- [ ] Modo claro/escuro
- [ ] Busca por modelo
- [ ] Filtro por categoria
- [ ] Templates personalizados pela interface
- [ ] Exportar/importar templates em JSON
- [ ] Suporte a inglês
- [ ] Geração automática de nome de branch
- [ ] Versão PWA
