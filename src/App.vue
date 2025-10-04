<template>
  <div class="font-sans text-gray-900 bg-[#f0f0f2] min-h-screen">
    <header class="flex items-center border-b border-gray-900/20">
      <div class="flex items-center justify-between flex-1 px-4 md:pl-20 md:pr-4">
        <a href="">
          <LogoIcon class="w-8 h-8 md:w-auto md:h-auto" />
        </a>
        
        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-10 text-sm uppercase font-medium text-gray-900">
          <a
            v-for="item in menu"
            :key="item"
            class="py-1 hover:border-b hover:border-gray-900"
            href="#"
            >{{ item }}</a
          >
        </nav>
        
        <div class="flex items-center">
          <button class="h-12 px-4 md:h-16 md:px-6">
            <MenuIcon class="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button class="h-12 px-4 md:h-16 md:px-6">
            <SearchIcon class="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </div>
      <button class="flex items-center justify-center h-12 px-4 md:h-16 md:px-6 border-l border-gray-900/20">
        <CartIcon class="w-5 h-5 md:w-6 md:h-6" />
      </button>
    </header>
    
    <main class="pt-4 pb-8 px-4 md:pt-8 md:pb-16 md:pl-20 md:pr-0">
      <button class="mb-4 md:mb-6">
        <ArrowLeftIcon class="w-5 h-5 md:w-6 md:h-6" />
      </button>
      
      <div class="flex flex-col lg:flex-row gap-6 md:gap-12">
        <!-- Left Column - Product Info -->
        <div class="flex flex-col w-full lg:w-2/5 order-2 lg:order-1">
          <div class="max-w-lg">
            <div class="flex items-center text-xs md:text-sm">
              <span class="text-gray-900/40">Running Shoes&nbsp;</span>
              <span>/ Nike Air Zoom Pegasus</span>
            </div>
            
            <div class="pt-4 md:pt-6">
              <h1 class="text-2xl md:text-4xl font-bold tracking-wide leading-tight">Nike Air Zoom Pegasus</h1>
            </div>
            
            <div class="flex items-center justify-between pt-4 md:pt-6">
              <span class="text-2xl md:text-3xl font-semibold">$129.99</span>
              <div class="flex items-center gap-2">
                <div class="flex space-x-px">
                  <StarIcon v-for="i in 5" :key="i" class="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div class="leading-none text-xs md:text-sm">
                  4.8 <span class="text-gray-900/40">(2,847)</span>
                </div>
              </div>
            </div>
            
            <p class="pt-4 md:pt-6 text-sm md:text-base leading-relaxed text-gray-900/80">Experience responsive cushioning and exceptional comfort with the Nike Air Zoom Pegasus. Engineered with Nike React foam and Zoom Air units for a smooth, energetic ride.</p>
            
            <div class="pt-6 md:pt-8">
              <div class="text-xs md:text-sm font-medium uppercase mb-3 tracking-wide">Size (US)</div>
              <div class="flex gap-2 md:gap-3">
                <button 
                  v-for="size in sizes" 
                  :key="size"
                  @click="selectedSize = size"
                  :class="[
                    'px-4 py-2 md:px-6 md:py-3 border-2 text-xs md:text-sm font-medium transition-all rounded-sm',
                    selectedSize === size 
                      ? 'border-[#64748B] bg-[#64748B] text-white' 
                      : 'border-gray-900/20 hover:border-[#64748B]'
                  ]"
                >
                  {{ size }}
                </button>
              </div>
            </div>

            <div class="pt-6 md:pt-8">
              <button class="w-full py-3 md:py-4 text-xs md:text-sm font-bold text-white uppercase bg-[#64748B] rounded-sm hover:bg-[#475569] transition-colors">
                Add to cart
              </button>
            </div>
            
            <div class="pt-4 md:pt-6 text-xs md:text-sm text-gray-900/60">
              Free shipping on orders over $50 • 60-day return policy
            </div>
            
            <div class="pt-6 md:pt-8 space-y-3 md:space-y-4 text-xs md:text-sm">
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
            
            <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 md:pt-10 border-t border-gray-900/10 mt-8 md:mt-10">
              <button class="flex items-center space-x-2 text-[#64748B] hover:text-[#475569] transition-colors">
                <HeartIcon class="stroke-current w-5 h-5" />
                <span class="text-xs md:text-sm font-medium">Add to Wishlist</span>
              </button>
              <div class="flex items-center space-x-4 md:space-x-5">
                <button class="opacity-60 hover:opacity-100 transition-opacity"><FacebookIcon class="w-4 h-4 md:w-5 md:h-5" /></button>
                <button class="opacity-60 hover:opacity-100 transition-opacity"><TwitterIcon class="w-4 h-4 md:w-5 md:h-5" /></button>
                <button class="opacity-60 hover:opacity-100 transition-opacity"><PinterestIcon class="w-4 h-4 md:w-5 md:h-5" /></button>
                <button class="opacity-60 hover:opacity-100 transition-opacity"><InstagramIcon class="w-4 h-4 md:w-5 md:h-5" /></button>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column - Image/3D Viewer -->
        <div class="relative flex flex-col flex-1 lg:pr-20 order-1 lg:order-2">
          <div class="flex items-center justify-between mb-4 md:mb-6">
            <div class="flex items-start space-x-2">
              <span class="text-xl md:text-2xl font-bold leading-tight">{{ String(activeImageIndex + 1).padStart(2, '0') }}</span>
              <span class="text-base md:text-lg text-gray-900/60">/ 05</span>
            </div>
            <div class="flex gap-4 md:gap-6">
              <button @click="previousImage" class="p-1.5 md:p-2 hover:bg-gray-900/5 rounded transition-colors">
                <ChevronLeftIcon class="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <button @click="nextImage" class="p-1.5 md:p-2 hover:bg-gray-900/5 rounded transition-colors">
                <ChevronRightIcon class="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
          </div>
          
          <!-- 3D Model Embed -->
          <div 
            :class="[
              'w-full bg-gray-50 rounded-lg mb-4 md:mb-6 overflow-hidden transition-opacity duration-300',
              show3DModel ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none absolute'
            ]" 
            :style="{ height: isMobile ? '300px' : '600px' }"
          >
            <iframe 
              src="https://www.quikhost3d.com/viewer/68e12c4d55dd7b65f11e5908?embed=true" 
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
              'w-full bg-gray-50 rounded-lg mb-4 md:mb-6 overflow-hidden transition-opacity duration-300',
              show3DModel ? 'opacity-0 pointer-events-none absolute' : 'opacity-100 pointer-events-auto'
            ]" 
            :style="{ height: isMobile ? '300px' : '600px' }"
          >
            <img 
              :src="`/img/ProductImage${activeImageIndex + 1}.jpg`" 
              alt="Nike Air Zoom Pegasus"
              class="w-full h-full object-contain"
            />
          </div>

          <div class="hidden lg:block absolute w-[400px] h-[280px] bg-gradient-to-r from-transparent to-[#64748B]/10 top-32 right-0 pointer-events-none"></div>
          
          <div class="flex items-center">
            <button 
              @click="show3DModel = !show3DModel"
              class="px-4 py-2 md:px-5 md:py-2.5 text-xs md:text-sm font-medium text-[#64748B] border-2 border-[#64748B] rounded-sm hover:bg-[#64748B] hover:text-white transition-colors"
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
import { ref, computed, onMounted, onUnmounted } from 'vue'
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
const windowWidth = ref(window.innerWidth);

const isMobile = computed(() => windowWidth.value < 768);

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

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
