<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" :open="open" @close="close()">
      <div class="flex min-h-screen text-center md:block md:px-2 lg:px-4" style="font-size: 0">
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay
            class="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block"
          />
        </TransitionChild>

        <span class="hidden md:inline-block md:align-middle md:h-screen" aria-hidden="true">&#8203;</span>
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
          enter-to="opacity-100 translate-y-0 md:scale-100"
          leave="ease-in duration-200"
          leave-from="opacity-100 translate-y-0 md:scale-100"
          leave-to="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
        >
          <div
            class="flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl"
          >
            <div
              class="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8 rounded-3xl"
            >
              <button
                type="button"
                class="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-24"
                @click="openEdit()"
              >
                <PencilIcon class="h-6 w-6" aria-hidden="true" />
              </button>
              <button
                type="button"
                class="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                @click="open = false"
              >
                <XIcon class="h-6 w-6" aria-hidden="true" />
              </button>

              <div
                class="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8"
              >
                <div
                  class="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5"
                >
                  <img :src="product.imageSrc" alt="Image)))" class="object-center object-cover" />
                </div>
                <div class="sm:col-span-8 lg:col-span-7">
                  <h2 class="text-2xl font-extrabold text-gray-900 sm:pr-12">{{ product.name }}</h2>

                  <section aria-labelledby="information-heading" class="mt-2">
                    <p class="text-2xl text-gray-900">{{ product.price }} {{ product.currency }}</p>
                    <br />
                    <p class="text-lg text-gray-900">{{ product.description }}</p>
                  </section>

                  <section aria-labelledby="options-heading" class="mt-10">
                    <button
                      @click="addToCart(product)"
                      class="mt-6 w-full bg-pink-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                    >Добавить в корзину</button>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { ref } from 'vue'
import { XIcon, PencilIcon } from '@heroicons/vue/outline'
import {
  Dialog,
  DialogOverlay,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'

const open = ref(false)

export default {
  props: {
    productName: String
  },
  components: {
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
    XIcon,
    PencilIcon,
  },
  methods: {
    close() {
      open.value = false
    },
    show() {
      open.value = false

      setTimeout(() => {
        open.value = true
      }, 100)
    },
    addToCart(item) {
      this.$store.commit("addToCart", item)
    }
  },
  setup(props) {
    const data = require('../assets/products.json')
    const product = data[props.productName]

    return {
      product,
      open,
    }
  }
}
</script>