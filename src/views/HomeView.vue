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
          <div>Acqua: {{ Math.round(quantity * water) }} ml</div>
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
          <strong>Procedimento (almeno ~24h prima di mangiarla)</strong>:<br>
          <ul>
            <li>Mettere nel boccale dell'impastatrice la farina e il lievito.</li>
            <li>Preparare l'acqua in una caraffa.</li>
            <li>Attivare la modalità impastatrice a 0° a velocità 4 per 4min.</li>
            <li>Mentre sta impastando, aggiungere a filo l'acqua e, a meno di metà acqua, il sale e l'acqua restante.
            </li>
            <li>Lasciare riposare nel boccale chiuso in frigo per ~30min.</li>
            <li>Piegare il panetto con le classiche pieghe a portafoglio.</li>
            <li>Mettere l'impasto in un contenitore con coperchio e lasciar lievitare a temperatura ambiente per ~1h.
            </li>
            <li>Ripiegare nuovamente il panetto con le classiche pieghe a portafoglio.
            </li>
            <li>Aggiungere un filo d'olio nel contenitore e mettere l'impasto in frigo per almeno ~24h.</li>
            <li>~4h prima di infornare, togliere l'impasto dal frigo e fare lo staglio dividendo in panetti da ~270gr.
            </li>
            <li>Stendere e condire a piacimento.</li>
          </ul>
        </div>
      </Transition>
      <Transition>
        <h2 v-if="!recipeSuggestion">Noi non andiamo più in pizzeria, buon Appetito! 😋</h2>
      </Transition>
    </div>
  </Transition>
</template>

<script lang="ts" src="./HomeView.ts" />