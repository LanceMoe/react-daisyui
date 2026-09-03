import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['./docs/pages/Welcome.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-docs'],
  framework: '@storybook/react-vite',
  features: {
    backgrounds: false,
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      include: ['src/**/*.tsx', '.storybook/**/*.tsx'],
    },
  },
  docs: {
    autodocs: false,
  }
}

export default config
