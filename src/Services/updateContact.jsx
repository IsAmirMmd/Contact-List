import http from "./httpServices";

export function updateContact(id, contact) {
  return http.put(`/contacts/${id}`, contact);
}
