<div align="center">

<img src="https://user-images.githubusercontent.com/64439681/181564610-a0fd8fef-b552-4cc5-b115-8652dc142065.svg" alt="react-daisyui" width="180" />

# @lancemoe/react-daisyui 🌼

React components for [daisyUI 5](https://daisyui.com/) and [Tailwind CSS 4](https://tailwindcss.com/).

[Documentation](https://react.daisyui.com/) · [npm](https://www.npmjs.com/package/@lancemoe/react-daisyui) · [GitHub](https://github.com/LanceMoe/react-daisyui) · [Discord](https://discord.gg/4v2eS3VQNv)

[![npm version](https://img.shields.io/npm/v/%40lancemoe%2Freact-daisyui)](https://www.npmjs.com/package/@lancemoe/react-daisyui)
[![npm downloads](https://img.shields.io/npm/dt/%40lancemoe%2Freact-daisyui?label=downloads)](https://www.npmjs.com/package/@lancemoe/react-daisyui)
[![bundle size](https://img.shields.io/bundlephobia/minzip/%40lancemoe/react-daisyui)](https://bundlephobia.com/package/@lancemoe/react-daisyui)
[![license](https://img.shields.io/npm/l/%40lancemoe%2Freact-daisyui)](https://github.com/LanceMoe/react-daisyui/blob/main/LICENSE)

</div>

## Features

- Built for React 18+ with TypeScript declarations included.
- Matches daisyUI 5 component APIs, semantic classes, and theming.
- Uses Tailwind CSS 4's CSS-first configuration.
- Supports composable components such as `Card.Body`, `Modal.Body`, and `Dropdown.Item`.

## Requirements

- React and React DOM 18 or later
- Tailwind CSS 4.3 or later
- daisyUI 5.7 or later

## Install

Install the library alongside its peer dependencies:

```bash
pnpm add @lancemoe/react-daisyui react react-dom tailwindcss daisyui
```

```bash
npm install @lancemoe/react-daisyui react react-dom tailwindcss daisyui
```

Then enable Tailwind and daisyUI in your application's CSS entry point:

```css
@import 'tailwindcss';
@plugin 'daisyui';
```

Keep your framework's normal Tailwind integration in place; no `tailwind.config.js` `content` entry or Next.js transpilation setting is needed for this package.

### Scan library utilities when needed

The daisyUI plugin already supplies the styles for standard components such as `Button` and `Card`, so most applications do not need extra source configuration. Add the following only when a component relies on Tailwind utility classes generated inside this package—for example, Avatar sizing, responsive button options, or Carousel layout:

```css
@source '../node_modules/@lancemoe/react-daisyui/dist';
```

Tailwind 4 ignores `node_modules` during automatic source detection. Adjust the path so that it is relative to the CSS file.

### Themes

Configure themes in the same CSS file:

```css
@import 'tailwindcss';
@plugin 'daisyui' {
  themes:
    light --default,
    dark --prefersdark,
    cupcake;
}
```

See the [daisyUI theme documentation](https://daisyui.com/docs/themes/) for custom themes and configuration options.

## Quick start

```tsx
import { Button, Card } from '@lancemoe/react-daisyui';

export function WelcomeCard() {
  return (
    <Card className="w-96 bg-base-100 shadow-xl">
      <Card.Body>
        <Card.Title>react-daisyui</Card.Title>
        <p>Build daisyUI interfaces with React components.</p>
        <Card.Actions className="justify-end">
          <Button color="primary">Get started</Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  );
}
```

Wrap part of an application in `Theme` to choose a daisyUI theme for that subtree:

```tsx
import { Button, Theme } from '@lancemoe/react-daisyui';

export function ThemeExample() {
  return (
    <Theme dataTheme="dark">
      <Button color="primary">Dark theme button</Button>
    </Theme>
  );
}
```

## Components

The [interactive documentation](https://react.daisyui.com/) contains props, examples, and accessibility guidance for every component.

| Group        | Components                                                                                                                                                                                                |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Actions      | `Button`, `Fab`, `Dropdown`, `Modal`, `Swap`, `Filter`                                                                                                                                                    |
| Data display | `Accordion`, `Aura`, `Avatar`, `Badge`, `Card`, `Carousel`, `ChatBubble`, `Collapse`, `Countdown`, `Diff`, `Hover3d`, `HoverGallery`, `Kbd`, `List`, `Stats`, `Status`, `Table`, `TextRotate`, `Timeline` |
| Navigation   | `Breadcrumbs`, `Dock`, `Link`, `Megamenu`, `Menu`, `Navbar`, `Pagination`, `Steps`, `Tabs`                                                                                                                |
| Feedback     | `Alert`, `Loading`, `Progress`, `RadialProgress`, `Skeleton`, `Toast`, `Tooltip`                                                                                                                          |
| Data input   | `Calendar`, `Checkbox`, `Fieldset`, `FileInput`, `Form`, `Input`, `Label`, `Otp`, `Radio`, `Range`, `Rating`, `Select`, `Textarea`, `Toggle`, `Validator`                                                 |
| Layout       | `Artboard`, `Divider`, `Drawer`, `Footer`, `Hero`, `Indicator`, `Join`, `Mask`, `Stack`                                                                                                                   |
| Mockups      | `CodeMockup`, `PhoneMockup`, `WindowMockup`                                                                                                                                                               |
| Utilities    | `Theme`, `ThemeController`, `useTheme`                                                                                                                                                                    |

All component props are exported as TypeScript types, for example `ButtonProps` and `ModalProps`.

## Development

This repository uses pnpm.

```bash
pnpm install --frozen-lockfile
pnpm start
```

Useful verification commands:

```bash
pnpm run lint
pnpm run typecheck
pnpm test
pnpm run dist
pnpm run docs
```

To scaffold a component, run `pnpm generate component` and follow the prompts. Add the component export, stories, and tests before opening a pull request. Generated package output belongs in `dist/`, and generated Storybook documentation belongs in `docs/`; regenerate them through the commands above rather than editing them by hand.

## Contributing

Issues and pull requests are welcome. Please keep changes focused, include tests for behavior changes, and add or update Storybook stories for visible component changes. Read [AGENTS.md](./AGENTS.md) for the repository's development conventions.

## License

[MIT](./LICENSE)
