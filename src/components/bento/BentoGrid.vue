<script setup>
import { ref, shallowRef } from 'vue';

import MainFeatureItem from './items/HeroItem.vue';
import StatisticItem from './items/StatisticItem.vue';
import QuickActionItem from './items/QuickActionItem.vue';
import MetricItem from './items/MetricItem.vue';
import SecondaryContentItem from './items/SecondaryContentItem.vue';

import MainFeatureModal from './modals/HeroModal.vue';
import StatisticModal from './modals/StatisticModal.vue';
import QuickActionModal from './modals/QuickActionModal.vue';
import MetricModal from './modals/MetricModal.vue';
import SecondaryContentModal from './modals/SecondaryContentModal.vue';

const bentoItems = shallowRef([
  {
    id: 1,
    itemComponent: MainFeatureItem,
    modalComponent: MainFeatureModal,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    itemComponent: StatisticItem,
    modalComponent: StatisticModal,
    className: "",
  },
  {
    id: 3,
    itemComponent: QuickActionItem,
    modalComponent: QuickActionModal,
    className: "",
  },
  {
    id: 4,
    itemComponent: MetricItem,
    modalComponent: MetricModal,
    className: "md:col-span-1",
  },
  {
    id: 5,
    itemComponent: SecondaryContentItem,
    modalComponent: SecondaryContentModal,
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
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 flex-grow w-full">
    <div
      v-for="(item, index) in bentoItems"
      :key="item.id"
      :class="[`bg-phantom-darker/80 backdrop-blur-sm rounded-lg p-6 flex flex-col justify-between card-interactive border border-phantom-accent/20 hover:border-phantom-accent/50`, item.className, index === 0 ? 'order-first' : '']"
      @click="openModal(item)"
    >
      <component :is="item.itemComponent" />
    </div>
  </div>

  <div
    v-if="activeModalComponent"
    class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    @click="backdropClose"
  >
    <div class="bg-phantom-darker/80 backdrop-blur-sm border border-phantom-accent/30 rounded-xl p-8 max-w-2xl w-full relative animate-fadeInUp">
      <button
        @click="closeModal"
        class="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
      <component :is="activeModalComponent" />
    </div>
  </div>
</template>