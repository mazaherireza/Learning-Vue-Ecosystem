<!--
====================================
Building Block of the App
====================================
-->

<template>
  <div class="wrapper-bookCard">
    <img :src="constructFullPath" :alt="props.title" />
    <h3 class="text-3xl font-bold">{{ props.title }}</h3>
    <div class="my-2">
      <span class="text-base italic">By </span>
      <span class="text-xl font-medium">{{ props.author }}</span>
    </div>
    <template v-if="props.inStock">
      <template v-if="hasDiscount">
        <div class="flex items-center gap-2 my-1">
          <div class="w-10 text-center text-xs p-1 rounded-sm font-bold text-white bg-red-900">
            %{{ props.discount }}
          </div>
          <div class="line-through text-gray-300 font-medium">
            {{ props.price }}
          </div>
        </div>
      </template>

      <div class="font-bold text-xlg">${{ calculteDiscountPrice }}</div>

      <div
        class="flex items-center justify-between rounded-md w-1/2 h-11 bg-white border border-gray-200 ml-auto px-1 py-2"
        v-if="amount >= 1"
      >
        <template v-if="amount == 1">
          <IconTrash class="cursor-pointer" color="#e41f1f" :size="24" @click="amount = 0" />
        </template>
        <template v-else>
          <IconMinus class="cursor-pointer" color="#e41f1f" :size="24" @click="amount -= 1" />
        </template>
        <div class="flex flex-col items-center p-2">
          <span class="font-bold">{{ amount }}</span>
          <span class="text-xs font-medium text-gray-700" v-if="amount == props.quantity">Max</span>
        </div>
        <IconPlus
          :class="{ lowOpacity: amount == props.quantity }"
          class="cursor-pointer"
          color="#e41f1f"
          :size="24"
          @click="increaseAmount"
        />
      </div>
      <button v-else @click="addToCardHandler">Add To Card</button>
    </template>
    <template v-else>
      <p class="font-bold">Out of stock!</p>
      <button class="mt-4" @click="setReminder">Remind me later!</button>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { type Book } from '@/type/Book'
import { IconPlus, IconMinus, IconTrash } from '@tabler/icons-vue'

const props = defineProps<Book>()

const BASE_URL = 'http://127.0.0.1:5173/'
const constructFullPath = computed(() => {
  return `${BASE_URL + props.imgPath}`
})

const hasDiscount = computed(() => {
  return props?.discount ?? false
})

const calculteDiscountPrice = computed(() => {
  return props.price - (props.price * (props?.discount ?? 100)) / 100
})

const emit = defineEmits<{
  (e: 'addToCart', bookId: string, amount: number): void
  (e: 'setReminder', bookId: string): void
}>()

const amount = ref<number>(0)

const increaseAmount = () => {
  if (amount.value < props.quantity) amount.value++
}
const addToCardHandler = () => {
  increaseAmount()
  emit('addToCart', props._id ?? '-1', amount.value)
}
const setReminder = () => {
  emit('setReminder', props._id ?? '-1')
}
</script>

<style lang="less">
.wrapper-bookCard {
  @apply w-60 bg-white rounded-lg p-4 flex flex-col;
  button {
    @apply block h-11 p-2 mt-2 mb-4 border-none rounded-lg font-bold bg-red-900 text-white;
  }
  .lowOpacity {
    @apply opacity-50;
  }
}
</style>
