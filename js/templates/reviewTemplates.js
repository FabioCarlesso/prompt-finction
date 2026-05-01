export const reviewTemplates = {
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
