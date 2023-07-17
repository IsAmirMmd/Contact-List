import http from "./httpServices";

export function fetchContacts() {
  return http.get("/contacts");
}
