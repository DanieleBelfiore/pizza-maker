<template>
  <div class="title">
    <h1>Vuoi creare l'arte della pizza?!</h1>
    <img class="logo" alt="logo" src="@/assets/logo.png" />
    <div style="margin-bottom: 20px;">
      <label style="margin-right: 15px;">
        Peso panetto (gr): 
        <input type="number" min="150" max="500" v-model="doughWeight" style="width: 60px;">
      </label>
      <label>
        Idratazione (%): 
        <input type="number" min="50" max="100" v-model="hydration" style="width: 60px;">
      </label>
    </div>
    <h2>Quante pizze vuoi fare? 
      <div class="quantity-controls">
        <button class="btn-qty" @click="decrement">-</button>
        <input class="quantity" type="number" min="1" max="100" v-model="quantity" readonly>
        <button class="btn-qty" @click="increment">+</button>
      </div>
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
      <div class="recipe">
        <strong>Procedimento (almeno ~24 ore prima di mangiarla)</strong>:<br>
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
        <h2>Buon appetito! 😋</h2>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts" src="./HomeView.ts" />
