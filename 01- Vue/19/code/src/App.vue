<!--
===================================
Main Vue File(Root Component)
===================================
-->

<template>
  <div class="wrapper-app">
    <BookCard v-bind="book" @add-to-cart="addToCard" @set-reminder="setReminder" />
  </div>
</template>

<script setup lang="ts">
import BookCard from './components/BookCard.vue'
import { type Book } from '@/type/Book'

const book: Book = {
  _id: 'bk_1001',
  title: '1984',
  author: 'George Orwell',
  price: 12,
  imgPath: '/src/assets/imgs/1984.jpg',
  inStock: true,
  quantity: 3,
  discount: 40
}

const addToCard = (bookId: string, amount: number) => {
  console.log('addToCard is called, bookId and amount are: ', bookId, amount)
}

const setReminder = (bookId: string) => {
  console.log('setRemindr is called, bookId is: ', bookId)
}
</script>

<style lang="less"></style>
