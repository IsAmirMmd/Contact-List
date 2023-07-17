import http from "./httpServices";

export function deleteContact(id) {
  return http.delete(`/contacts/${id}`);
}
