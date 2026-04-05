import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

// Limpa após cada teste (boa prática)
afterEach(() => {
  cleanup();
});

beforeEach(() => {
  class MockIntersectionObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  globalThis.IntersectionObserver =
    MockIntersectionObserver as unknown as typeof IntersectionObserver;
});
