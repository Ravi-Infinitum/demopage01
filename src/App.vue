<template>
  <div class="font-sans text-brand-dark bg-white min-h-screen antialiased selection:bg-brand-dark/10 selection:text-brand-dark">
    <!-- TOP PROMO BANNER (MINIMALIST STYLE) -->
    <transition name="slide-up">
      <div 
        v-if="showPromoBanner" 
        class="bg-brand-dark text-white text-[10px] tracking-[0.25em] py-2.5 px-4 flex justify-between items-center z-50 relative uppercase"
      >
        <div class="flex items-center gap-4 mx-auto text-center font-light">
          <span>*** 500,000+ SATISFIED CUSTOMERS ***</span>
          <span class="hidden md:inline text-white/30">|</span>
          <span class="hidden md:inline">Same product available at <strong class="font-semibold text-brand-white">₹1,740</strong> on Flipkart</span>
        </div>
        <button 
          @click="showPromoBanner = false" 
          class="text-white/50 hover:text-white transition p-1 absolute right-4 top-1/2 -translate-y-1/2"
          aria-label="Dismiss banner"
        >
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </transition>

    <!-- HEADER (MINIMALIST & GENERIC STYLE) -->
    <header class="sticky top-0 bg-white border-b border-brand-border/60 z-40 h-20 transition-all duration-300">
      <!-- Expanded width to make use of screen edges -->
      <div class="w-full max-w-[1920px] h-full mx-auto px-4 md:px-8 xl:px-12 flex items-center justify-between">
        
        <!-- Left Navigation Links -->
        <nav class="hidden lg:flex items-center space-x-8 text-[11px] font-medium tracking-[0.25em] text-brand-dark uppercase">
          <a v-for="item in menuItems" :key="item.name" href="#" class="relative py-1 hover:text-brand-gray transition-colors">
            {{ item.name }}
          </a>
        </nav>

        <!-- Mobile Menu Trigger -->
        <button class="lg:hidden text-brand-dark hover:text-brand-gray transition-colors p-1" aria-label="Open menu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        <!-- Logo (Centered Minimalist Brand Name) -->
        <div class="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
          <a href="/" class="text-xl md:text-2xl font-light tracking-[0.45em] text-brand-dark hover:opacity-80 transition-opacity">
            STUDIO
          </a>
        </div>

        <!-- Right Action Icons & About -->
        <div class="flex items-center gap-6 md:gap-8">
          <a href="#" class="hidden md:inline text-[11px] font-medium tracking-[0.25em] text-brand-dark uppercase hover:text-brand-gray transition-colors">
            ABOUT
          </a>

          <div class="flex items-center space-x-6">
            <!-- Profile -->
            <button class="text-brand-dark hover:text-brand-gray transition-colors p-1" aria-label="Profile">
              <svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </button>

            <!-- Search -->
            <button class="text-brand-dark hover:text-brand-gray transition-colors p-1" aria-label="Search">
              <svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>

            <!-- Bag -->
            <button class="text-brand-dark hover:text-brand-gray transition-colors p-1 relative" aria-label="Shopping bag">
              <svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
              </svg>
              <span v-if="bagCount > 0" class="absolute -top-1.5 -right-1.5 bg-brand-dark text-white text-[8px] font-bold w-4 h-4 flex items-center justify-center rounded-full border border-white scale-90 animate-bounce">
                {{ bagCount }}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- BREADCRUMBS -->
    <div class="w-full max-w-[1920px] mx-auto px-4 md:px-8 xl:px-12 pt-6 pb-2">
      <div class="flex items-center flex-wrap gap-1 text-[10px] tracking-[0.15em] uppercase text-brand-gray font-light">
        <a href="/" class="hover:text-brand-dark transition-colors">Home</a>
        <span class="text-brand-border mx-1">/</span>
        <a href="/" class="hover:text-brand-dark transition-colors">Footwear</a>
        <span class="text-brand-border mx-1">/</span>
        <span class="text-brand-dark font-normal">Active Sneaker Showcase</span>
      </div>
    </div>

    <!-- MAIN PRODUCT LAYOUT (Full width design utilizing all space) -->
    <main class="w-full max-w-[1920px] mx-auto px-4 md:px-8 xl:px-12 pb-20 pt-4">
      <div class="flex flex-col lg:flex-row gap-8 xl:gap-14">
        
        <!-- LEFT COLUMN: PRIMARY MEDIA VIEWER & GALLERY GRID -->
        <div class="w-full lg:w-[62%] order-1 flex flex-col">
          
          <!-- PRIMARY VIEWER CONTAINER -->
          <div class="relative w-full aspect-[4/3] md:aspect-[16/10] bg-brand-lightGray rounded-sm overflow-hidden flex items-center justify-center">
            
            <!-- CENTRAL OVERLAY SWITCHER (Photos / 3D - Moved to Top, Centered, clear contrast) -->
            <div class="absolute top-6 left-1/2 -translate-x-1/2 z-20 flex bg-neutral-100/95 backdrop-blur-md p-1 rounded-full shadow-lg border border-brand-border/40 select-none scale-105 md:scale-110">
              <button 
                @click="viewMode = 'static'"
                class="px-5 py-2 text-[10px] font-bold tracking-[0.15em] uppercase rounded-full transition-all duration-300"
                :class="viewMode === 'static' ? 'bg-white text-brand-dark shadow-sm font-semibold' : 'text-brand-gray hover:text-brand-dark font-medium'"
              >
                Photos
              </button>
              <button 
                @click="viewMode = '3d'"
                class="px-5 py-2 text-[10px] font-bold tracking-[0.15em] uppercase rounded-full transition-all duration-300 flex items-center gap-1.5"
                :class="viewMode === '3d' ? 'bg-white text-brand-dark shadow-sm font-semibold' : 'text-brand-gray hover:text-brand-dark font-medium'"
              >
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                </svg>
                3D Model
              </button>
            </div>

            <!-- FULLSCREEN TRIGGER (Top-Right) -->
            <button 
              v-if="viewMode === 'static'"
              @click="openLightbox(activeImageIndex)"
              class="absolute top-4 right-4 z-20 p-2.5 bg-white/80 backdrop-blur-md rounded-full shadow-sm border border-brand-border/40 hover:bg-white text-brand-dark transition-colors"
              aria-label="View Fullscreen"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M20.25 3.75v4.5m0-4.5h-4.5m4.5 0L15 9m-11.25 11.25v-4.5m0 4.5h4.5m-4.5 0L9 15m11.25 5.25v-4.5m0 4.5h-4.5m4.5 0L15 15"></path>
              </svg>
            </button>

            <!-- VIEWPORT CONTENT -->
            <!-- 3D View: fully transparent iframe -->
            <div v-if="viewMode === '3d'" class="w-full h-full relative bg-transparent">
              <div v-if="iframeLoading" class="absolute inset-0 bg-transparent flex flex-col items-center justify-center z-10">
                <svg class="w-8 h-8 text-brand-dark animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span class="mt-3 text-[9px] font-semibold tracking-[0.2em] text-brand-gray uppercase">Loading Interactive 3D Model...</span>
              </div>
              <iframe
                src="https://app.3dinfinitum.com/viewer/6a19ee483a97b7b576be2732?embed=true"
                class="w-full h-full border-none bg-transparent"
                allowfullscreen
                @load="iframeLoading = false"
              ></iframe>
            </div>

            <!-- Photo View -->
            <div v-else class="w-full h-full relative">
              <img 
                :src="placeholders[activeImageIndex]" 
                alt="Main Showcase" 
                class="w-full h-full object-cover select-none"
              />
              
              <!-- Left/Right Slide Arrows -->
              <button 
                @click="previousImage" 
                class="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/70 hover:bg-white border border-brand-border/40 rounded-full shadow-sm text-brand-dark transition-all"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
                </svg>
              </button>
              <button 
                @click="nextImage" 
                class="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/70 hover:bg-white border border-brand-border/40 rounded-full shadow-sm text-brand-dark transition-all"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                </svg>
              </button>
            </div>
          </div>

          <!-- STATIC IMAGES GRID (Always visible here, so other images are never hidden even in 3D mode!) -->
          <div class="mt-4 flex flex-col">
            <div class="flex items-center justify-between mb-3">
              <span class="text-[10px] tracking-[0.2em] font-semibold text-brand-dark uppercase">All Photos ({{ placeholders.length }})</span>
              <span class="text-[9px] tracking-wider text-brand-gray uppercase">Click any image to show in primary view</span>
            </div>
            
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div 
                v-for="(img, idx) in placeholders" 
                :key="idx" 
                @click="selectThumbnail(idx)"
                class="relative aspect-[4/3] bg-brand-lightGray rounded-sm overflow-hidden cursor-pointer group border transition-all duration-300"
                :class="activeImageIndex === idx && viewMode === 'static' ? 'border-brand-dark ring-1 ring-brand-dark' : 'border-brand-border/40 hover:border-brand-gray'"
              >
                <img 
                  :src="img" 
                  alt="Product Gallery Thumbnail" 
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div class="absolute inset-0 bg-brand-dark/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span class="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm text-[8px] font-bold tracking-wider text-brand-dark uppercase">
                    Select
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT COLUMN: PRODUCT CONTENT & TECHNICAL DETAILS -->
        <div class="w-full lg:w-[38%] order-2 flex flex-col">
          
          <!-- BRAND, PRODUCT NAME & RATINGS -->
          <div class="pb-4 border-b border-brand-border/40">
            <h1 class="text-3xl font-bold tracking-wide text-brand-dark lowercase leading-none">
              yoho
            </h1>
            <p class="text-sm tracking-wide text-brand-gray mt-2">Men Perforations PU Sneakers</p>
            
            <div class="flex items-center justify-between mt-4">
              <div class="flex items-baseline gap-2.5">
                <span class="text-xl font-bold tracking-wide text-brand-dark">₹1,699</span>
                <span class="text-xs text-brand-gray line-through">MRP ₹3,193</span>
                <span class="text-[10px] tracking-wider font-semibold text-brand-dark bg-brand-lightGray px-2 py-0.5 rounded-sm">(47% OFF)</span>
              </div>
              
              <!-- Stars Rating -->
              <div class="flex items-center gap-1.5 text-xs text-brand-dark font-medium cursor-pointer" @click="triggerToast('778 customer reviews verified.')">
                <span class="text-[11px] text-brand-dark tracking-tighter">★★★★★</span>
                <span class="text-[10px] tracking-wider text-brand-gray font-semibold">4.3 (778 Ratings)</span>
              </div>
            </div>
            <p class="text-[9px] tracking-wider text-brand-gray uppercase mt-1">Inclusive of all taxes</p>
          </div>

          <!-- COLORS VARIANT LIST -->
          <div class="py-5 border-b border-brand-border/40">
            <div class="flex items-center justify-between mb-3">
              <span class="text-[10px] tracking-[0.2em] font-semibold uppercase text-brand-dark">
                SELECT VARIANT: BLACK/BLACK
              </span>
              <span class="text-[9px] tracking-wider text-brand-gray uppercase">5 Available</span>
            </div>
            
            <div class="flex items-center flex-wrap gap-3">
              <button class="relative w-8 h-8 rounded-full bg-brand-lightGray border-2 border-brand-dark p-0.5" aria-label="Black active">
                <div class="w-full h-full rounded-full bg-brand-dark"></div>
              </button>
              <button @click="triggerToast('Beige variant selected')" class="w-8 h-8 rounded-full bg-brand-lightGray border border-brand-border hover:border-brand-gray p-0.5" aria-label="Beige color">
                <div class="w-full h-full rounded-full bg-[#f4ebe1]"></div>
              </button>
              <button @click="triggerToast('Navy variant selected')" class="w-8 h-8 rounded-full bg-brand-lightGray border border-brand-border hover:border-brand-gray p-0.5" aria-label="Navy color">
                <div class="w-full h-full rounded-full bg-[#1b2b3a]"></div>
              </button>
              <button @click="triggerToast('Olive variant selected')" class="w-8 h-8 rounded-full bg-brand-lightGray border border-brand-border hover:border-brand-gray p-0.5" aria-label="Olive color">
                <div class="w-full h-full rounded-full bg-[#484a3c]"></div>
              </button>
              <button @click="triggerToast('Grey variant selected')" class="w-8 h-8 rounded-full bg-brand-lightGray border border-brand-border hover:border-brand-gray p-0.5" aria-label="Grey color">
                <div class="w-full h-full rounded-full bg-[#a3a3a3]"></div>
              </button>
            </div>
          </div>

          <!-- GENDER SELECTION -->
          <div class="py-5 border-b border-brand-border/40">
            <span class="text-[10px] tracking-[0.2em] font-semibold uppercase text-brand-dark block mb-3">GENDER</span>
            <div class="flex gap-3">
              <button 
                @click="triggerToast('Viewing Womens fit')" 
                class="flex-1 py-3 text-[10px] font-semibold tracking-[0.2em] uppercase rounded-full border transition-all text-center bg-brand-dark text-white border-brand-dark"
              >
                Womens
              </button>
              <button 
                @click="triggerToast('Viewing Mens fit')" 
                class="flex-1 py-3 text-[10px] font-semibold tracking-[0.2em] uppercase rounded-full border transition-all text-center bg-white text-brand-dark border-brand-border hover:border-brand-dark"
              >
                Mens
              </button>
            </div>
          </div>

          <!-- SIZE SELECTION GRID -->
          <div class="py-5 border-b border-brand-border/40">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-1.5 text-[10px] tracking-[0.2em] font-semibold text-brand-dark uppercase">
                <span>Select Size:</span>
                <span class="text-brand-gray font-light">UK</span>
                <span class="text-brand-border">|</span>
                <span class="text-brand-gray font-light">EU</span>
                <span class="text-brand-border">|</span>
                <span class="text-brand-gray font-light">US</span>
              </div>
              <button 
                @click="showSizeChart = true" 
                class="text-[10px] tracking-[0.2em] font-semibold text-brand-dark hover:text-brand-gray transition-colors uppercase underline"
              >
                Size Guide
              </button>
            </div>
            
            <div class="grid grid-cols-5 md:grid-cols-7 gap-2">
              <button
                v-for="size in sizeGrid"
                :key="size.val"
                @click="selectSize(size)"
                :disabled="size.outOfStock"
                class="aspect-square rounded-sm text-[11px] font-medium transition-all flex items-center justify-center relative border"
                :class="[
                  size.outOfStock
                    ? 'border-brand-border text-brand-border bg-white cursor-not-allowed line-through'
                    : selectedSize === size.val
                      ? 'border-2 border-brand-dark text-brand-dark bg-white font-bold'
                      : 'border-brand-border text-brand-dark hover:border-brand-gray bg-white'
                ]"
              >
                {{ size.val }}
                <span v-if="size.label" class="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse"></span>
              </button>
            </div>
          </div>

          <!-- PURCHASING CTA ACTIONS -->
          <div class="py-6 border-b border-brand-border/40 space-y-3.5">
            <!-- Add to Cart -->
            <button 
              @click="addToBag"
              :disabled="isAddingToBag"
              class="w-full h-14 bg-brand-dark hover:bg-brand-dark/90 transition text-white font-semibold text-[11px] tracking-[0.25em] uppercase rounded-full flex items-center justify-center gap-3 relative disabled:opacity-85"
            >
              <span v-if="isAddingToBag" class="flex items-center gap-2">
                <svg class="w-4 h-4 animate-spin text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing order...
              </span>
              <span v-else>Add to cart</span>
            </button>

            <!-- Buy with Shop Pay (Purple button) -->
            <button 
              @click="triggerToast('Redirecting to Shop Pay secure portal...')"
              class="w-full h-14 bg-brand-accent hover:bg-brand-accent/95 transition text-white font-semibold text-[11px] tracking-[0.25em] uppercase rounded-full flex items-center justify-center gap-1.5"
            >
              <span>Buy with</span>
              <span class="font-extrabold italic text-sm tracking-normal">shop</span>
            </button>

            <button 
              @click="triggerToast('Loading flexible installment checkout...')"
              class="w-full text-center text-[10px] tracking-[0.25em] font-medium uppercase text-brand-gray hover:text-brand-dark transition-colors pt-1 block underline"
            >
              More payment options
            </button>
          </div>

          <!-- LOCAL DELIVERY PINCODE CHECKER -->
          <div class="py-5 border-b border-brand-border/40">
            <span class="text-[10px] tracking-[0.2em] font-semibold uppercase text-brand-dark block mb-3.5">
              ESTIMATE SHIPPING & DELIVERY
            </span>
            <div class="flex gap-2">
              <input 
                type="text" 
                v-model="pincodeInput"
                maxlength="6"
                placeholder="Enter postal code" 
                class="flex-1 h-11 px-4 border border-brand-border rounded-sm text-xs font-semibold tracking-wider text-brand-dark placeholder-brand-gray/40 focus:outline-none focus:border-brand-dark"
              />
              <button 
                @click="checkPincode"
                :disabled="isCheckingPincode || !pincodeInput"
                class="h-11 px-5 bg-brand-dark hover:bg-brand-dark/95 border border-brand-dark text-white text-[10px] font-semibold uppercase tracking-wider rounded-sm transition-colors disabled:opacity-50"
              >
                <span v-if="isCheckingPincode">Checking</span>
                <span v-else>Check</span>
              </button>
            </div>
            
            <transition name="fade">
              <div v-if="pincodeChecked" class="mt-3 text-[10px] tracking-[0.1em] text-brand-gray flex flex-col gap-1">
                <div class="flex items-center gap-1.5">
                  <svg class="w-3.5 h-3.5 text-brand-dark flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>Get it by <strong class="text-brand-dark">{{ deliveryMessage }}</strong> - {{ pincode }} <span class="text-brand-light font-normal">({{ pincodeUser }})</span></span>
                </div>
                <div class="pl-5 mt-0.5">
                  <span>Seller: <strong class="text-brand-accent hover:underline cursor-pointer">Innovative Lifestyle Technology Private Limited</strong></span>
                </div>
              </div>
            </transition>

            <div class="mt-4 space-y-2.5 text-[11px] tracking-wide text-brand-gray font-light">
              <div class="flex items-center gap-2">
                <span class="text-brand-dark">✔</span>
                <span>Free express shipping on orders over ₹5,000</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-brand-dark">✔</span>
                <span>Pay on delivery / Cash on delivery accepted</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-brand-dark">✔</span>
                <span>Easy 14-day replacement & refund guarantee</span>
              </div>
            </div>
          </div>

          <!-- HIGHLIGHTS / SPECS -->
          <div class="py-6 border-b border-brand-border/40">
            <span class="text-[10px] tracking-[0.2em] font-semibold uppercase text-brand-dark block mb-3.5">
              PRODUCT HIGHLIGHTS
            </span>
            <ul class="space-y-2.5 text-[11px] tracking-wide text-brand-gray font-light">
              <li class="flex items-start gap-2">
                <span class="text-brand-dark font-semibold">✓</span>
                <span>Vegan certified premium materials (sustainably harvested and processed)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-brand-dark font-semibold">✓</span>
                <span>High-performance anatomical footbed for maximum daily cushioning</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-brand-dark font-semibold">✓</span>
                <span>Sourced and manufactured under strict zero-waste water circularity standards</span>
              </li>
            </ul>
          </div>

          <!-- ACCORDION DETAILS (DESCRIPTION & DETAILS) -->
          <div class="py-4 border-b border-brand-border/40 space-y-4">
            <details class="group" open>
              <summary class="flex justify-between items-center text-[10px] tracking-[0.2em] font-semibold uppercase text-brand-dark list-none cursor-pointer select-none">
                <span>Product Description</span>
                <span class="transition-transform group-open:rotate-45 text-sm font-light">+</span>
              </summary>
              <div class="pt-4 pb-2 text-[11px] leading-relaxed text-brand-gray font-light space-y-3">
                <p>
                  A minimalist marvel designed to blend structural integrity with casual performance. Engineered using recycled fibers, highly breathable mesh zones, and custom-tuned rubber traction outsoles.
                </p>
              </div>
            </details>

            <details class="group">
              <summary class="flex justify-between items-center text-[10px] tracking-[0.2em] font-semibold uppercase text-brand-dark list-none cursor-pointer select-none">
                <span>Materials & Tech Specs</span>
                <span class="transition-transform group-open:rotate-45 text-sm font-light">+</span>
              </summary>
              <div class="pt-4 pb-2 text-[11px] leading-relaxed text-brand-gray font-light space-y-2.5">
                <p><strong>Upper:</strong> Recycled PET textiles, vegan nubuck overlays</p>
                <p><strong>Lining:</strong> 100% Bamboo-derived bamboo jersey weave</p>
                <p><strong>Outsole:</strong> 80% natural tree-rubber, 20% recycled compound</p>
                <p><strong>Heel-to-Toe Drop:</strong> 6 mm</p>
              </div>
            </details>

            <details class="group">
              <summary class="flex justify-between items-center text-[10px] tracking-[0.2em] font-semibold uppercase text-brand-dark list-none cursor-pointer select-none">
                <span>Sustainability Impact</span>
                <span class="transition-transform group-open:rotate-45 text-sm font-light">+</span>
              </summary>
              <div class="pt-4 pb-2 text-[11px] leading-relaxed text-brand-gray font-light">
                <p>
                  Every purchase plants a tree and funds ocean cleanup projects. Made carbon-neutral in certified solar-powered facilities.
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </main>

    <!-- LIGHTBOX MODAL (FULLSCREEN) -->
    <transition name="fade">
      <div 
        v-if="lightboxOpen" 
        class="fixed inset-0 z-50 bg-white flex items-center justify-center p-6 md:p-12"
        @click.self="lightboxOpen = false"
      >
        <button 
          @click="lightboxOpen = false" 
          class="absolute top-6 right-6 p-2 bg-brand-lightGray hover:bg-brand-border rounded-full text-brand-dark transition-all"
          aria-label="Close Lightbox"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <div class="max-w-5xl max-h-[85vh] relative flex flex-col items-center justify-center">
          <img 
            :src="placeholders[lightboxIndex]" 
            alt="Product Detail Fullscreen" 
            class="max-w-full max-h-[75vh] object-contain select-none"
          />

          <!-- Lightbox Slide Nav -->
          <button 
            @click="prevLightbox" 
            class="absolute -left-12 top-1/2 -translate-y-1/2 p-3 bg-brand-lightGray/80 hover:bg-brand-lightGray rounded-full text-brand-dark transition-all hidden md:block"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
            </svg>
          </button>
          <button 
            @click="nextLightbox" 
            class="absolute -right-12 top-1/2 -translate-y-1/2 p-3 bg-brand-lightGray/80 hover:bg-brand-lightGray rounded-full text-brand-dark transition-all hidden md:block"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
            </svg>
          </button>

          <!-- Slide indicators -->
          <div class="mt-4 text-[10px] tracking-[0.2em] font-semibold text-brand-gray">
            {{ lightboxIndex + 1 }} / {{ placeholders.length }}
          </div>
        </div>
      </div>
    </transition>

    <!-- SIZE CHART MODAL -->
    <transition name="fade">
      <div 
        v-if="showSizeChart" 
        class="fixed inset-0 z-50 bg-brand-dark/40 backdrop-blur-sm flex items-center justify-center p-4"
        @click.self="showSizeChart = false"
      >
        <div class="bg-white rounded-sm shadow-xl max-w-md w-full overflow-hidden border border-brand-border flex flex-col">
          <div class="px-6 py-4 border-b border-brand-border flex justify-between items-center bg-brand-lightGray">
            <h3 class="font-semibold text-xs tracking-[0.15em] text-brand-dark uppercase">Size Conversion Chart</h3>
            <button @click="showSizeChart = false" class="text-brand-gray hover:text-brand-dark transition">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <div class="p-6">
            <table class="w-full text-left border-collapse text-[11px] tracking-wider uppercase font-light">
              <thead>
                <tr class="border-b border-brand-border font-semibold text-brand-dark">
                  <th class="py-2 px-3">UK</th>
                  <th class="py-2 px-3">US</th>
                  <th class="py-2 px-3">EU</th>
                  <th class="py-2 px-3">Foot Length</th>
                </tr>
              </thead>
              <tbody class="text-brand-gray">
                <tr class="border-b border-brand-border hover:bg-brand-lightGray/40">
                  <td class="py-2.5 px-3 font-semibold text-brand-dark">6</td>
                  <td class="py-2.5 px-3">7</td>
                  <td class="py-2.5 px-3">40</td>
                  <td class="py-2.5 px-3">25.0 cm</td>
                </tr>
                <tr class="border-b border-brand-border hover:bg-brand-lightGray/40">
                  <td class="py-2.5 px-3 font-semibold text-brand-dark">7</td>
                  <td class="py-2.5 px-3">8</td>
                  <td class="py-2.5 px-3">41</td>
                  <td class="py-2.5 px-3">25.8 cm</td>
                </tr>
                <tr class="border-b border-brand-border hover:bg-brand-lightGray/40">
                  <td class="py-2.5 px-3 font-semibold text-brand-dark">8</td>
                  <td class="py-2.5 px-3">9</td>
                  <td class="py-2.5 px-3">42</td>
                  <td class="py-2.5 px-3">26.6 cm</td>
                </tr>
                <tr class="border-b border-brand-border hover:bg-brand-lightGray/40">
                  <td class="py-2.5 px-3 font-semibold text-brand-dark">9</td>
                  <td class="py-2.5 px-3">10</td>
                  <td class="py-2.5 px-3">43</td>
                  <td class="py-2.5 px-3">27.5 cm</td>
                </tr>
                <tr class="border-b border-brand-border hover:bg-brand-lightGray/40">
                  <td class="py-2.5 px-3 font-semibold text-brand-dark">10</td>
                  <td class="py-2.5 px-3">11</td>
                  <td class="py-2.5 px-3">44.5</td>
                  <td class="py-2.5 px-3">28.3 cm</td>
                </tr>
                <tr class="border-b border-brand-border hover:bg-brand-lightGray/40">
                  <td class="py-2.5 px-3 font-semibold text-brand-dark">11</td>
                  <td class="py-2.5 px-3">12</td>
                  <td class="py-2.5 px-3">46</td>
                  <td class="py-2.5 px-3">29.2 cm</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div class="px-6 py-4 bg-brand-lightGray border-t border-brand-border flex justify-end">
            <button 
              @click="showSizeChart = false" 
              class="px-5 py-2.5 bg-brand-dark hover:bg-brand-dark/90 text-white font-semibold text-[9px] tracking-[0.2em] rounded-sm transition uppercase"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </transition>

    <!-- TOAST NOTIFICATION -->
    <transition name="fade">
      <div 
        v-if="toastVisible" 
        class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-brand-dark text-white px-5 py-3 rounded-full shadow-lg text-[10px] tracking-[0.15em] uppercase font-semibold flex items-center gap-2 border border-white/10"
      >
        <svg class="w-4 h-4 text-brand-accent fill-current flex-shrink-0 animate-bounce" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
        </svg>
        <span>{{ toastMessage }}</span>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Brand navigation list items
