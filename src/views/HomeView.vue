<script setup lang="ts">
  import { ref, computed } from 'vue';

  const quantity = ref<number | null>(null);
  const doughWeight = ref(280);
  const hydration = ref(70);
  const saltPercentage = ref(2.5);
  const yeastPercentage = ref(0.3);

  const totalPercentage = computed(() => 100 + hydration.value + saltPercentage.value + yeastPercentage.value);

  const flour = computed(() => (doughWeight.value / totalPercentage.value) * 100);
  const water = computed(() => (doughWeight.value / totalPercentage.value) * hydration.value);
  const salt = computed(() => (doughWeight.value / totalPercentage.value) * saltPercentage.value);
  const yeast = computed(() => (doughWeight.value / totalPercentage.value) * yeastPercentage.value);

  const increment = () => {
    quantity.value = (quantity.value || 0) + 1;
    if (quantity.value > 100) quantity.value = 100;
  };

  const decrement = () => {
    if (quantity.value && quantity.value > 0) {
      quantity.value--;
    } else {
      quantity.value = 0;
    }
  };
</script>

<template>
  <video class="background-video" autoplay loop muted playsinline poster="@/assets/logo.png">
    <source src="@/assets/logo-bg.mp4" type="video/mp4" />
    <img class="background-video" src="@/assets/logo.png" alt="Background" />
  </video>
  <div class="title">
    <h1>La Formula Magica Per L'impasto Perfetto ✨</h1>
    <div class="dough-settings">
      <label>
        Peso panetto (gr): 
        <input type="number" min="150" max="500" v-model="doughWeight">
      </label>
      <label>
        Idratazione (%): 
        <input type="number" min="50" max="100" v-model="hydration">
      </label>
    </div>
    <h2>Quante Pizze Vuoi Fare? 
      <div class="quantity-controls">
        <button class="btn-qty" @click="decrement">-</button>
        <input class="quantity" type="number" min="0" max="100" v-model="quantity" readonly>
        <button class="btn-qty" @click="increment">+</button>
      </div>
    </h2>
  </div>
  <Transition name="slide-fade">
    <div class="container" v-if="quantity">  
      <div class="content-grid">
        <div class="ingredients">
          <div class="list">
            <img class="responsive-img" alt="ingredients" src="@/assets/ingredients.png" />
            <h3>Ingredienti:</h3>
            <ul>
              <li>Farina 0 (Caputo Nuvola): {{ Math.round(quantity * flour / 5) * 5 }} gr</li>
              <li>Lievito: {{ Math.round(quantity * yeast * 10) / 10 }} gr</li>
              <li>Acqua (Fredda): {{ Math.round(quantity * water / 5) * 5 }} ml</li>
              <li>Sale: {{ Math.round(quantity * salt) }} gr</li>
            </ul>
          </div>
        </div>
        <div class="recipe">
          <div class="list">
            <img class="responsive-img" alt="recipe" src="@/assets/recipe.png" />
            <h3>Procedimento (~24 ore prima):</h3>
            <ul>
              <li>Inserire nell'impastatrice il <strong>gancio di tipo foglia</strong>, amalgamerà meglio l'impasto.</li>
              <li>Mettere nel boccale <strong>farina</strong> e <strong>lievito</strong> e iniziare a impastare lentamente (<strong>velocità 1</strong>) per farli mischiare.</li>
              <li>Mentre sta impastando, aggiungere lentamente il <strong>~60% dell'acqua</strong> per creare un impasto compatto aumentando man mano la velocità dell'impastatrice (<strong>velocità 2-3</strong>).</li>
              <li>Quando la vasca risulta pulita e l'impasto si <strong>attorciglia alla foglia</strong>, si aggiunge la <strong>restante acqua</strong> poco alla volta, il <strong>sale</strong> e l'ultima goccia d'acqua per favorirne l'assorbimento.</li>
              <li>Dopo che si è amalgamato bene tutto l'impasto, fermare tutto e mettere il boccale coperto in <strong>frigo</strong> per <strong>~10 minuti</strong>, questo aiuterà la <strong>maglia glutinica</strong> e a non superare i <strong>~23°</strong> durante la lavorazione.</li>
              <li>Si riprende a impastare a velocità sostenuta (<strong>velocità 4</strong>) per dare forza e <strong>incordare l'impasto</strong> finché non si stacca dalle pareti e rimane attaccato alla foglia.</li>
              <li>Stendere l'impasto sul banco e attendere <strong>~5 minuti</strong> per farlo <strong>riposare</strong>.</li>
              <li>Chiudere il panetto con le classiche <strong>pieghe a portafoglio</strong> e mettere l'impasto in un contenitore aggiungendo un filo d'<strong>olio</strong> nel fondo e lasciarlo <strong>lievitare</strong> con coperchio a temperatura ambiente per <strong>~1 ora</strong>.</li>
              <li>Fare la <strong>piega di rinforzo</strong> chiudendo nuovamente il panetto con le classiche <strong>pieghe a portafoglio</strong>.</li>
              <li>Aggiungere se necessario nuovamente un filo d'<strong>olio</strong> nel fondo del contenitore e mettere l'impasto con il coperchio in <strong>frigo</strong> per almeno <strong>~24 ore</strong>.</li>
              <li><strong>~3-4 ore prima di infornare</strong>, togliere l'impasto dal frigo e fare lo <strong>staglio</strong> dividendo in panetti da <strong>~280 grammi</strong>.</li>
              <li>Far <strong>lievitare</strong> i panetti a temperatura ambiente in un contenitore da pizza chiuso.</li>
              <li><strong>Stendere</strong> e <strong>condire</strong> a piacimento!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Transition>
  <div class="footer" v-if="quantity">
    <h2>Impastato Con Amore (e Tanta Pazienza Per La Lievitazione) ❤️</h2>
  </div>
</template>