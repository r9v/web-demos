export const fetchWrapper = {
  get,
  post,
  put,
  delete: _delete,
};

function get(url: string) {
  const requestOptions = {
    method: "GET",
  } as RequestInit;
  return fetch(url, requestOptions).then(handleResponse);
}

function post(url: string, body?: object) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(body),
  } as RequestInit;
  return fetch(url, requestOptions).then(handleResponse);
}

function put(url: string, body: object) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  } as RequestInit;
  return fetch(url, requestOptions).then(handleResponse);
}

function _delete(url: string) {
  const requestOptions = {
    method: "DELETE",
  } as RequestInit;
  return fetch(url, requestOptions).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
