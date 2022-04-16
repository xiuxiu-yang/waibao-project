<template>
  <div class="ruleDetail">
    <template v-for="(item, index) in arr" :key="item[0]">
      <span>
        {{ item[0] }}
        <input
          v-if="index !== arr.length - 1"
          type="text"
          :value="item[1]"
          @input="handlerChange(index, $event as InputEvent)"
        />
      </span>
    </template>
  </div>
</template>

<script setup lang="ts">
// eslint-disable-next-line no-undef
const props = defineProps<{
  content: string
}>()

const entris = props.content.split('-')
const arr: any[] = []
while (entris.length) {
  arr.push(entris.splice(0, 2))
}

const handlerChange = (index: number, event: any) => {
  arr[index][1] = event.target.value
}

const handlerEditRule = () => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      arr[i] = arr[i].join('-')
    }
  }
  return arr.join('-')
}

// eslint-disable-next-line no-undef
defineExpose({
  handlerEditRule
})
</script>

<style scoped lang="less">
.ruleDetail {
  input {
    width: 60px;
    height: 20px;
    border-radius: 5px;
  }
}
</style>
