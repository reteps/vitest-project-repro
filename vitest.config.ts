import { defaultExclude, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    projects: ['apps/foo'],
    include: ['apps/foo/**/*.test.ts'],
    exclude: ['apps/bar/**', ...defaultExclude],
    coverage: {
      all: true,
      reporter: ['html', 'text-summary', 'cobertura'],
      include: ['apps/foo/**'],
      exclude: ['apps/bar/**'],
    },
  },
});