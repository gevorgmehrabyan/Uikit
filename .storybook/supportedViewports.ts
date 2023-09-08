enum storybookViewport {
  '390px' = '390px',
  '1440px' = '1440px',
  '1920px' = '1920px',
}

const storyBookViewports = {
  [storybookViewport['390px']]: {
    name: [storybookViewport['390px']],
    styles: {
      width: '390px',
      height: '844px',
    },
  },
  [storybookViewport['1440px']]: {
    name: [storybookViewport['1440px']],
    styles: {
      width: '1440px',
      height: '1020px',
    },
  },
  [storybookViewport['1920px']]: {
    name: [storybookViewport['1920px']],
    styles: {
      width: '1920px',
      height: '1080px',
    },
  },
};

export default storyBookViewports;
export { storybookViewport };
