<template>
  <TransitionRoot as="template" :show="open">
    <Dialog
      as="div"
      class="fixed z-10 inset-0 overflow-y-auto rounded-3xl"
      style="-webkit-box-shadow: 4px 4px 58px 27px rgba(0, 0, 0, 0.2);-moz-box-shadow: 4px 4px 58px 27px rgba(0, 0, 0, 0.2);box-shadow: 4px 4px 58px 27px rgba(0, 0, 0, 0.2);"
      :open="open"
      @close="close()"
    >
      <TransitionChild
        as="template"
        enter="ease-out duration-2000"
        enter-from="opacity-0 translate-y-4 md:translate-y-0 md:scale-2000"
        enter-to="opacity-100 translate-y-0 md:scale-2000"
        leave="ease-in duration-2000"
        leave-from="opacity-100 translate-y-0 md:scale-2000"
        leave-to="opacity-0 translate-y-4 md:translate-y-0 md:scale-2000"
      >
        <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
          <div class="relative bg-white shadow dark:bg-gray-700">
            <div
              class="flex justify-between items-start p-5 rounded-3xl border-b dark:border-gray-600"
            >
              <h3
                class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white"
              >Редактирование элемента</h3>
              <button
                type="button"
                v-on:click="$emit('closeEdit')"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="defaultModal"
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <form>
              <div class="mb-6">
                <label
                  for="label"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Название</label>
                <input
                  type="text"
                  id="label"
                  v-model="label"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Лучшее название на свете"
                  required
                />
              </div>
              <div class="mb-6">
                <label
                  for="desc"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Описание</label>
                <input
                  type="text"
                  id="desc"
                  v-model="desc"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Лучшее описание на свете"
                  required
                />
              </div>
              <div class="mb-6">
                <label
                  for="price"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Цена</label>
                <input
                  type="number"
                  id="price"
                  v-model="price"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  placeholder="USD"
                />
              </div>

              <button
                type="submit"
                @click="saveCard(product, product.id, label, desc, price)"
                class="text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >Готово</button>
            </form>
          </div>
        </div>
      </TransitionChild>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { ref } from 'vue'
const open = ref(false)

export default {
  props: {
    productId: String,
    popup: Boolean
  },
  components: {},
  methods: {
    close() {
      open.value = false
    },
    show() {
      open.value = true
    },
    saveCard(product, id, label, desc, price){
      product[id].label = label + desc + price
    }
  },
  setup(props) {
    const data = require('../assets/products.json')
    const product = data[props.productName]

    return {
      product,
      open,
    }
  },
  data() {
    return {
      label: '',
      desc: '',
      price: '',
    }
  }
}
</script>

<style>
</style>