<template>
  <div class="title">
    <h1>Vuoi creare l'arte della pizza?!</h1>
    <img class="logo" alt="logo" src="@/assets/logo.png" />
    <h2>Quante pizze da ~280gr vuoi fare? <input class="quantity" type="number" min="1" max="100" v-model="quantity">
    </h2>
  </div>
  <Transition>
    <div class="ingredients-container" v-if="quantity">
      <h3>Ecco gli ingredienti per fare {{ quantity + (quantity == 1 ? ' pizza squisita' : ' pizze squisite') }}!</h3>
      <div class="ingredients">
        <div>
          <img class="pizza" alt="pizza" src="@/assets/pizza.png" />
        </div>
        <div class="list">
          <div>Farina 0 (Caputo Nuvola): {{ Math.round(quantity * flour) }} gr</div>
          <div>Lievito: {{ Math.round(quantity * yeast) }} gr</div>
          <div>Acqua (fredda di frigo): {{ Math.round(quantity * water) }} ml</div>
          <div>Sale: {{ Math.round(quantity * salt) }} gr</div>
        </div>
      </div>
      <div class="recipe-suggestion" v-if="recipeSuggestion">
        <h3>Vuoi che ti ricordi anche la ricetta?</h3>
        <button @click="recipeSuggestion = false; recipe = true">Sì</button>
        <button @click="recipeSuggestion = false; recipe = false">No</button>
      </div>
      <Transition>
        <div class="recipe" v-if="recipe">
          <strong>Procedimento (almeno ~24 ore prima di mangiarla)</strong>:<br>
          <ul>
            <li>Inserire nell'impastatrice il gancio di tipo foglia, amalgamerà meglio l'impasto.</li>
            <li>Mettere nel boccale farina e lievito e iniziare a impastare lentamente (velocità 1) per farli mischiare.</li>
            <li>Preparare tutti gli altri ingredienti.</li>
            <li>Mentre sta impastando, aggiungere lentamente il ~60% dell'acqua per creare un impasto compatto aumentando man mano la velocità dell'impastatrice (velocità 2-3).</li>
            <li>Quando la vasca risulta pulita e l'impasto si attorciglia alla foglia, si aggiunge la restante acqua poco alla volta, il sale e l'ultima goccia d'acqua per favorirne l'assorbimento.</li>
            <li>Dopo che si è amalgamato bene tutto l'impasto, fermare tutto e mettere il boccale coperto in frigo per ~10 minuti, questo aiuterà la maglia glutinica e a non superare i ~23° durante la lavorazione.</li>
            <li>Si riprende a impastare a velocità sostenuta (velocità 4) per dare forza e incordare l'impasto finché non si stacca dalle pareti e rimane attaccato alla foglia.</li>
            <li>Stendere l'impasto sul banco e attendere ~10 minuti per farlo riposare.</li>
            <li>Chiudere il panetto con le classiche pieghe a portafoglio e mettere l'impasto in un contenitore con coperchio per lasciarlo lievitare a temperatura ambiente per ~1 ora.</li>
            <li>Fare la piega di rinforzo chiudendo nuovamente il panetto con le classiche pieghe a portafoglio.</li>
            <li>Aggiungere un filo d'olio nel fondo del contenitore e mettere l'impasto con il coperchio in frigo per almeno ~24 ore.</li>
            <li>~3-4 ore prima di infornare, togliere l'impasto dal frigo e fare lo staglio dividendo in panetti da ~260 grammi.</li>
            <li>Far lievitare i panetti a temperatura ambiente.</li>
            <li>Stendere e condire a piacimento!</li>
          </ul>
        </div>
      </Transition>
      <Transition>
        <h2 v-if="!recipeSuggestion">Noi non andiamo più in pizzeria, buon appetito! 😋</h2>
      </Transition>
    </div>
  </Transition>
</template>

<script lang="ts" src="./HomeView.ts" />
