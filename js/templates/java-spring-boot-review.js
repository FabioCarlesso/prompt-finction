export const javaSpringBootReview = {
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
};
