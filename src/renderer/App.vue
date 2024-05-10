
<script setup lang="ts">
console.log('👋 Hello World!')

const sendMessage = () => {
  console.log('📤 发送消息')
  window.electronAPI.message('Hello from Vue!')
}

const sendAndReceive = async () => {
  const ret = await window.electronAPI.receiveAndReturn('Hello from Vue!')
  console.log('📤 发送消息并接收回复', ret)
}

</script>

<template>
  <div>
    <div>Hello World!</div>
    <p>Welcome to your Font Mini...嗨嗨</p>
    <button @click="sendMessage">
      单向通信
    </button>
    <button @click="sendAndReceive">
      双向通信
    </button>
  </div>
</template>

