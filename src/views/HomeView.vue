<script setup lang="ts">
  import { ref, computed } from 'vue';

  const quantity = ref<number>(0);
  const doughWeight = ref(280);
  const hydration = ref(70);
  const saltPercentage = ref(2.5);
  const yeastPercentage = ref(0.3);

  const totalPercentage = computed(() => 100 + hydration.value + saltPercentage.value + yeastPercentage.value);

  const flour = computed(() => (doughWeight.value / totalPercentage.value) * 100);
  const water = computed(() => (doughWeight.value / totalPercentage.value) * hydration.value);
  const salt = computed(() => (doughWeight.value / totalPercentage.value) * saltPercentage.value);
  const yeast = computed(() => (doughWeight.value / totalPercentage.value) * yeastPercentage.value);
</script>

<template>
  <main>
    <video class="background-video" autoplay loop muted playsinline poster="@/assets/logo.jpg">
      <source src="@/assets/logo-bg.mp4" type="video/mp4" />
      <img class="background-logo" src="@/assets/logo.jpg" alt="Background" />
    </video>
    <div class="title">
      <h1>La Formula Magica Per La Pizza Perfetta ✨</h1>
      <div class="dough-settings">
        <label>
          Peso panetto: <strong>{{ doughWeight }} gr</strong><br>
          <input type="range" min="150" max="350" step="5" v-model.number="doughWeight">
        </label>
        <label>
          Pizze: <strong>{{ quantity }}</strong><br>
          <input type="range" min="0" max="15" step="1" v-model.number="quantity">
        </label>
        <label>
          Idratazione: <strong>{{ hydration }}%</strong><br>
          <input type="range" min="60" max="80" step="1" v-model.number="hydration">
        </label>
      </div>
    </div>
    <Transition name="slide-fade">
      <div class="container" v-if="quantity > 0">  
        <div class="content-grid">
          <div class="ingredients">
            <div class="list">
              <img class="responsive-img" alt="ingredients" src="@/assets/ingredients.jpg" />
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
              <img class="responsive-img" alt="recipe" src="@/assets/recipe.jpg" />
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
                <li><strong>~3-4 ore prima di infornare</strong>, togliere l'impasto dal frigo e fare lo <strong>staglio</strong> dividendo in panetti da <strong>~280 grammi</strong>.</li>
                <li>Far <strong>lievitare</strong> i panetti a temperatura ambiente in un contenitore da pizza chiuso.</li>
                <li><strong>Stendere</strong> e <strong>condire</strong> a piacimento!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Transition>
    <div class="footer" v-if="quantity > 0">
      <h2>Impastato Con Amore (e Tanta Pazienza Per La Lievitazione) ❤️</h2>
    </div>
  </main>
</template>
