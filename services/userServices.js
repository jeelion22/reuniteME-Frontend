import { instance, protectedInstance } from "./instance";

const userServices = {
  register: async (firstname, lastname, email, phone, category) => {
    return await instance.post("/users/register", {
      firstname,
      lastname,
      email,
      phone,
      category,
    });
  },
  verify: async (activationId) => {
    return await instance.get(`/users/verify/${activationId}`);
  },
  createPassword: async (userId, password) => {
    return await instance.post(`/users/verified/create-password/${userId}`, {
      password,
    });
  },

  login: async (email, password) => {
    return await instance.post(
      "/users/login",
      { email, password },
      { withCredentials: true }
    );
  },

  getCurrentUser: async () => {
    return await protectedInstance.get("/users/me");
  },
  logout: async () => {
    return await protectedInstance.get("/users/logout");
  },

  getImage: async (imageId) => {
    return await protectedInstance.get(`/users/images/${imageId}`);
  },

  uploadImage: async (formData) => {
    return await protectedInstance.post("/users/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      // timeout: 50000,
    });
  },

  deleteImage: async (imageId) => {
    return await protectedInstance.get(`/users/images/delete/${imageId}`, {});
  },

  getMapUrl: async (imageId) => {
    return await protectedInstance.get(`/users/maps/${imageId}`);
  },
  updateContribution: async (contributionId, formData) => {
    return await protectedInstance.put(
      `/users/update/${contributionId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  },
};

export default userServices;
