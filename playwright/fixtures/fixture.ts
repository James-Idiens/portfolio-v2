import { mergeTests } from "@playwright/test";
import { test as pageFixtures } from "./PageFixtures";
import { test as stepFixtures } from "./StepFixtures";

export const test = mergeTests(pageFixtures, stepFixtures);