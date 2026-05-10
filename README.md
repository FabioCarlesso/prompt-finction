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
| `angular-review` | Review | Code review de PR Angular |
| `brag-prompt` | Desenvolvimento | Organiza conquistas/atividades anotadas no WhatsApp em categorias (saúde, família, espiritual, estudo, lazer, profissional, financeiro) |

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

Cada template possui seu próprio arquivo em `js/templates/`, nomeado conforme o identificador do template (label). Siga os passos abaixo:

**1. Crie o arquivo do template** em `js/templates/meu-modelo.js`:

```js
// js/templates/meu-modelo.js
export const meuModelo = {
  label: "Nome amigável",
  category: "Categoria",
  content: `Conteúdo do template.

**Tarefa:** {{TASK}}

**Branch:** {{BRANCH}}

**Observações:** {{NOTES}}`
};
```

**2. Registre o template** em `js/templates/index.js`:

```js
import { meuModelo } from "./meu-modelo.js";

export const templateCollections = [
  // ... templates existentes ...
  { name: "meuModelo", templates: { "meu-modelo": meuModelo } }
];
```

O novo modelo aparecerá automaticamente no dropdown da aplicação. A chave de cada template (ex: `"meu-modelo"`) deve ser única; se dois arquivos definirem a mesma chave, a aplicação interrompe o carregamento com uma mensagem indicando o conflito.

### Estrutura mínima obrigatória de um template

| Campo | Tipo | Descrição |
|---|---|---|
| `label` | string | Nome exibido no dropdown |
| `category` | string | Categoria de agrupamento |
| `content` | string | Corpo do prompt com variáveis `{{TASK}}`, `{{BRANCH}}`, `{{LINK}}`, `{{TECH}}`, `{{NOTES}}` |

### Convenção de nomenclatura

- **Arquivo**: `kebab-case` correspondendo ao identificador do template (ex: `backend-review.js`)
- **Export**: `camelCase` da chave do template (ex: `backendReview`)
- **Chave no registro**: `kebab-case` igual ao nome do arquivo sem extensão (ex: `"backend-review"`)

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
│   ├── app.js                              # Lógica da aplicação
│   ├── templates.js                        # Merge e exportação dos templates
│   └── templates/
│       ├── index.js                        # Registro central de templates
│       ├── feature.js                      # Template: Implementação de Feature
│       ├── refactor.js                     # Template: Refatoração
│       ├── bugfix.js                       # Template: Correção de Bug
│       ├── tests.js                        # Template: Criação de Testes
│       ├── docs.js                         # Template: Documentação
│       ├── backend-review.js               # Template: Review de Backend
│       ├── frontend-review.js              # Template: Review de Frontend
│       ├── pr-review.js                    # Template: Review de Pull Request
│       ├── java-spring-boot-review.js      # Template: Review Java Spring Boot
│       ├── activity-implementation.js      # Template: Implementação de Atividade
│       ├── github-issue.js                 # Template: Criação de Issue no GitHub
│       ├── angular-review.js               # Template: Review Angular
│       └── brag-prompt.js                  # Template: Brag prompt (organiza conquistas)
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
- [ ] Botão "Baixar como Markdown"
- [ ] Busca por modelo
- [ ] Filtro por categoria
- [ ] Templates personalizados pela interface
- [ ] Exportar/importar templates em JSON
- [ ] Suporte a inglês
- [ ] Geração automática de nome de branch
- [ ] Versão PWA
