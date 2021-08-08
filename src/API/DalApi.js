import * as axios from "axios";

const instance = axios.create({
   null: null,
   withCredentials: true,
   baseURL: "https://social-network.samuraijs.com/api/1.0/",
   headers: {
      "API-KEY": "1ae474cc-6077-46bc-8a25-db0c669baff8",
   },
});

export const dalAPI = {
   getUsers(currentPage, pageSize) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => response.data);
   },
   followUser(id) {
      return instance.post(`follow/${id}`).then((response) => response.data);
   },
   unfollowUser(id) {
      return instance.delete(`follow/${id}`).then((response) => response.data);
   },
   setProfile(id) {
      return instance.get(`profile/${id}`).then((response) => response.data);
   },
   requestUsersData() {
      return instance.get(`auth/me`).then((response) => response.data);
   },
   getStatus(id) {
      return instance.get(`/profile/status/${id}`).then(response => response.data);
   },
   updateStatus(status) {
      return instance.put(`/profile/status`, { status }).then(response => response.data);
   },
   login(email, password, rememberMe = false) {
      return instance.post(`/auth/login`, { email, password, rememberMe }).then(response => response.data)
   },
   logout() {
      return instance.delete(`/auth/login`).then(response => response.data)
   }
};
