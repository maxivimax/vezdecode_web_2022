<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="fixed inset-0 overflow-hidden" @close="open = false">
      <div class="absolute inset-0 overflow-hidden">
        <TransitionChild
          as="template"
          enter="ease-in-out duration-500"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in-out duration-500"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
          <TransitionChild
            as="template"
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enter-from="translate-x-full"
            enter-to="translate-x-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leave-from="translate-x-0"
            leave-to="translate-x-full"
          >
            <div class="pointer-events-auto w-screen max-w-md">
              <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                  <div class="flex items-start justify-between">
                    <DialogTitle class="text-lg font-medium text-gray-900">Корзина</DialogTitle>
                    <div class="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        class="-m-2 p-2 text-gray-400 hover:text-gray-500"
                        @click="open = false"
                      >
                        <span class="sr-only">Close panel</span>
                        <XIcon class="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  <div class="mt-8">
                    <div class="flow-root">
                      <ul role="list" class="-my-6 divide-y divide-gray-200">
                        <li v-for="product in this.$store.state.cart" :key="product.id" class="flex py-6">
                          <div
                            class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
                          >
                            <img
                              :src="product.imageSrc"
                              :alt="product.imageAlt"
                              class="h-full w-full object-cover object-center"
                            />
                          </div>

                          <div class="ml-4 flex flex-1 flex-col">
                            <div>
                              <div class="flex justify-between text-base font-medium text-gray-900">
                                <h3>
                                  <a :href="product.href">{{ product.name }}</a>
                                </h3>
                                <p class="ml-4">{{ product.price*product.quantity }} USD</p>
                              </div>
                              <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
                            </div>
                            <div class="flex flex-1 items-end justify-between text-sm">
                              <p class="text-gray-500">Кол-во: {{ product.quantity }}</p>

                              <div class="flex">
                                <button
                                  type="button"
                                  @click="delFromCart(product)"
                                  class="font-medium text-indigo-600 hover:text-indigo-500"
                                >Удалить</button>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
                  <div class="flex justify-between text-base font-medium text-gray-900">
                    <p>Итог</p>
                    <p>{{totalPrice()}} USD</p>
                  </div>
                  <div class="mt-6">
                    <a
                      href="#"
                      v-if="this.$store.state.cartCount>0"
                      class="flex items-center justify-center rounded-md border border-transparent bg-pink-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                    >К оплате</a>
                    <span
                      v-if="this.$store.state.cartCount==0"
                      style="cursor: default;"
                      class="flex items-center justify-center rounded-md border border-transparent bg-gray-400 px-6 py-3 text-base font-medium text-white shadow-sm"
                    >Корзина пуста</span>
                  </div>
                  <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      <button
                        type="button"
                        class="font-medium text-pink-600 hover:text-pink-500"
                        @click="open = false"
                      >
                        Продолжить покупки
                        <span aria-hidden="true">&rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { ref } from 'vue'
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XIcon } from '@heroicons/vue/outline'

const open = ref(false)

export default {
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    XIcon,
  },
  methods: {
    resetIsShowing() {
      open.value = true
    },
    totalPrice() {
        let total = 0;

        for (let item of this.$store.state.cart) {
            total += parseInt(item.price*item.quantity);
        }

        return total;
    },
    delFromCart(item) {
        this.$store.commit("removeFromCart", item)
    }
  },
  setup() {
    return {
      open,
    }
  },

}
</script>
