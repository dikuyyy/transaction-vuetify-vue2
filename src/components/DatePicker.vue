<template>
  <v-menu
      v-model="fromDateMenu"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
  >
    <v-text-field
        hide-details
        filled
        dense
        :label="label"
        :value="dateFormat"
        v-model="model"
        prepend-icon="mdi-calendar"
        readonly
    />
    <v-date-picker
        v-model="model"
        @input="fromDateMenu = false"
        no-title
    />
  </v-menu>
</template>

<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
  errors: {
    type: Array,
    default: null,
  },
  hideBottomSpace: {
    type: Boolean,
    default: true,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: '',
  },
  modelValue: null,
});

const emits = defineEmits(['update:modelValue']);
const fromDateMenu = ref(false);

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};

const dateFormat = ref('');

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    dateFormat.value = formatDate(value);
    emits('update:modelValue', value);
  },
});
</script>

<style>
/* Add your custom styles here */
</style>
