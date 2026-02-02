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
  (globalThis as any).IntersectionObserver = MockIntersectionObserver as any;
});
