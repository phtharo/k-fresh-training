# Login Test Bug Report

## Title
Login automation uses locators and assertions from the wrong website

## Environment
- Website: `https://ecommerce-playground.lambdatest.io/index.php?route=account/login`
- Profile: `qa`
- Test files: `tests/ui/test-login.spec.ts`, `tests/ui/test-login-env.spec.ts`

## Actual issue
The login test is written for the old `the-internet` practice site, but the configured target is LambdaTest eCommerce.

Because of that mismatch:
- The test searches for `#username`, but the page uses `#input-email`.
- The test searches for `button[type="submit"]`, but the login action is exposed as a `Login` button on this page.
- The success check expects the message `You logged into a secure area!`, which does not belong to this website.

## Evidence from the page
The login form shown in the screenshot contains:
- `E-Mail Address`
- `Password`
- `Login`

That matches the LambdaTest page structure, not the old test assumptions.

## Expected behavior
The automation should:
- fill `#input-email`
- fill `#input-password`
- click the `Login` button
- verify the user lands on the account page and sees account content such as `My Account`

## Root cause
Reusable login code was copied from another demo website and not adapted after changing `BASE_URL` to LambdaTest.

## Fix applied
- Updated login locators to LambdaTest selectors.
- Replaced the old flash-message assertion with account-page verification.
