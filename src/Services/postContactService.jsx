import http from "./httpServices";

export function postContact(contact) {
  return http.post(`/contacts`, contact);
}
