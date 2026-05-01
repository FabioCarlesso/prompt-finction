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
  },

  "java-spring-boot-review": {
    label: "Review Java Spring Boot",
    category: "Review",
    content: `Review the PR below in detail:

PR: {{TASK}}

Focus your review on the following areas:

1. Documentation
   - Check whether the documentation was properly updated.
   - Validate if \`context.md\` is clear, complete, and aligned with the changes in the PR.
   - Identify missing explanations, outdated information, or inconsistencies.

2. Bugs and Edge Cases
   - Look for possible bugs introduced by the changes.
   - Identify unhandled edge cases.
   - Verify null handling, invalid inputs, empty results, unexpected states, and error scenarios.

3. Security
   - Check for possible security vulnerabilities.
   - Review authentication, authorization, data exposure, input validation, logging of sensitive data, and unsafe configurations.

4. Performance
   - Identify possible performance issues.
   - Check for unnecessary database calls, inefficient loops, excessive memory usage, N+1 queries, and avoidable processing.

5. Spring Boot Best Practices
   - Verify if the implementation follows Spring Boot best practices.
   - Review controller, service, repository, DTO, validation, exception handling, dependency injection, transaction management, and configuration patterns.

6. Tests
   - Check whether the PR includes enough tests.
   - Identify missing unit, integration, or edge-case tests.
   - Suggest improvements to test coverage where needed.

7. Code Quality
   - Review readability, maintainability, naming, separation of responsibilities, duplication, and consistency with the existing project structure.

After reviewing, leave comments directly on the PR where appropriate.

For each finding, use the following format:
- Problem:
- Why it matters:
- Suggested improvement:
- Severity: Low / Medium / High

If no issue is found in a specific area, mention that it looks good.

**Branch sugerida:** {{BRANCH}}

**Link:** {{LINK}}

**Tecnologia principal:** {{TECH}}

**Observações:** {{NOTES}}`
  }
};
