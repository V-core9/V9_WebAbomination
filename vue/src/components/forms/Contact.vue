<script setup>
import FormItem from "../FormItem.vue";
import DocumentationIcon from "../icons/IconDocumentation.vue";
import ToolingIcon from "../icons/IconTooling.vue";
import EcosystemIcon from "../icons/IconEcosystem.vue";
import CommunityIcon from "../icons/IconCommunity.vue";
import SupportIcon from "../icons/IconSupport.vue";
import { ref } from 'vue';
import { useAuthStore } from '../../stores/auth';

const auth = useAuthStore();

const userEmail = ref('');
if (auth.email !== "") {
  userEmail.value = auth.email;
}
</script>

<template>
  <form>

    <h1>Contact Form</h1>

    <FormItem>
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Name</template>

      <input type="text" name="name" placeholder="Name" required />
    </FormItem>

    <FormItem>
      <template #icon>
        <ToolingIcon />
      </template>
      <template #heading>Email</template>

      <input type="email" v-model="userEmail" required />
    </FormItem>

    <FormItem>
      <template #icon>
        <EcosystemIcon />
      </template>
      <template #heading>Subject</template>

      <input type="text" name="subject" placeholder="Subject" required />
    </FormItem>

    <FormItem>
      <template #icon>
        <CommunityIcon />
      </template>
      <template #heading>Message</template>

      <textarea name="message" ></textarea>
    </FormItem>

    <input type="submit" value="Send" />

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
