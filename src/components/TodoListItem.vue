<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({ todo: { type: Object, required: true } });
const emit = defineEmits(['openTodo'])

const openTodo = () => {
  emit('openTodo', props.todo)
}
</script>

<template>
  <v-card>
    <v-card-text :class="todo.completed ? 'bg-green' : 'bg-red'">{{
      todo.completed ? "Completed" : "To do"
    }}</v-card-text>
    <v-card-title>{{ todo.title }}</v-card-title>
    <v-card-subtitle>{{ todo.user?.email }}</v-card-subtitle>
    <v-card-actions>
      <v-btn @click="openTodo">Open</v-btn>
    </v-card-actions>
  </v-card>
</template>