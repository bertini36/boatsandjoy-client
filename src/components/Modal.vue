<template>
  <div v-if="showing" class="animated fadeIn fixed z-50 pin flex bg-black-transparent inset-0 w-full h-full mx-auto my-auto items-center justify-center overflow-hidden">
    <div class="relative w-full mx-4 w-full md:max-w-5xl bg-white shadow-lg rounded-lg p-0 md:p-14">
      <button class="absolute top-0 right-0 text-xl text-black m-2 focus:outline-none" @click="close">
       <svg xmlns="http://www.w3.org/2000/svg" class="m-2 w-8 h-8 fill-current text-black hover:text-orange-600">
         <path d="M19.571.429c-.571-.572-1.428-.572-2 0L10 8 2.429.429c-.572-.572-1.429-.572-2 0-.572.571-.572 1.428 0 2L8 10 .429 17.571c-.572.572-.572 1.429 0 2 .285.286.571.429 1 .429.428 0 .714-.143 1-.429L10 12l7.571 7.571c.286.286.715.429 1 .429.286 0 .715-.143 1-.429.572-.571.572-1.428 0-2L12 10l7.571-7.571c.572-.572.572-1.429 0-2z" transform="translate(-134 -194) translate(140 200)"/>
       </svg>
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
