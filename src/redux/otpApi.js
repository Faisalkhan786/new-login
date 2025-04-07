import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const otpApi = createApi({
  reducerPath: "otpApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dev-api.fluteconnect.com/api/v1/user/auth",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      headers.set("Authorization", "Bearer guest_token");
      return headers;
    }
  }),
  endpoints: (builder) => ({
    generateOtp: builder.mutation({
      query: ({ phone_number, country_code, phone_code }) => ({
        url: "/generate-otp",
        method: "POST",
        body: { phone_number, country_code, phone_code },
      })
    }),
    loginWithOtp: builder.mutation({
      query: ({ phone_number, otp, device_id, device_token, country_code, phone_code }) => ({
        url: "/login",
        method: "POST",
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE2MSwidGltZXN0YW1wIjoxNzI1OTY3MTcxOTM2LCJpYXQiOjE3MjU5NjcxNzEsImV4cCI6MTc1NzUwMzE3MX0.mxLeM0g7p0k4p-_ziOERdhNQfJTeo872OtZpFE1aEmA`, // Replace with dynamic token if needed
        },
        body: { phone_number, otp, device_id, device_token, country_code, phone_code },
      })
    })
  }),
});

export const { useGenerateOtpMutation, useLoginWithOtpMutation } = otpApi;