import axios from 'axios';

export function getPromise(url: string): Promise<Record<string, unknown> | false> {
  return axios
    .get(url)
    .then((res) => res.data)
    .catch(() => false);
}

export function postPromise(url: string, data: Record<string, unknown>) {
  return axios
    .post(url, data)
    .then((res) => res.data)
    .catch(() => false);
}

// // PATCH
export function patchPromise(url: string, data: Record<string, unknown>) {
  return axios
    .patch(url, data)
    .then((res) => res.data)
    .catch(() => false);
}

// DELETE

export function deletePromise(url: string): Promise<Record<string, unknown> | false> {
  return axios
    .delete(url)
    .then((res) => res.data)
    .catch(() => false);
}
