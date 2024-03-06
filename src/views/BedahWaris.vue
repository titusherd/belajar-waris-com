<script setup>
import axios from "axios";
</script>

<template>
  <main
    className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-100"
  >
    <form @submit.prevent="SubmitEvent">
      <h1 id="result-json" className="text-dark"></h1>
      <div className="space-y-12">
        <img src="../assets/header.jpeg" class="h-20 w-auto" alt="" />
        <div>
          <div
            v-if="successAlert"
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-3"
            role="alert"
          >
            <span className="block text-sm sm:inline">
              Your payment has been successfully processed.
            </span>
          </div>

          <div
            v-if="pendingAlert"
            className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative mt-3"
            role="alert"
          >
            <span className="block text-sm sm:inline">
              Your payment is being processed. Please wait.
            </span>
          </div>

          <div
            v-if="errorAlert"
            className="bg-blue-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3"
            role="alert"
          >
            <span className="block text-sm sm:inline">
              There was an error processing your payment. Please try again
              later.
            </span>
          </div>

          <div
            className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
          >
            <div className="sm:col-span-4">
              <h2 class="text-base font-semibold leading-7 text-gray-900">
                Course
              </h2>
              <p class="mt-1 text-sm leading-6 text-gray-600">
                Bedah Kasus Waris - Rp 600.000 / year
              </p>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <div
            className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
          >
            <div className="sm:col-span-3">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                  v-model="firstName"
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                  v-model="lastName"
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                  v-model="email"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          type="submit"
        >
          Proceed Payment
        </button>
      </div>
    </form>
  </main>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      successAlert: false,
      pendingAlert: false,
      errorAlert: false,
    };
  },
  methods: {
    SubmitEvent() {
      axios
        .post("http://localhost:3000/posts", {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          price: 600000,
        })
        .then((response) => {
          const firstName = response.data.user.firstName;
          const lastName = response.data.user.lastName;
          const email = response.data.user.email;
          const token = response.data.transactionToken;

          snap.pay(token, {
            onSuccess: (result) => {
              axios.post("http://localhost:3000/zoho", {
                firstName: firstName,
                lastName: lastName,
                email: email,
              });
              this.successAlert = true;
            },
            onPending: (result) => {
              this.pendingAlert = true;
            },
            onError: function (result) {
              this.pendingAlert = true;
            },
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
