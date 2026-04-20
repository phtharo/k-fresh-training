import { test, expect } from '@playwright/test';

/** A decorator to mark a method as a test step
 * @param stepName Optional name for the step. If not provided, it will default to the method name.
 * @returns A function that wraps the original method in a test step.
 */
export function Step(stepName?: string) :
    (target: (this: any, ...args: any[]) => any, context: ClassMethodDecoratorContext) => (this: any, ...args: any[]) => any {

        return function decorator(target: (this: any, ...args: any[]) => any, context: ClassMethodDecoratorContext) {
            return function replacementMethod(this: any, ...args: any[]) {
                const name = stepName ?? `${this.constructor.name}.${String(context.name)}`;
                return test.step(name, () => target.apply(this, args));
            };
        };
    }