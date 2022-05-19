<script setup>
import FormItem from "../FormItem.vue";
import DocumentationIcon from "../icons/IconDocumentation.vue";
import ToolingIcon from "../icons/IconTooling.vue";
import EcosystemIcon from "../icons/IconEcosystem.vue";
import CommunityIcon from "../icons/IconCommunity.vue";
import SupportIcon from "../icons/IconSupport.vue";
</script>

<template>
  <form>

    <h1>Login Form</h1>

    <FormItem>
      <template #icon>
        <ToolingIcon />
      </template>
      <template #heading>Email</template>

      <input type="email" name="email" required />
    </FormItem>

    <FormItem>
      <template #icon>
        <EcosystemIcon />
      </template>
      <template #heading>Password</template>

      <input type="password" name="password" required />
    </FormItem>

    <input type="submit" value="Login" />

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
