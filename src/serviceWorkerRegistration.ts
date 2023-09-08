export const register = async () => {
  if ('serviceWorker' in navigator) {
    const { Workbox } = await import('workbox-window');

    if (Workbox) {
      const wb = new Workbox(`${process.env.PUBLIC_URL}/service-worker.js`);
      const registration = await wb.register();

      wb.addEventListener('activated', async (event) => {
        if (event.isUpdate) {
          window.location.reload();
        }
      });

      return registration;
    }
  }

  return null;
};
