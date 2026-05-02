export const developmentTemplates = {
  feature: {
    label: "Implementação de Feature",
    labels: ["desenvolvimento", "backend", "frontend"],
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
    labels: ["desenvolvimento", "refactor"],
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
    labels: ["desenvolvimento", "bugfix"],
    content: `Corrija o bug descrito abaixo.

**Descrição do problema:** {{TASK}}

**Branch sugerida:** {{BRANCH}}

**Referência:** {{LINK}}

**Tecnologia principal:** {{TECH}}

**Observações:** {{NOTES}}

---

Identifique a causa raiz, implemente a correção e adicione um teste que reproduza o bug antes da correção.`
  }
};
