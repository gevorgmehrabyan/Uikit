import { BrowserRouter } from 'react-router-dom';

import storyBookViewports, { storybookViewport } from './supportedViewports';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    values: [
      { name: 'black', value: '#000' },
      { name: 'white', value: '#fff' },
    ],
  },
  viewport: {
    viewports: storyBookViewports,
    defaultViewport: storybookViewport['1920px'],
  },
  layout: 'fullscreen',
  options: {
    storySort: {
      order: ['components', 'pages', 'layouts'],
    },
  },
  previewHead: (head) => `
    ${head}
    <style>
      html, body, #root {
        height: 100%;
      }
    </style>
  `,
};

export const decorators = [(Story) => <Story />];
