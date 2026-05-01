export const baseTemplates = {
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
  }
};
