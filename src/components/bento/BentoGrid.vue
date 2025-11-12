<script setup>
import { ref, shallowRef, onMounted, onUnmounted } from 'vue';

import HeroItem from './items/HeroItem.vue';
import TeamItem from './items/TeamItem.vue';
import GameplayLoopItem from './items/GameplayLoopItem.vue';
import PrototypeItem from './items/PrototypeItem.vue';
import TechnicalSpecsItem from './items/TechnicalSpecsItem.vue';
import GameplayExplanationItem from './items/GameplayExplanationItem.vue';

import HeroModal from './modals/HeroModal.vue';
import TeamModal from './modals/TeamModal.vue';
import GameplayLoopModal from './modals/GameplayLoopModal.vue';
import TechnicalSpecsModal from './modals/TechnicalSpecsModal.vue';
import GameplayExplanationModal from './modals/GameplayExplanationModal.vue';

const bentoItems = shallowRef([
  {
    id: 1,
    itemComponent: HeroItem,
    modalComponent: HeroModal,
    className: "md:col-span-2 md:row-span-2",
    isHero: true,
  },
  {
    id: 2,
    itemComponent: TeamItem,
    modalComponent: TeamModal,
    className: "",
  },
  {
    id: 3,
    itemComponent: GameplayLoopItem,
    modalComponent: GameplayLoopModal,
    className: "",
  },
  {
    id: 4,
    itemComponent: TechnicalSpecsItem,
    modalComponent: TechnicalSpecsModal,
    className: "md:col-span-1",
  },
  {
    id: 5,
    itemComponent: GameplayExplanationItem,
    modalComponent: GameplayExplanationModal,
    className: "md:col-span-2",
  },
]);

const activeModalComponent = ref(null);

const openModal = (item) => {
  activeModalComponent.value = item.modalComponent;
};

const closeModal = () => {
  activeModalComponent.value = null;
};

const backdropClose = (event) => {
  if (event.target === event.currentTarget) {
    closeModal();
  }
};

const handleKeydown = (event) => {
  if (event.key === 'Escape' && activeModalComponent.value) {
    closeModal();
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown);
});
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 flex-grow w-full h-[100%]">
    <div v-for="(item, index) in bentoItems" :key="item.id" :class="[
      'rounded-lg flex flex-col justify-between card-interactive border border-phantom-accent/20 hover:border-phantom-accent/50',
      item.isHero ? 'bg-phantom-darker p-0' : 'bg-phantom-darker/80 backdrop-blur-sm p-6',
      item.className,
      index === 0 ? 'order-first' : ''
    ]" @click="item.modalComponent && openModal(item)">
      <component :is="item.itemComponent" />
    </div>
  </div>

  <div v-if="activeModalComponent"
    class="fixed inset-0 bg-black/70 backdrop-blur-[1px] flex items-center justify-center z-50 p-4"
    @click="backdropClose">
    <div
      class="bg-phantom-darker/80 backdrop-blur-[1px] border border-phantom-accent/30 rounded-xl p-10 max-w-7xl w-full relative animate-fadeInUp">
      <button @click="closeModal" class="absolute top-4 right-4 text-white/50 hover:text-white transition-colors">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      <component :is="activeModalComponent" />
    </div>
  </div>
</template>
