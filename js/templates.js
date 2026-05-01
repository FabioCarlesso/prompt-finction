const templates = {
  feature: {
    label: "Implementação de Feature",
    category: "Desenvolvimento",
    content: `Implemente a seguinte feature no projeto.

**Tarefa:** {{TASK}}

**Branch sugerida:** {{BRANCH}}

**Referência:** {{LINK}}

**Tecnologia principal:** {{TECH}}

**Observações:** {{NOTES}}

---

Siga as boas práticas do projeto, escreva código limpo e adicione testes se necessário.`
  },

  refactor: {
    label: "Refatoração",
    category: "Desenvolvimento",
    content: `Realize a refatoração descrita abaixo, mantendo o comportamento atual.

**Tarefa:** {{TASK}}

**Branch sugerida:** {{BRANCH}}

**Referência:** {{LINK}}

**Tecnologia principal:** {{TECH}}

**Observações:** {{NOTES}}

---

Não altere comportamentos existentes. Garanta que os testes continuem passando após a refatoração.`
  },

  bugfix: {
    label: "Correção de Bug",
    category: "Desenvolvimento",
    content: `Corrija o bug descrito abaixo.

**Descrição do problema:** {{TASK}}

**Branch sugerida:** {{BRANCH}}

**Referência:** {{LINK}}

**Tecnologia principal:** {{TECH}}

**Observações:** {{NOTES}}

---

Identifique a causa raiz, implemente a correção e adicione um teste que reproduza o bug antes da correção.`
  },

  "backend-review": {
    label: "Review de Backend",
    category: "Review",
    content: `Realize o code review do backend descrito abaixo.

**Contexto:** {{TASK}}

**Branch / PR:** {{BRANCH}}

**Link:** {{LINK}}

**Tecnologia principal:** {{TECH}}

**Observações:** {{NOTES}}

---

Verifique: segurança, performance, tratamento de erros, cobertura de testes, legibilidade do código e aderência aos padrões do projeto.`
  },

  "frontend-review": {
    label: "Review de Frontend",
    category: "Review",
    content: `Realize o code review do frontend descrito abaixo.

**Contexto:** {{TASK}}

**Branch / PR:** {{BRANCH}}

**Link:** {{LINK}}

**Tecnologia principal:** {{TECH}}

**Observações:** {{NOTES}}

---

Verifique: acessibilidade, responsividade, performance, reutilização de componentes, legibilidade e aderência ao design system.`
  },

  tests: {
    label: "Criação de Testes",
    category: "Qualidade",
    content: `Crie os testes para a funcionalidade descrita abaixo.

**Funcionalidade a testar:** {{TASK}}

**Branch sugerida:** {{BRANCH}}

**Referência:** {{LINK}}

**Tecnologia principal:** {{TECH}}

**Observações:** {{NOTES}}

---

Inclua testes unitários e de integração onde aplicável. Cubra os casos de sucesso, erro e edge cases.`
  },

  docs: {
    label: "Documentação",
    category: "Documentação",
    content: `Crie ou atualize a documentação conforme descrito abaixo.

**Tarefa:** {{TASK}}

**Branch sugerida:** {{BRANCH}}

**Referência:** {{LINK}}

**Tecnologia principal:** {{TECH}}

**Observações:** {{NOTES}}

---

A documentação deve ser clara, objetiva e voltada ao público-alvo. Use exemplos práticos sempre que possível.`
  },



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

  "pr-review": {
    label: "Review de Pull Request",
    category: "Review",
    content: `Realize o review do Pull Request descrito abaixo.

**Contexto do PR:** {{TASK}}

**Branch:** {{BRANCH}}

**Link do PR:** {{LINK}}

**Tecnologia principal:** {{TECH}}

**Observações:** {{NOTES}}

---

Avalie: clareza do objetivo, qualidade do código, cobertura de testes, impacto em outras funcionalidades e conformidade com os critérios de aceite da issue relacionada.`
  }
};
