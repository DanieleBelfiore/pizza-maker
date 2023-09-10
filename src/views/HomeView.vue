<template>
  <div class="title">
    <h1>Vuoi creare l'arte della pizza?!</h1>
    <img class="logo" alt="logo" src="@/assets/logo.png" />
    <h2>Quante pizze da ~280gr vuoi fare? <input class="quantity" type="number" min="1" max="100" v-model="quantity"></h2>
  </div>
  <Transition>
    <div class="ingredients-container" v-if="quantity">
      <h3>Ecco gli ingredienti per fare {{ quantity + (quantity == 1 ? ' pizza squisita' : ' pizze squisite') }}!</h3>
      <div class="ingredients">
        <div>
          <img class="pizza" alt="pizza" src="@/assets/pizza.png" />
        </div>
        <div class="list">
          <div>Farina 0: {{ Math.round(quantity * flour) }} gr</div>
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
          <strong>Procedimento</strong>:<br>
          <ul>
            <li>Mettere nel boccale dell'impastatrice l'acqua, lo zucchero e il lievito (37° a velocità 1 per 2min) oppure senza impastatrice mettere in un
              recipiente
              metà acqua tiepida con zucchero e lievito e attendere 2min. La restante acqua va aggiunta mentre si impasta.</li>
            <li>Mescolare bene le farine e, se possibile, setacciare.</li>
            <li>Aggiungere la farina, poi il sale e impastare per almeno 5-6min in modalità impasto oppure impastare a mano ponendo la farina a fontana,
              aggiungere
              l'acqua con il lievito, poi il sale e la restante acqua. Impastare per almeno 10min.</li>
            <li>Lasciare riposare mezz'ora nel boccale, poi piegare il panetto con le classiche pieghe. Rifare il procedimento 1 volta dopo ~2h.</li>
            <li>Lasciare a lievitare in frigo per almeno ~12h; ad esempio si può fare la sera verso le 18 per il pranzo del giorno dopo o verso le 21 per la
              cena
              del
              giorno dopo.</li>
            <li>Togliere l'impasto dal frigo, dopo mezz'ora dividere in panetti da ~280gr e far lievitare per 4-5h, poi stendere e condire a piacimento.</li>
            <li>Riscaldare il forno in modalità ventilato al max ~30min prima di infornare l'impasto. Inserire da subito anche la pietra refrattaria nel forno.
              Se
              non
              ce l'hai cerca di comprarla perché fa davvero la differenza, in alternativa tieni la teglia nel forno così sarà calda nel momento in cui
              inforni.</li>
            <li>Infornare l'impasto.</li>
          </ul>
          <strong>Suggerimento</strong>:<br>
          <ul>
            <li>Consiglio la farina 0 Caputo Nuvola.</li>
            <li>Per una migliore pizza (con lievitazione di ~28h) impastare la mattina verso le 8, dopo 2h fare le pieghe, dopo altre 2h idem, come nel
              procedimento
              spiegato sopra.</li>
            <li>Mettere l'impasto in frigorifero verso le 13 e lasciarlo lì fino alla mattina dopo.</li>
            <li>Togliere l'impasto dal frigo e dopo 30min/1h dividere i panetti e far lievitare per almeno 4h.</li>
            <li>Stendere e infornare.</li>
          </ul>
          <u>Nota: per doppia dose fare 2 panetti divisi</u><br>
        </div>
      </Transition>
      <Transition>
        <h2 v-if="!recipeSuggestion">Noi non andiamo più in pizzeria, buon Appetito! 😋</h2>
      </Transition>
    </div>
  </Transition>
</template>

<script lang="ts" src="./HomeView.ts" />