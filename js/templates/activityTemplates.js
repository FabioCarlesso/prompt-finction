export const activityTemplates = {
  "activity-implementation": {
    label: "Implementação de Atividade",
    category: "Desenvolvimento",
    content: `Implementar atividade: {{TASK}}

Contexto:
- Criar uma nova branch a partir da master/main.
- Nomear a branch com base na atividade/issue.
- Antes de alterar código, entender o projeto lendo README, docs, context.md e arquivos relevantes.
- Identificar arquitetura, padrões usados, estrutura de testes e convenções do projeto.

Execução:
- Implementar: {{TASK}}
- Manter o padrão atual do projeto.
- Evitar mudanças desnecessárias fora do escopo.
- Criar ou atualizar testes relacionados à alteração.
- Corrigir testes existentes que falharem por causa da mudança.

Validação:
- Rodar testes automatizados.
- Rodar lint/build se o projeto possuir esses comandos.
- Corrigir erros encontrados.
- Confirmar que a aplicação continua compilando.

Documentação:
- Atualizar README, docs ou context.md se a alteração impactar uso, arquitetura ou setup.

Finalização:
- Fazer commit com mensagem clara.
- Criar PR com:
  - resumo da alteração;
  - motivo da mudança;
  - testes executados;
  - arquivos principais alterados;
  - referência da issue.

**Branch sugerida:** {{BRANCH}}

**Referência:** {{LINK}}

**Tecnologia principal:** {{TECH}}

**Observações:** {{NOTES}}`
  },

  "github-issue": {
    label: "Criação de Issue no GitHub",
    category: "Desenvolvimento",
    content: `Crie uma issue no GitHub para o repositório:

**Repositório:** {{LINK}}

## Objetivo

Criar uma issue clara, organizada e pronta para orientar o desenvolvimento da seguinte atividade:

**Atividade:** {{TASK}}

## Contexto

{{NOTES}}

## Tecnologia

{{TECH}}

## Requisitos da issue

A issue deve conter:

- Título claro e objetivo
- Descrição do problema ou necessidade
- Objetivo da atividade
- Escopo da implementação
- Critérios de aceite
- Sugestão de validação/testes
- Observações técnicas, se existirem
- Labels sugeridas, se fizer sentido

## Estrutura esperada da issue

Use o seguinte formato:

\`\`\`md
## Objetivo

Descrever de forma direta o que deve ser implementado, corrigido ou analisado.

## Contexto

Explicar o motivo da issue, cenário atual, problema identificado ou necessidade da funcionalidade.

## Escopo

- Item 1
- Item 2
- Item 3

## Critérios de aceite

- [ ] Critério objetivo e verificável
- [ ] Critério objetivo e verificável
- [ ] Critério objetivo e verificável

## Validação

- [ ] Executar testes automatizados, se existirem
- [ ] Executar lint/build, se o projeto possuir
- [ ] Validar manualmente o comportamento esperado
\`\`\``
  }
};
