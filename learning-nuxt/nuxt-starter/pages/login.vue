<script setup>

import {definePageMeta} from "#imports";
// https://nuxt.com/docs/api/utils/define-page-meta
definePageMeta({
  // 禁用布局
  layout: 'empty'
})

</script>

<template>
<div class="body">
  <div class="container" id="container">
    <div class="form-container">
      <div class="form">
        <h1>登录账户</h1>
        <div class="social-icons">
          <a href="#"><Icon name="uil:google" size="20"/></a>
          <a href="#"><Icon name="uil:github-alt" size="20" /></a>
          <a href="#"><Icon name="uil:facebook-f" size="20" /></a>
          <a href="#"><Icon name="uil:linkedin-alt" size="20" /></a>
        </div>
        <span>或者使用邮箱密码登录</span>
        <input type="email" placeholder="邮箱账号">
        <input type="password" placeholder="邮箱密码">
        <a href="#">忘记密码?</a>
        <button>登录</button>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@100;300;400;500;700;800;900&display=swap');

* {
  font-family: 'M PLUS 1p', sans-serif;
}

.body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, #a8edea, #fed6e3);
}

/* 父容器使用相对定位，子容器使用绝对定位 */
.container {
  background-color: #fff;
  border: 1px solid #00DC82;
  border-radius: 40px;
  overflow: hidden;
  min-height: 480px;
  max-width: 100%;
  width: 384px;
  position: relative;
  box-shadow: 0 5px 15px rgb(0, 220, 130, 0.25);
}

.container p {
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  margin: 20px 0;
}

.container span {
  font-size: 12px;
}

.container a {
  text-decoration: none;
  color: #333;
  font-size: 13px;
  margin: 15px 0 10px;
}

.container button {
  border-radius: 8px;
  background-color: #00DC82;
  color: #000000;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 45px;
  margin: 10px 0;
  cursor: pointer;
  outline: none;
}

.container .form {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 40px;
  background-color: #fff;
}

.container input {
  width: 100%;
  padding: 10px 15px;
  margin: 8px 0;
  background-color: #eee;
  border: none;
  outline: none;
  font-size: 13px;
}

.form-container {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all 0.6s ease-in-out;
  background-color: #fff;
}

.social-icons {
  margin: 20px 0;
  display: flex;
}

.social-icons a {
  border: 1px solid #ccc;
  border-radius: 20%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 3px;
  width: 40px;
  height: 40px;
  font-size: 20px;
}

.social-icons a:hover {
  border-color: #9c9c9c;
}
</style>