const menuItems = [
  { name: 'Men' },
  { name: 'Women' },
  { name: 'Apparel' },
  { name: 'Footwear' },
  { name: 'Last Call' }
]

// Available images (local shoe thumbnails)
const placeholders = [
  '/img/ProductImage1.jpeg',
  '/img/ProductImage2.jpeg',
  '/img/ProductImage3.jpeg',
  '/img/ProductImage4.jpeg',
  '/img/ProductImage5.jpeg'
]

// State variables
const viewMode = ref('static') // 'static' (Photos) or '3d' (3D Model)
const iframeLoading = ref(true)
const activeImageIndex = ref(0)
const showPromoBanner = ref(true)
const isWishlisted = ref(false)
const bagCount = ref(0)

// Size Grid definition (UK standard sizes matching ref)
const sizeGrid = [
  { val: '6', outOfStock: false },
  { val: '7', outOfStock: false },
  { val: '8', outOfStock: false },
  { val: '9', outOfStock: false },
  { val: '10', outOfStock: false, label: true },
  { val: '11', outOfStock: false }
]
const selectedSize = ref('8')

// Modal / lightbox / size chart state
const lightboxOpen = ref(false)
const lightboxIndex = ref(0)
const showSizeChart = ref(false)

// Postal code delivery check state
const pincode = ref('401105')
const pincodeInput = ref('401105')
const pincodeChecked = ref(true)
const pincodeUser = ref('Ravi Maurya')
const isCheckingPincode = ref(false)
const deliveryMessage = ref('Fri, Jun 05')

