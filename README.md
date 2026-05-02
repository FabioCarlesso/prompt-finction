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
7. Clique em **Limpar Campos** para resetar todos os campos e o resultado gerado.

> **Atenção ao rodar localmente:** o projeto usa ES Modules (`type="module"`), que não funcionam via protocolo `file://`. Para rodar localmente, use um servidor HTTP:
> ```
> npx serve .
> # ou
> python3 -m http.server
> ```

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
| `java-spring-boot-review` | Review | Code review de aplicação Java Spring Boot |
| `activity-implementation` | Desenvolvimento | Template completo para implementar atividade/issue com fluxo de contexto, execução, validação e finalização |
| `github-issue` | Desenvolvimento | Criação de issue no GitHub com objetivo, contexto, escopo, critérios de aceite e validação |

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

Crie ou edite um arquivo em `js/templates/` (por categoria) e exporte o objeto com os modelos. Em seguida, importe esse arquivo em `js/templates.js` e faça o merge das coleções.

```js
// js/templates/meusTemplates.js
export const meusTemplates = {
  "meu-modelo": {
    label: "Nome amigável",
    category: "Categoria",
    content: `Conteúdo do template.

**Tarefa:** {{TASK}}

**Branch:** {{BRANCH}}

**Observações:** {{NOTES}}`
  }
};

// js/templates.js — adicione o import e inclua a coleção no array templateCollections
import { developmentTemplates } from "./templates/developmentTemplates.js";
import { qualityTemplates } from "./templates/qualityTemplates.js";
import { documentationTemplates } from "./templates/documentationTemplates.js";
import { reviewTemplates } from "./templates/reviewTemplates.js";
import { activityTemplates } from "./templates/activityTemplates.js";
import { meusTemplates } from "./templates/meusTemplates.js";

const templateCollections = [
  { name: "developmentTemplates", templates: developmentTemplates },
  { name: "qualityTemplates", templates: qualityTemplates },
  { name: "documentationTemplates", templates: documentationTemplates },
  { name: "reviewTemplates", templates: reviewTemplates },
  { name: "activityTemplates", templates: activityTemplates },
  { name: "meusTemplates", templates: meusTemplates }
];
```

O novo modelo aparecerá automaticamente no dropdown da aplicação. A chave de cada template deve ser única; se duas coleções exportarem a mesma chave, a aplicação interrompe o carregamento com uma mensagem indicando as coleções em conflito.

---

## Testes

Execute a suíte automatizada com:

```sh
npm test
```

---

## Estrutura do projeto

```
prompt-finction/
├── index.html        # Estrutura da página
├── css/
│   └── style.css     # Layout e estilos responsivos
├── js/
│   ├── app.js                        # Lógica da aplicação
│   ├── templates.js                  # Agregador de modelos
│   └── templates/
│       ├── developmentTemplates.js   # Categoria: Desenvolvimento
│       ├── qualityTemplates.js       # Categoria: Qualidade
│       ├── documentationTemplates.js # Categoria: Documentação
│       ├── reviewTemplates.js        # Categoria: Review
│       └── activityTemplates.js      # Templates de atividade
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
- [x] Botão "Limpar campos"
- [ ] Botão "Baixar como Markdown"
- [ ] Modo claro/escuro
- [ ] Busca por modelo
- [ ] Filtro por categoria
- [ ] Templates personalizados pela interface
- [ ] Exportar/importar templates em JSON
- [ ] Suporte a inglês
- [ ] Geração automática de nome de branch
- [ ] Versão PWA
