# AGENTS.md

## Project Overview

`react-daisyui` is a React component library built on Tailwind CSS and daisyUI. The public package is built from `src/index.ts` into the files under `dist/`. Component implementations, colocated stories, and unit tests live under `src/`; Storybook configuration and documentation helpers live under `.storybook/`.

This is a browser-focused React library. It does not contain an Electron main process, renderer bridge, SSH implementation, or cross-process protocol. Do not introduce Electron-specific concepts such as `window.elyshell` unless a future task explicitly adds that architecture.

## Repository Layout

- `src/`: component implementations, public exports, stories, tests, and shared types.
- `.storybook/`: Storybook configuration, themes, documentation wrappers, and preview helpers.
- `generators/` and `plopfile.js`: component scaffolding.
- `public/`: static assets copied into the Storybook output.
- `dist/`: package build output. It is ignored by Git and must not be edited by hand.
- `docs/`: generated Storybook documentation. Regenerate it with `pnpm run docs`; do not hand-edit generated assets.
- `eslint.config.js`: the active ESLint Flat Config.
- `tsconfig.json`: the TypeScript 7 type-check configuration.
- `tsconfig.build.json`: the legacy bundler compatibility configuration used by Microbundle.

## Commands and Verification

The CI workflow uses pnpm, so pnpm is the canonical install and verification path. `pnpm-lock.yaml` is the committed single source of truth for dependencies.

```bash
pnpm install --frozen-lockfile
pnpm run lint
pnpm run typecheck
pnpm test -- --runInBand
pnpm run dist
pnpm run docs
```

- `pnpm run lint` runs ESLint over TypeScript and TSX files.
- `pnpm run typecheck` invokes the TypeScript 7 compiler through `node_modules/typescript-7`.
- `pnpm test -- --runInBand` runs the Jest suite in jsdom.
- `pnpm run dist` builds the distributable CJS, ESM, and modern bundles.
- `pnpm run docs` regenerates the Storybook documentation output.
- `pnpm run format` runs Prettier over `src/`. The repository uses single quotes, semicolons, two-space indentation, trailing commas, and a 120-character print width.

Every change should leave lint, type checking, tests, and the relevant build command passing.

## TypeScript Rules

- New code must use TypeScript and keep `strict`, `noUnusedLocals`, and `noUnusedParameters` clean. The repository currently enables `strict`; treat the unused-symbol checks as mandatory for new code even where the compiler flags are not yet enabled globally.
- Avoid `any`. When it cannot be avoided at a boundary, prefer `unknown` with Zod validation or explicit type narrowing. `any` must not be used as a cross-boundary escape hatch.
- All untrusted external data must be validated at runtime at its boundary. Static TypeScript types do not replace runtime validation; use Zod when a runtime schema is needed.
- This project has no cross-process data flow today. If one is introduced, use explicitly serializable types and do not pass class instances, functions, or implicit framework objects across the boundary.
- Do not use TypeScript `enum` for protocol or data values. Use `as const` objects and string or numeric union types instead.
- Shared types should describe stable library contracts and remain independent of React implementation details where practical. Do not put build-tool, Storybook, or platform-specific details into shared component contracts.
- Avoid boolean parameters that control multiple behaviors. Prefer a named options object, a discriminated union, or separate methods with explicit intent.
- Use `import type` or inline `type` modifiers for type-only imports. Keep type imports separate from runtime imports and follow the repository's import-sorting rules.
- The `typescript` package is intentionally aliased to TypeScript 6 for tooling compatibility, while `typescript-7` is the actual TypeScript 7 compiler used by `npm run typecheck`. Do not change this arrangement without re-running type checking, the package build, and the Storybook build.
- Preserve the current bundler-oriented settings: `moduleResolution: "bundler"`, `module: "esnext"`, `target: "es2022"`, `jsx: "react-jsx"`, and the explicit `rootDir` and `types` settings.

## React Component Rules

### Import

