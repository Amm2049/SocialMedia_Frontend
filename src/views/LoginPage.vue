<template>
  <div
    class="d-flex align-items-center justify-content-between my-4"
    style="margin-left: 175px; margin-right: 175px"
  >
    <div
      class="d-flex align-items-center col-6 p-1"
      style="background-color: rgb(238, 238, 238)"
    >
      <h4 class="mt-1 pl-3">You can login here ...</h4>
    </div>
    <div class="">
      <button
        v-if="!tokenStatus"
        class="btn mr-3"
        @click="homePage()"
        style="background-color: black"
      >
        Home
      </button>
      <!-- <button v-if="tokenStatus" class="btn" @click="loginPage()" style="background-color: black;">Logout</button> -->
    </div>
  </div>

  <!-- Navigation End  -->

  <div class="col-4 px-5 py-5 offset-4 mt-5 mb-5 rounded shadow">
    <h4>Login</h4>
    <hr />
    <div class="my-3" v-if="userStatus">
      <p class="alert alert-danger">The credentials do not match !</p>
    </div>
    <div class="my-3">
      <label class="form-label">Email</label>
      <input v-on:keyup.enter="login()"
        class="form-control"
        type="email"
        placeholder="Enter email ..."
        v-model="user.email"
      />
    </div>
    <div class="my-3">
      <label class="form-label">Password</label>
      <input v-on:keyup.enter="login()"
        class="form-control"
        type="text"
        placeholder="Enter password ..."
        v-model="user.password"
      />
    </div>
    <div class="my-4" @click="login()">
      <button class="btn w-100" style="background-color: black">Login</button>
    </div>
  </div>
</template>

<script src="../js/LoginPage.js"></script>
