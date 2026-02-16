import getConfig from "next/config";

import { authService } from "../services";

const { publicRuntimeConfig } = getConfig();

export const fetchWrapper = {
  get,
  post,
  put,
  delete: _delete,
};

function get(url: string) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(url),
  } as RequestInit;
  return fetch(url, requestOptions).then(handleResponse);
}

function post(url: string, body?: object) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", ...authHeader(url) },
    credentials: "include",
    body: JSON.stringify(body),
  } as RequestInit;
  return fetch(url, requestOptions).then(handleResponse);
}

function put(url: string, body: object) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json", ...authHeader(url) },
    body: JSON.stringify(body),
  } as RequestInit;
  return fetch(url, requestOptions).then(handleResponse);
}

function _delete(url: string) {
  const requestOptions = {
    method: "DELETE",
    headers: authHeader(url),
  } as RequestInit;
  return fetch(url, requestOptions).then(handleResponse);
}

function authHeader(url: string) {
  const user = authService.userValue;
  const isLoggedIn = user && user.token;
  const isApiUrl = url.startsWith(publicRuntimeConfig.apiUrl);
  if (isLoggedIn && isApiUrl) {
    return { Authorization: `Bearer ${user.token}` };
  } else {
    return {};
  }
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      if ([401, 403].includes(response.status) && authService.userValue) {
        authService.logout();
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