- For new component code, do not add a React default import or namespace import. Use the automatic JSX transform, named runtime imports, and `import type` for React types.
- Existing components still contain some `React.forwardRef`, `React.Children`, and namespace type usage. When modifying those files, make the smallest safe migration and preserve the public API; do not perform a broad import rewrite without a reason.
- This is a browser React renderer. Components must not import `electron`, `node:*`, or other server-only implementation details.

### Props and Components

- Define new Props with `type`, not `interface`; name a component-local type `Props` where that does not reduce clarity.
- Keep component-local Props private by default. This library currently exposes many historical `*Props` types as part of its public API; preserve those existing exports, but do not add new public Props exports unless consumers genuinely need them.
- Accept props as `Readonly<Props>`, destructure fields at the beginning of the function body, and do not repeatedly access `props.foo` throughout the implementation.
- Use standard exported `function` declarations for new plain React components. Do not use arrow-function components, `React.FC`, or `FC` for new code.
- Components that need refs should follow the established `forwardRef` pattern and retain an explicit, stable public name.
- Event callbacks, query functions, and ordinary utility functions may use arrow functions when that is clearer.

Example:

```tsx
type Props = {
  children?: React.ReactNode;
};

export function Panel(props: Readonly<Props>) {
  const { children } = props;
  return <section>{children}</section>;
}
```

External consumers should derive component props rather than duplicate the declaration:

```tsx
type PanelProps = React.ComponentPropsWithoutRef<typeof Panel>;
type PanelPropsWithRef = React.ComponentPropsWithRef<typeof Panel>;
```

### Component and Styling Conventions

- Use daisyUI 5 semantic classes and Tailwind utilities. Use `twMerge` when combining caller-provided classes with component classes, following the patterns already used in `src/`.
- Preserve existing component APIs, supported HTML attributes, ref behavior, and compound-component exports such as `Card.Body` or `Modal.Actions`.
- Prefer semantic, accessible HTML and preserve keyboard, focus, label, and ARIA behavior when changing markup.
- Do not add inline style systems or a second styling abstraction for a one-off case. Update the existing Tailwind/daisyUI class composition instead.

## ESLint Rules

- `eslint.config.js` is the source of truth. The old `eslintrc.json` is not the active configuration and should not be extended for new work.
- New code must introduce no ESLint errors. Resolve warnings when practical, especially unused variables and hook dependency warnings.
- Keep import ordering and duplicate-import checks clean. `simple-import-sort/imports` and `simple-import-sort/exports` are enforced.
- React Hooks rules and the React Compiler rule are enforced for production code. Do not suppress them without documenting why the code is safe.
- TypeScript code disables `react/prop-types` because props are typed statically. `react/display-name` is disabled for the library's established `forwardRef` pattern.
- Storybook stories, tests, and `.storybook` fixture components have targeted exceptions for local fixture patterns. Those exceptions do not apply to production component implementations.
- Generated `docs/` and `dist/` output is excluded from linting.

## Tests and Storybook

- Add or update a colocated unit test when changing component behavior.
- Add or update a Storybook story when introducing or changing a user-visible component state, variant, or interaction.
- Keep tests focused on public behavior and accessibility-visible output rather than implementation details.
- Do not hand-edit generated Storybook bundles. Run `pnpm run docs` after relevant story or Storybook changes and review the generated diff.

## Dependencies and Lockfiles

- Keep React, React DOM, Tailwind CSS, and daisyUI peer-dependency expectations compatible with the public package.
- `pnpm-lock.yaml` is the committed single source of truth for dependencies. Use `pnpm install` or `pnpm add` for dependency management.
- Check peer-dependency warnings before accepting an upgrade. In particular, Microbundle currently constrains the Babel major version used by the package build.
- Do not remove a dependency only because it is not imported from `src/`; build, test, Storybook, PostCSS, and release tooling are all part of the development dependency graph.

## Change Discipline

- Inspect the working tree before editing and preserve unrelated user changes.
- Keep changes focused. Avoid broad refactors of existing components solely to make a new rule aesthetically uniform.
- Do not rewrite generated output, lockfiles, or public exports manually when the project command can regenerate them.
- Before handing off, report the commands that were run and call out any remaining warnings, compatibility exceptions, or generated-file changes.
