<template>
  <footer>
    <div class="w-full px-6 lg:w-1/2 lg:px-0 flex flex-col">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
        <div class="flex flex-col text-xs">
          <h4>{{ $t('footer_about_us_title') }}</h4>
          <div class="pt-3">{{ $t('footer_about_us_content') }}</div>
        </div>

        <div class="flex flex-col text-xs">
          <h4>{{ $t('footer_links_title') }}</h4>
          <div class="pt-3">
            <ul>
              <li><a href="#" target="_blank">{{ $t('footer_legal_advice') }}</a></li>
              <li><a href="#" target="_blank">{{ $t('footer_terms') }}</a></li>
              <li><a href="#" target="_blank">{{ $t('footer_cookies') }}</a></li>
            </ul>
          </div>
        </div>

        <div class="flex flex-col">
          <h4>{{ $t('footer_contact_title') }}</h4>
          <div class="pt-3">
            <ul>
              <li>{{ $t('footer_company_address') }}</li>
              <li>(+34) 722 333 428</li>
              <li>info@boatsandjoy.com</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="flex flex-row justify-center pt-6 pb-3">
        © boatsandjoy &nbsp;&nbsp;|&nbsp;&nbsp; {{ $t('footer_rights') }} &nbsp;&nbsp;|&nbsp;&nbsp; {{ $t('footer_created') }}&nbsp;<a href="https://albertopou.dev/" target="_blank">Alberto Pou</a>
      </div>
    </div>
  </footer>
</template>

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
