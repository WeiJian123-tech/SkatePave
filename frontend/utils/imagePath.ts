export const getImagePath = (path: string) => {
    const basePath = process.env.NODE_ENV === 'production' ? '/SkatePave' : '';
    return `${basePath}/${path}`;
  };
