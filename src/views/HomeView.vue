<script setup lang="ts">
  import { ref, computed } from 'vue';

  const SALT_PERCENTAGE = 2.5;
  const YEAST_PERCENTAGE = 0.3;
  const DOUGH_WEIGHT_MIN = 150;
  const DOUGH_WEIGHT_MAX = 350;
  const DOUGH_WEIGHT_STEP = 5;
  const QUANTITY_MIN = 0;
  const QUANTITY_MAX = 15;
  const QUANTITY_STEP = 1;
  const HYDRATION_MIN = 60;
  const HYDRATION_MAX = 80;
  const HYDRATION_STEP = 1;

  function useBoundedValue(initial: number, min: number, max: number) {
    const value = ref(initial);
    const update = (amount: number) => {
      const next = value.value + amount;
      if (next >= min && next <= max) value.value = next;
    };
    return { value, update };
  }

  const { value: doughWeight, update: updateDoughWeight } = useBoundedValue(280, DOUGH_WEIGHT_MIN, DOUGH_WEIGHT_MAX);
  const { value: quantity,    update: updateQuantity }    = useBoundedValue(0,   QUANTITY_MIN,     QUANTITY_MAX);
  const { value: hydration,   update: updateHydration }   = useBoundedValue(65,  HYDRATION_MIN,    HYDRATION_MAX);

  const totalPercentage = computed(() => 100 + hydration.value + SALT_PERCENTAGE + YEAST_PERCENTAGE);
  const flourPerPiece   = computed(() => (doughWeight.value / totalPercentage.value) * 100);
  const waterPerPiece   = computed(() => (doughWeight.value / totalPercentage.value) * hydration.value);
  const saltPerPiece    = computed(() => (doughWeight.value / totalPercentage.value) * SALT_PERCENTAGE);
  const yeastPerPiece   = computed(() => (doughWeight.value / totalPercentage.value) * YEAST_PERCENTAGE);

  const flourTotal = computed(() => Math.round(quantity.value * flourPerPiece.value / 5) * 5);
  const waterTotal = computed(() => Math.round(quantity.value * waterPerPiece.value  / 5) * 5);
  const saltTotal  = computed(() => Math.round(quantity.value * saltPerPiece.value));
  const yeastTotal = computed(() => Math.round(quantity.value * yeastPerPiece.value * 10) / 10);
</script>

