<script setup>
import axios from "axios";
// import Payment from "../components/Payment.vue";
//
import midtransClient from "midtrans-client";
import { data } from "autoprefixer";
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main> -->
  <main
    className="flex min-h-screen flex-col items-center justify-between p-24"
  >
    <form @submit.prevent="SubmitEvent">
      <h1 id="result-json"></h1>
      <div className="space-y-12">
        <div>
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Belajar Waris
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600"></p>

          <div
            className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
          >
            <div className="sm:col-span-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Course
              </label>
              <div className="mt-2">
                <div
                  className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                >
                  <span
                    className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"
                    >Dalil - Dalil Warisan</span
                  >
                  <input
                    type="text"
                    name="course"
                    id="course"
                    autoComplete="course"
                    className="block flex-1 border-0
                  bg-transparent py-1.5 pl-1 text-gray-900
                  placeholder:text-gray-400 focus:ring-0 sm:text-sm
                  sm:leading-6"
                    disabled
                  />
                </div>
              </div>
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
        <!-- <Payment /> -->
        <button
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
    };
  },
  methods: {
    // midtrans
    SubmitEvent() {
      axios
        .post("http://localhost:3000/posts", {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
        })
        .then((response) => {
          // console.log(response.data);
          // console.log(response.data.user);
          const firstName = response.data.user.firstName;
          const lastName = response.data.user.lastName;
          const email = response.data.user.email;
          const token = response.data.transactionToken;
          // console.log(token);

          //midtrans
          snap.pay(token, {
            // Optional
            onSuccess: function (result) {
              // console.log(data);
              /* You may add your own js here, this is just an example */
              // console.log(data);
              axios.post("http://localhost:3000/zoho", {
                firstName: firstName,
                lastName: lastName,
                email: email,
              });
              document.getElementById("result-json").innerHTML +=
                firstName + " " + lastName + " " + email;
              //   axios
              //   axios
              //     .post("http://localhost:3000/zoho", {
              //       firstName: this.firstName,
              //       lastName: this.lastName,
              //       email: this.email,
              //     })
            },
            // Optional
            onPending: function (result) {
              /* You may add your own js here, this is just an example */
              document.getElementById("result-json").innerHTML +=
                JSON.stringify(result, null, 2);
            },
            // Optional
            onError: function (result) {
              /* You may add your own js here, this is just an example */
              document.getElementById("result-json").innerHTML +=
                JSON.stringify(result, null, 2);
            },
          });
        })
        .catch((error) => {
          console.log(error);
        });
      // },
    },
    // zoho
    // SubmitEvent() {
    //   axios
    //     .post("http://localhost:3000/zoho", {
    //       firstName: this.firstName,
    //       lastName: this.lastName,
    //       email: this.email,
    //     })
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },
  },
};
</script>

<style scoped>
/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}a

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>


