/**
 * This file serves as a central entry point for re-exporting
 * all steps from the 'steps' directory.
 * It simplifies imports in other parts of the application by
 * allowing them to import multiple steps from a single location.
 *
 * Step Classes (or Step Definitions):
 * - Represent a sequence of actions or steps that a user can perform in the application, often corresponding to steps in a test scenario or user story.
 * - Use page objects to interact with the UI.
 * - Define higher-level, business-readable actions that are closer to the language used in test cases or requirements.
 *
 */

export * from '../steps/HomePageSteps';