// Toast Notification
const toastVisible = ref(false)
const toastMessage = ref('')

// Image slide controls (mobile slider and primary image)
const previousImage = () => {
  activeImageIndex.value =
    activeImageIndex.value > 0 ? activeImageIndex.value - 1 : placeholders.length - 1
}

const nextImage = () => {
  activeImageIndex.value =
    activeImageIndex.value < placeholders.length - 1 ? activeImageIndex.value + 1 : 0
}

// Handler for selecting thumbnail from the grid
const selectThumbnail = (index) => {
  activeImageIndex.value = index
  viewMode.value = 'static' // switch primary viewer to photos when clicking a thumbnail
}

// Lightbox modal controls
const openLightbox = (index) => {
  lightboxIndex.value = index
  lightboxOpen.value = true
}

const prevLightbox = () => {
  lightboxIndex.value =
    lightboxIndex.value > 0 ? lightboxIndex.value - 1 : placeholders.length - 1
}

const nextLightbox = () => {
  lightboxIndex.value =
    lightboxIndex.value < placeholders.length - 1 ? lightboxIndex.value + 1 : 0
}

// Size selection handler
const selectSize = (size) => {
  if (size.outOfStock) return
  selectedSize.value = size.val
  triggerToast(`Size UK ${size.val} selected!`)
}

