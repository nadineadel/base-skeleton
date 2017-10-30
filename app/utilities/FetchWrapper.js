
import QueryString from 'querystring';

export default function _fetch(url, queryString, requestOptions) {
  const qs = QueryString.stringify(queryString);
  const request = new Request(`${url}?${qs}`, requestOptions);
  return fetch(request)
    .then(response => response.json());
}

export function get(url, queryString, requestOptions = {}) {
  return _fetch(url, queryString, {
    method: 'GET',
    ...requestOptions,
  });
}

// export function post(url, queryString, requestOptions = {}) {
//   return _fetch(url, queryString, {
//     method: 'POST',
//     ...requestOptions,
//   });
// }

export function put(url, queryString, requestOptions) {
  return fetch(url, {
    method: 'PUT',
    ...requestOptions,
  }).then(response => response.json());
}
