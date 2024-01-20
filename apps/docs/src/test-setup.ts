declare const globalThis: { ngJest: object };

globalThis.ngJest = {
  testEnvironmentOptions: {
    teardown: {
      destroyAfterEach: false,
      rethrowErrors: true,
    },
    errorOnUnknownElements: true,
    errorOnUnknownProperties: true,
  },
};

import 'jest-preset-angular/setup-jest';
