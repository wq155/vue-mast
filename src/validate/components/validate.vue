<style>
	.error {
		color: red;
	}
</style>

<template>
  <validator name="validation1">
    用户名: <input type="text" v-validate:username=['required']><br />
    邮箱: <input type="text" v-validate:address="['email']"><br />
    年龄: <input type="text" v-validate:age=['numeric']><br />
    网址: <input type="text" v-validate:site=['url']><br />
    <div class="error">
      <p v-if="$validation1.username.required">用户名为必填信息</p>
      <p v-if="$validation1.address.email">非法的邮箱</p>
      <p v-if="$validation1.age.numeric">非法的年龄值</p>
      <p v-if="$validation1.site.url">非法url地址</p>
      <p v-if="$validation1.password.url">非法url地址</p>
    </div>
  <validator>
</template>

<script>

export default {
	validators: { //局部注册
		numeric: function (val) {
          return /^[-+]?[0-9]+$/.test(val)
        },
        url: function (val) {
          return /^(http\:\/\/|https\:\/\/)(.{4,})$/.test(val)
        }
	}
}
</script>