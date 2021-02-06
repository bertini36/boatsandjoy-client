<template>
  <footer>
    <div class="w-full px-6 lg:w-1/2 lg:px-0 flex flex-col">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
        <div class="flex flex-col text-xs">
          <h4>About me</h4>
          <div class="pt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
        </div>

        <div class="flex flex-col text-xs">
          <h4>Links</h4>
          <div class="pt-3">
            <ul>
              <li><a href="#" target="_blank">Legal advice</a></li>
              <li><a href="#" target="_blank"> Terms and Conditions</a></li>
              <li><a href="#" target="_blank">Cookies policy</a></li>
            </ul>
          </div>
        </div>

        <div class="flex flex-col">
          <h4>Contact</h4>
          <div class="pt-3">
            <ul>
              <li>C/Omelades 2A 2º 1ª 07012 Palma de Mallorca</li>
              <li>(+34) 722 333 428</li>
              <li>info@boatsandjoy.com</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="flex flex-row justify-center pt-6 pb-3">
        © boatsandjoy &nbsp;&nbsp;|&nbsp;&nbsp; All rights reserved &nbsp;&nbsp;|&nbsp;&nbsp; Created by&nbsp;<a href="https://albertopou.dev/" target="_blank">Alberto Pou</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
footer {
  @apply flex flex-row justify-center;
  @apply pt-10 text-xs shadow-md;
}

h4 {
  @apply font-bold uppercase tracking-widest text-orange-500;
}

a {
  @apply hover:underline hover:text-orange-500;
}
</style>