// Toast helper
const triggerToast = (msg) => {
  toastMessage.value = msg
  toastVisible.value = true
  setTimeout(() => {
    toastVisible.value = false
  }, 3000)
}

// Add to cart animation and trigger
const isAddingToBag = ref(false)
const addToBag = () => {
  if (isAddingToBag.value) return
  isAddingToBag.value = true
  
  setTimeout(() => {
    isAddingToBag.value = false
    bagCount.value += 1
    triggerToast('Added successfully to your Shopping Bag!')
  }, 1000)
}

// Pincode validation helper
const checkPincode = () => {
  if (!pincodeInput.value) return
  isCheckingPincode.value = true
  pincodeChecked.value = false
  
  // Simulated lookup
  setTimeout(() => {
    isCheckingPincode.value = false
    pincodeChecked.value = true
    pincode.value = pincodeInput.value
    
    // Simulate pincode rules
    if (pincodeInput.value === '401105') {
      pincodeUser.value = 'Ravi Maurya'
      deliveryMessage.value = 'Fri, Jun 05'
    } else {
      pincodeUser.value = 'Available'
      // random date calculation
      const days = Math.floor(Math.random() * 5) + 2
      const date = new Date()
      date.setDate(date.getDate() + days)
      const options = { weekday: 'short', month: 'short', day: 'numeric' }
      deliveryMessage.value = date.toLocaleDateString('en-US', options)
    }
    triggerToast(`Delivery options loaded for ${pincode.value}!`)
  }, 800)
}
</script>

<style scoped>
/* Page transition styles */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease-out;
}
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
