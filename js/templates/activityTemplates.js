export const activityTemplates = {
  "activity-implementation": {
    label: "Implementação de Atividade",
    labels: ["desenvolvimento", "atividade"],
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

Branch sugerida: {{BRANCH}}

Referência: {{LINK}}

Tecnologia principal: {{TECH}}

Observações: {{NOTES}}`
  },

  "github-issue": {
    label: "Criação de Issue no GitHub",
    labels: ["desenvolvimento", "github"],
    content: `Crie uma issue no GitHub para o repositório {{LINK}}
    
Criar uma issue clara, organizada e pronta para orientar o desenvolvimento da seguinte atividade: {{TASK}}

Observações: {{NOTES}}
Tecnologia: {{TECH}}

A issue deve conter:

- Título claro e objetivo
- Descrição do problema ou necessidade
- Objetivo da atividade
- Escopo da implementação
- Critérios de aceite
- Sugestão de validação/testes
- Observações técnicas, se existirem
- Labels sugeridas, se fizer sentido`
  }
};