<template>
  <main>
    <video class="background-video" autoplay loop muted playsinline poster="@/assets/logo.jpg" aria-hidden="true">
      <source src="@/assets/logo-bg.mp4" type="video/mp4" />
      <img class="background-logo" src="@/assets/logo.jpg" alt="" />
    </video>
    <div class="title">
      <h1>La Formula Magica Per La Pizza Perfetta ✨</h1>
      <div class="dough-settings">
        <label>
          Peso panetto: <strong>{{ doughWeight }} gr</strong><br>
          <span class="slider-container">
            <button @click="updateDoughWeight(-DOUGH_WEIGHT_STEP)" aria-label="Diminuisci peso panetto">-</button>
            <input type="range" :min="DOUGH_WEIGHT_MIN" :max="DOUGH_WEIGHT_MAX" :step="DOUGH_WEIGHT_STEP" v-model.number="doughWeight">
            <button @click="updateDoughWeight(DOUGH_WEIGHT_STEP)" aria-label="Aumenta peso panetto">+</button>
          </span>
        </label>
        <label>
          Pizze: <strong>{{ quantity }}</strong><br>
          <span class="slider-container">
            <button @click="updateQuantity(-QUANTITY_STEP)" aria-label="Diminuisci numero pizze">-</button>
            <input type="range" :min="QUANTITY_MIN" :max="QUANTITY_MAX" :step="QUANTITY_STEP" v-model.number="quantity">
            <button @click="updateQuantity(QUANTITY_STEP)" aria-label="Aumenta numero pizze">+</button>
          </span>
        </label>
        <label>
          Idratazione: <strong>{{ hydration }}%</strong><br>
          <span class="slider-container">
            <button @click="updateHydration(-HYDRATION_STEP)" aria-label="Diminuisci idratazione">-</button>
            <input type="range" :min="HYDRATION_MIN" :max="HYDRATION_MAX" :step="HYDRATION_STEP" v-model.number="hydration">
            <button @click="updateHydration(HYDRATION_STEP)" aria-label="Aumenta idratazione">+</button>
          </span>
        </label>
      </div>
    </div>
    <p v-if="quantity === QUANTITY_MIN" class="empty-state">Usa lo slider delle 🍕 per calcolare gli ingredienti!</p>
    <Transition name="slide-fade">
      <div class="container" v-if="quantity > QUANTITY_MIN">  
        <div class="content-grid">
          <div class="ingredients">
            <div class="list">
              <img class="responsive-img" alt="Ingredienti per l'impasto della pizza" src="@/assets/ingredients.jpg" />
              <h3>Ingredienti:</h3>
              <ul>
                <li>Farina 0 (Caputo Nuvola): {{ flourTotal }} gr</li>
                <li>Lievito: {{ yeastTotal }} gr</li>
                <li>Acqua (Fredda): {{ waterTotal }} ml</li>
                <li>Sale: {{ saltTotal }} gr</li>
              </ul>
            </div>
          </div>
          <div class="recipe">
            <div class="list">
              <img class="responsive-img" alt="Impasto della pizza in lavorazione" src="@/assets/recipe.jpg" />
              <h3>Procedimento (~24 ore prima):</h3>
              <ul>
                <li>Inserire nell'impastatrice il <strong>gancio di tipo foglia</strong> che aiuterà ad amalgamare meglio l'impasto.</li>
                <li>Mettere nel boccale <strong>farina</strong> e <strong>lievito</strong> e iniziare a impastare lentamente (<strong>velocità 1</strong>) per farli mischiare.</li>
                <li>Mentre sta impastando, aggiungere il <strong>~90% dell'acqua</strong> per creare un impasto compatto aumentando man mano la velocità dell'impastatrice (<strong>velocità 2-3</strong>).</li>
                <li>Quando la vasca risulta pulita e l'impasto si <strong>attorciglia alla foglia</strong>, si aggiunge la <strong>restante acqua</strong> poco alla volta e il <strong>sale</strong>.</li>
                <li>Si aumenta la velocità (<strong>velocità 4</strong>) per dare forza e <strong>incordare l'impasto</strong> finché non si stacca dalle pareti e rimane attaccato alla foglia.</li>
                <li>Se la temperatura dell'impasto dovesse superare i <strong>~23°</strong>, fermare tutto e mettere il boccale coperto in <strong>frigo</strong> per <strong>~10 minuti</strong>.</li>
                <li>Dopo che si è amalgamato bene tutto l'impasto, stendere l'impasto sul banco e attendere <strong>~5 minuti</strong> per farlo <strong>riposare</strong>.</li>
                <li>Chiudere il panetto con le classiche <strong>pieghe a portafoglio</strong> e mettere l'impasto in un contenitore aggiungendo un filo d'<strong>olio</strong> nel fondo e lasciarlo <strong>lievitare</strong> con coperchio a temperatura ambiente per <strong>~1 ora</strong>.</li>
                <li>Fare la <strong>piega di rinforzo</strong> chiudendo nuovamente il panetto con le classiche <strong>pieghe a portafoglio</strong>.</li>
                <li>Aggiungere se necessario nuovamente un filo d'<strong>olio</strong> nel fondo del contenitore e mettere l'impasto con il coperchio in <strong>frigo</strong> per almeno <strong>~24 ore</strong>.</li>
                <li><strong>~3-4 ore prima di infornare</strong>, togliere l'impasto dal frigo e fare lo <strong>staglio</strong> dividendo in panetti da <strong>~{{ doughWeight }} grammi</strong>.</li>
                <li>Far <strong>lievitare</strong> i panetti a temperatura ambiente in un contenitore da pizza chiuso.</li>
                <li><strong>Stendere</strong> e <strong>condire</strong> a piacimento!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Transition>
    <div class="footer" v-if="quantity > QUANTITY_MIN">
      <h2>Impastato Con Amore (e Tanta Pazienza Per La Lievitazione) ❤️</h2>
    </div>
  </main>
</template>
