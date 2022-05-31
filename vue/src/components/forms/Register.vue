<script setup>
import FormItem from "../FormItem.vue";
import DocumentationIcon from "../icons/IconDocumentation.vue";
import ToolingIcon from "../icons/IconTooling.vue";
import EcosystemIcon from "../icons/IconEcosystem.vue";
import CommunityIcon from "../icons/IconCommunity.vue";
import SupportIcon from "../icons/IconSupport.vue";

import verify from "../../utils/verify";

import { ref } from 'vue'

const username = ref('')
const email = ref('')
const password = ref('')
const confirm = ref('')
const terms = ref('')

async function registerUser() {
  console.log(username, email, password, confirm, terms);
  if (await verify.isUserRegister(username, email, password, confirm, terms)) {
    return true;
  }
  return false;
}
</script>

<template>
  <form @submit.prevent="registerUser">

    <h1>Register Form</h1>
    <FormItem>
      <template #icon>
        <ToolingIcon />
      </template>
      <template #heading>Username</template>

      <input type="text" v-model="username" required />
    </FormItem>

    <FormItem>
      <template #icon>
        <ToolingIcon />
      </template>
      <template #heading>Email</template>

      <input type="email" v-model="email" required />
    </FormItem>

    <FormItem>
      <template #icon>
        <EcosystemIcon />
      </template>
      <template #heading>Password</template>

      <input type="password" v-model="password" required />
    </FormItem>

    <FormItem>
      <template #icon>
        <EcosystemIcon />
      </template>
      <template #heading>Password Confirmation</template>

      <input type="password" v-model="confirm" required />
    </FormItem>

    <FormItem>
      <template #icon>
        <EcosystemIcon />
      </template>
      <template #heading>Accept Terms and Conditions</template>

      <input type="checkbox" v-model="terms" required />
    </FormItem>

    <button >Register</button>

  </form>

</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 1em;
}

input {
  font-size: 1em;
  padding: .5em 1em;
  border: 1px solid #181818;
}

input[type="submit"] {
  background: #41b883;
  color: white;
  cursor: pointer;
}
</style>
