import { defineConfig } from "vitest/config";

export default defineConfig(() => {
  return {
    test: {
      coverage: {
        all: true,
        include: ['src/**'],
        reporter: ['html', 'text-summary', 'cobertura'],
      },
    },
  };
});