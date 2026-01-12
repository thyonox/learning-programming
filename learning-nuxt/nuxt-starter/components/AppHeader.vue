<script setup lang="ts">

</script>

<template>
<div class="container">
  <div class="left">
      <a href="#">
        <div class="logo">
          <img src="../assets/logo/nuxt.svg" alt="logo">
          <span>Nuxt Blog</span>
        </div>
        <div class="tag">

        </div>
      </a>
  </div>

  <div class="center">
    <ul>
      <li>Java <Icon name="uil:angle-down" size="20" /></li>
      <li>Web <Icon name="uil:angle-down" size="20" /></li>
      <li>Linux <Icon name="uil:angle-down" size="20" /></li>
      <li>Rust <Icon name="uil:angle-down" size="20" /></li>
      <li>Go <Icon name="uil:angle-down" size="20" /></li>
      <li>Python <Icon name="uil:angle-down" size="20" /></li>
      <li>Tools <Icon name="uil:angle-down" size="20" /></li>
      <li>Application <Icon name="uil:angle-down" size="20" /></li>
    </ul>
  </div>

  <div class="right">
    <Icon name="uil:search" size="20" />
    <Icon name="uil:sun" size="20" />
    <div class="avatar">
      <img src="../assets/images/avatar.jpg" alt="avatar">
    </div>
  </div>
</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap');
* {
  font-family: 'Public Sans', sans-serif;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #FFFFFF;
  width: 100%;
  height: 64px;
  position: fixed;
  padding: 0 212px 0 212px;
  border-bottom: 1px solid #b8bcc2;
}

.left {
  height: 100%;

}

.left a {
  height: 100%;
  text-decoration-line: none;
  color: #3D4C62;
}

.left a .logo {
  height: 100%;
  display: flex;
  align-items: center;
}

.left img {
  height: 50px;
}

.left span {
  font-size: 20px;
  font-weight: 800;
  color: #0F172B;
}

.center {
  height: 100%;
}

.center ul {
  height: 100%;
  display: flex;
  align-items: center;
  list-style: none;
  gap: 32px;
  font-size: 14px;
  color: #3D4C62;
}

.center ul li {
  display: flex;
  align-items: center;
}

.right {
  display: flex;
  align-items: center;
  gap: 10px;
}

.right .avatar {
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
}

.right .avatar img {
  height: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}


</style>