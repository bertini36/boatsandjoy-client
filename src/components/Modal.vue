<template>
  <div v-if="localShowing" role="dialog" tabindex="-1"
       class="animated fadeIn fixed z-50 flex md:bg-black-transparent bg-white top-0 left-0 w-full h-full md:items-center mx-auto my-auto overflow-scroll md:overflow-hidden">
    <div class="relative w-full mx-auto w-full md:max-w-3xl bg-white md:shadow-md md:rounded-md px-8 py-14 md:px-14" role="document">
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
import { watch, ref } from 'vue';

export default {
  props: {
    showing: Boolean,
  },
  emits: ['close'],

  setup(props, { emit }) {
    const localShowing = ref(props.showing);
    const enableScrolling = () => window.onscroll = function() {};

    const close = () => {
      localShowing.value = false;
      enableScrolling();
      emit('close');
    };

    watch(() => props.showing, (newValue, previousValue) => {
      if (previousValue === false && newValue === true) disableScrolling();
      localShowing.value = newValue;
    });

    const disableScrolling = () => {
      let x = window.scrollX;
      let y = window.scrollY;
      window.onscroll = function() {
        window.scrollTo(x, y);
      };
    };

    return {
      localShowing,
      close,
    }
  },
}
</script>
