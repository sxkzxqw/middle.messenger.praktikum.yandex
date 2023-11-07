export const queryStringify = (data: object) => {
  const queryParts = Object.entries(data).map(([key, value]) => {
    return `${key}=${encodeURIComponent(value?.toString())}`;
  });
  return `?${queryParts.join('&')}`;
};

export const defaultTimeoutTime: number = 10000;
