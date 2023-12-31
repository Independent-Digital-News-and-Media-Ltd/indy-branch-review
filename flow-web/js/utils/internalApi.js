const internalApiRequest = (path, init, params = {}) => {
  const query = new URLSearchParams();
  query.set('__amp_source_origin', window.location.origin);
  Object.keys(params).forEach((key) => {
    query.set(key, params[key]);
  });
  return fetch(`/internal-api/${path}?${query.toString()}`, init);
};

export const buildInternalApiUrl = (path, params = {}) => {
  const query = new URLSearchParams();
  query.set('__amp_source_origin', window.location.origin);
  Object.keys(params).forEach((key) => {
    query.set(key, params[key]);
  });

  return `/internal-api/${path}?${query.toString()}`;
};

// see /app/routes/internalAPI.js
export const InternalApi = {
  post: (path, data, params) => {
    return internalApiRequest(
      path,
      {
        method: 'POST',
        mode: 'same-origin',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
      params,
    );
  },
  get: (path, params) => {
    return internalApiRequest(
      path,
      {
        method: 'GET',
      },
      params,
    );
  },
  delete: (path, params) => {
    return internalApiRequest(
      path,
      {
        method: 'DELETE',
      },
      params,
    );
  },
};
