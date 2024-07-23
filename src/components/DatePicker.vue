<template>
  <v-menu
      v-model="fromDateMenu"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
          hide-details
          filled
          dense
          :label="label"
          :value="dateFormat"
          v-model="model"
          prepend-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
      />
    </template>
    <v-date-picker
        v-model="model"
        @input="fromDateMenu = false"
        no-title
    />
  </v-menu>
</template>

<script>
export default {
  props: {
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
    modelValue: {
      type: [String, Date],
      default: null,
    }
  },
  data() {
    return {
      fromDateMenu: false,
      dateFormat: ''
    };
  },
  computed: {
    model: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.dateFormat = this.formatDate(value);
        this.$emit('update:modelValue', value);
      }
    }
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
      const year = date.getFullYear();

      return `${day}-${month}-${year}`;
    }
  }
};
</script>

<style>
/* Add your custom styles here */
</style>
