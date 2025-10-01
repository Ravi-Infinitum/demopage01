<template>
  <div class="font-sans text-gray-900 bg-[#f0f0f2] min-h-screen">
    <header class="flex items-center border-b border-gray-900/20">
      <div class="flex items-center justify-between flex-1 pl-20 pr-4">
        <a href="">
          <LogoIcon />
        </a>
        <nav
          class="flex items-center space-x-10 text-sm uppercase font-medium text-gray-900"
        >
          <a
            v-for="item in menu"
            :key="item"
            class="py-1 hover:border-b hover:border-gray-900"
            href="#"
            >{{ item }}</a
          >
        </nav>
        <div class="flex items-center">
          <button class="h-16 px-6">
            <MenuIcon />
          </button>
          <button class="h-16 px-6">
            <SearchIcon />
          </button>
        </div>
      </div>
      <button
        class="flex items-center justify-center h-16 px-6 border-l border-gray-900/20"
      >
        <CartIcon />
      </button>
    </header>
    <main class="pt-8 pb-16 pl-20">
      <button class="mb-6">
        <ArrowLeftIcon />
      </button>
      <div class="flex gap-12">
        <!-- Left Column - Product Info -->
        <div class="flex flex-col w-2/5">
          <div class="max-w-lg">
            <div class="flex items-center text-sm">
              <span class="text-gray-900/40">Running Shoes&nbsp;</span>
              <span>/ Nike Air Zoom Pegasus</span>
            </div>
            
            <div class="pt-6">
              <h1 class="text-4xl font-bold tracking-wide leading-tight">Nike Air Zoom Pegasus</h1>
            </div>
            
            <div class="flex items-center justify-between pt-6">
              <span class="text-3xl font-semibold">$129.99</span>
              <div class="flex items-center gap-2">
                <div class="flex space-x-px">
                  <StarIcon v-for="i in 5" :key="i" />
                </div>
                <div class="leading-none text-sm">
                  4.8 <span class="text-gray-900/40">(2,847)</span>
                </div>
              </div>
            </div>
            
            <p class="pt-6 leading-relaxed text-gray-900/80">Experience responsive cushioning and exceptional comfort with the Nike Air Zoom Pegasus. Engineered with Nike React foam and Zoom Air units for a smooth, energetic ride.</p>
            
            <div class="pt-8">
              <div class="text-sm font-medium uppercase mb-3 tracking-wide">Size (US)</div>
              <div class="flex gap-3">
                <button 
                  v-for="size in sizes" 
                  :key="size"
                  @click="selectedSize = size"
                  :class="[
                    'px-6 py-3 border-2 text-sm font-medium transition-all rounded-sm',
                    selectedSize === size 
                      ? 'border-[#64748B] bg-[#64748B] text-white' 
                      : 'border-gray-900/20 hover:border-[#64748B]'
                  ]"
                >
                  {{ size }}
                </button>
              </div>
            </div>

            <div class="pt-8">
              <button class="w-full py-4 text-sm font-bold text-white uppercase bg-[#64748B] rounded-sm hover:bg-[#475569] transition-colors">
                Add to cart
              </button>
            </div>
            
            <div class="pt-6 text-sm text-gray-900/60">
              Free shipping on orders over $50 • 60-day return policy
            </div>
            
            <div class="pt-8 space-y-4 text-sm">
              <div class="flex items-start gap-3">
                <span class="text-[#64748B] font-medium">✓</span>
                <span class="text-gray-900/70">Nike React foam provides soft, responsive cushioning</span>
              </div>
              <div class="flex items-start gap-3">
                <span class="text-[#64748B] font-medium">✓</span>
                <span class="text-gray-900/70">Dual Air Zoom units for energy return with every step</span>
              </div>
              <div class="flex items-start gap-3">
                <span class="text-[#64748B] font-medium">✓</span>
                <span class="text-gray-900/70">Breathable mesh upper keeps feet cool and comfortable</span>
              </div>
            </div>
            
            <div class="flex items-center justify-between pt-10 border-t border-gray-900/10 mt-10">
              <button class="flex items-center space-x-2 text-[#64748B] hover:text-[#475569] transition-colors">
                <HeartIcon class="stroke-current" />
                <span class="text-sm font-medium">Add to Wishlist</span>
              </button>
              <div class="flex items-center space-x-5">
                <button class="opacity-60 hover:opacity-100 transition-opacity"><FacebookIcon class="w-5 h-5" /></button>
                <button class="opacity-60 hover:opacity-100 transition-opacity"><TwitterIcon class="w-5 h-5" /></button>
                <button class="opacity-60 hover:opacity-100 transition-opacity"><PinterestIcon class="w-5 h-5" /></button>
                <button class="opacity-60 hover:opacity-100 transition-opacity"><InstagramIcon class="w-5 h-5" /></button>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column - Image/3D Viewer -->
        <div class="relative flex flex-col flex-1 pr-20">
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-start space-x-2">
              <span class="text-2xl font-bold leading-tight">{{ String(activeImageIndex + 1).padStart(2, '0') }}</span>
              <span class="text-lg text-gray-900/60">/ 05</span>
            </div>
            <div class="flex gap-6">
              <button @click="previousImage" class="p-2 hover:bg-gray-900/5 rounded transition-colors"><ChevronLeftIcon /></button>
              <button @click="nextImage" class="p-2 hover:bg-gray-900/5 rounded transition-colors"><ChevronRightIcon /></button>
            </div>
          </div>
          
          <!-- 3D Model Embed (always rendered, preloaded in background) -->
          <div 
            :class="[
              'w-full bg-gray-50 rounded-lg mb-6 overflow-hidden transition-opacity duration-300',
              show3DModel ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none absolute'
            ]" 
            style="height: 600px;"
          >
            <iframe 
              src="https://www.quikhost3d.com/viewer/68db1cc95e4c6f59880792d3?embed=true" 
              width="100%" 
              height="100%" 
              frameborder="0" 
              allowfullscreen
              class="rounded-lg"
            ></iframe>
          </div>
          
          <!-- Product Image -->
          <div 
            :class="[
              'w-full bg-gray-50 rounded-lg mb-6 overflow-hidden transition-opacity duration-300',
              show3DModel ? 'opacity-0 pointer-events-none absolute' : 'opacity-100 pointer-events-auto'
            ]" 
            style="height: 600px;"
          >
            <img 
              :src="`/img/ProductImage${activeImageIndex + 1}.jpg`" 
              alt="Nike Air Zoom Pegasus"
              class="w-full h-full object-contain"
            />
          </div>

          <div class="absolute w-[400px] h-[280px] bg-gradient-to-r from-transparent to-[#64748B]/10 top-32 right-0 pointer-events-none"></div>
          
          <div class="flex items-center">
            <button 
              @click="show3DModel = !show3DModel"
              class="px-5 py-2.5 text-sm font-medium text-[#64748B] border-2 border-[#64748B] rounded-sm hover:bg-[#64748B] hover:text-white transition-colors"
            >
              {{ show3DModel ? 'View Photos' : 'View 3D Model' }}
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity'
import ArrowLeftIcon from './icons/arrow-left.svg'
import CartIcon from './icons/cart.svg'
import ChevronLeftIcon from './icons/chevron-left.svg'
import ChevronRightIcon from './icons/chevron-right.svg'
import FacebookIcon from './icons/facebook.svg'
import HeartIcon from './icons/heart.svg'
import InstagramIcon from './icons/instagram.svg'
import LogoIcon from './icons/logo.svg'
import MenuIcon from './icons/menu.svg'
import PinterestIcon from './icons/pinterest.svg'
import SearchIcon from './icons/search.svg'
import StarIcon from './icons/star.svg'
import TwitterIcon from './icons/twitter.svg'

const menu = ["Shop", "Collective", "Designer", "About us", "Contact"];

const activeImageIndex = ref(0);
const show3DModel = ref(false);
const selectedSize = ref('9');
const sizes = ['8.5', '9', '10'];

const setActiveImage = (index) => {
  activeImageIndex.value = index;
  show3DModel.value = false;
};

const previousImage = () => {
  if (activeImageIndex.value > 0) {
    activeImageIndex.value--;
  } else {
    activeImageIndex.value = 4;
  }
  show3DModel.value = false;
};

const nextImage = () => {
  if (activeImageIndex.value < 4) {
    activeImageIndex.value++;
  } else {
    activeImageIndex.value = 0;
  }
  show3DModel.value = false;
};
</script>