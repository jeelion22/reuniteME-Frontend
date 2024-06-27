import { instance, protectedInstance } from "./instance";

const userServices = {
  register: async (values) => {
    return await instance.post("/users/register", values);
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
  getAllContributions: async () => {
    return await protectedInstance.get("users/images");
  },
  addVisitor: async (contributionId, formData) => {
    return await protectedInstance.post(
      `users/maps/location/${contributionId}`,
      formData
    );
  },
  getStatus: async (contributionId) => {
    return await protectedInstance.get(
      `users/contribution/status/${contributionId}`
    );
  },

  updateStatus: async (contributionId, formData) => {
    return await protectedInstance.put(
      `users/contribution/status/update/${contributionId}`,
      formData
    );
  },
  forgotPassword: async (email) => {
    return await instance.put("users/password/reset", email);
  },

  verifyPasswordResetLink: async (activationId) => {
    return await instance.get(`users/password/reset/verify/${activationId}`);
  },

  resetPassword: async (userId, password) => {
    return await instance.put(`users/password/reset/${userId}`, password);
  },

  userInfoUpdate: async (userInfo) => {
    return await protectedInstance.put("/users/me", userInfo);
  },

  adminLogin: async (adminCredentials) => {
    return await protectedInstance.post("admins/login", adminCredentials);
  },
  getCurrentAdmin: async () => {
    return await protectedInstance.get("admins/me");
  },
  adminLogout: async () => {
    return await protectedInstance.get("/admins/logout");
  },

  adminGetAllUsers: async () => {
    return await protectedInstance.get("/admins/users");
  },
  adminGetAllContributions: async () => {
    return await protectedInstance.get("/admins/users/all-contributions");
  },
  getUsersPlotInfo: async (req, res) => {
    return await protectedInstance.get("admins/users/plot-info");
  },

  adminForgotPasssword: async (email) => {
    return await instance.put("admins/password/reset", email);
  },

  adminVerifyPasswordResetLink: async (activationId) => {
    return await instance.get(`admins/password/reset/verify/${activationId}`);
  },

  adminResetPassword: async (adminId, password) => {
    return await instance.put(`admins/password/reset/${adminId}`, password);
  },
  adminEditUserData: async (userId, userData) => {
    return await protectedInstance.put(
      `admins/users/update/${userId}`,
      userData
    );
  },
  adminDeleteUser: async (userId) => {
    return await protectedInstance.delete(`admins/users/${userId}`);
  },

  adminActivateUser: async (userId) => {
    return await protectedInstance.get(`admins/users/activate/${userId}`);
  },
};

export default userServices;
