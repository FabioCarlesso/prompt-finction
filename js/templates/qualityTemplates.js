export const qualityTemplates = {
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
  }
};
