<template>
  <div v-if="showing" class="animated fadeIn fixed z-50 pin flex bg-black-transparent inset-0 w-full h-full mx-auto my-auto items-center justify-center overflow-hidden">
    <div class="relative w-full mx-4 w-full md:max-w-5xl bg-white shadow-lg rounded-lg p-0 md:p-14">
      <button class="absolute top-0 right-0 text-xl text-black m-2" @click="close">
        <img alt="close icon" src="../assets/icons/icon-close-big.svg" class="m-2"/>
      </button>

      <slot />
    </div>
  </div>
</template>

<script>
import { watch } from 'vue';

export default {
  name: 'Modal',
  props: {
    showing: Boolean,
  },

  setup(props, { emit }) {
    const enableScrolling = () => window.onscroll = function() {};

    const close = () => {
      enableScrolling();
      emit('close');
    };

    watch(() => props.showing, (newValue, previousValue) => {
      if (previousValue === false && newValue === true)
        disableScrolling();
    });

    const disableScrolling = () => {
      let x = window.scrollX;
      let y = window.scrollY;
      window.onscroll = function () {
        window.scrollTo(x, y);
      };
    };

    return {
      close
    }
  },
}
</script>
