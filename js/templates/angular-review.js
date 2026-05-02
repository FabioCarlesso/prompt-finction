export const angularReview = {
  label: "Review Angular",
  category: "Review",
  content: `Review this Angular PR carefully: {{TASK}}

Focus your review on the following areas:

1. Documentation
   - Check whether the documentation was properly updated.
   - Validate if \`context.md\`, README, or related frontend documentation are clear and aligned with the PR changes.
   - Identify missing setup steps, outdated instructions, or inconsistent information.

2. Bugs and Edge Cases
   - Look for possible bugs introduced by the changes.
   - Check empty states, loading states, error states, invalid inputs, null/undefined values, navigation issues, and unexpected API responses.
   - Verify if the UI behaves correctly in common and edge-case scenarios.

3. Security
   - Check for possible frontend security vulnerabilities.
   - Review unsafe HTML rendering, XSS risks, exposed secrets, insecure token handling, route guards, authorization logic, and sensitive data shown in the UI or console logs.

4. Performance
   - Identify possible performance issues.
   - Check unnecessary API calls, memory leaks, missing unsubscribe handling, inefficient change detection, heavy template logic, large bundle impact, and repeated calculations in templates.

5. Angular Best Practices
   - Verify if the implementation follows Angular best practices.
   - Review component structure, services, dependency injection, RxJS usage, reactive forms, validators, route configuration, guards, interceptors, modules/standalone components, and separation of responsibilities.

6. API Integration
   - Check if the frontend integrates correctly with the backend API.
   - Validate request/response mapping, DTO/interface typing, error handling, loading feedback, pagination/filtering/sorting behavior, and HTTP status handling.

7. UI/UX
   - Review usability, consistency, responsiveness, accessibility, form validation messages, button states, feedback messages, and visual consistency with the existing design.

8. Tests
   - Check whether the PR includes enough tests.
   - Identify missing unit tests, component tests, service tests, form validation tests, route guard tests, and edge-case tests.

9. Code Quality
   - Review readability, maintainability, naming, duplication, folder organization, reusable components, and consistency with the existing frontend structure.

After reviewing, leave comments directly on the PR where appropriate.

For each finding, use the following format:
- Problem:
- Why it matters:
- Suggested improvement:
- Severity: Low / Medium / High

If no issue is found in a specific area, mention that it looks good.`
};
