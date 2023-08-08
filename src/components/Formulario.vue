<script setup>
import Alera from "./Alerta.vue";

import { reactive, ref } from "vue";

const busqueda = reactive({
  cuidad: "",
  pais: "",
});

const error = ref("");
const emit = defineEmits(["obtener-clima"]);

const paises = [
  { codigo: "US", nombre: "Estados Unidos" },
  { codigo: "MX", nombre: "México" },
  { codigo: "AR", nombre: "Argentina" },
  { codigo: "CO", nombre: "Colombia" },
  { codigo: "CR", nombre: "Costa Rica" },
  { codigo: "ES", nombre: "España" },
  { codigo: "PE", nombre: "Perú" },
];

const consultarClima = () => {
  if (Object.values(busqueda).includes("")) {
    error.value = "Todos los campos son obligatorios";
    return;
  }
  error.value = "";
  emit("obtener-clima", busqueda);
};
</script>

<template>
  <form class="formulario" @submit.prevent="consultarClima">
    <Alera v-if="error">
      {{ error }}
    </Alera>
    <div class="campo">
      <label for="cuidad">Cuidad:</label>
      <input
        type="text"
        name="cuidad"
        id="cuidad"
        placeholder="Cuidad"
        v-model="busqueda.cuidad"
      />
    </div>
    <div class="campo">
      <label for="pais">Paìs:</label>
      <select name="pais" id="pais" v-model="busqueda.pais">
        <option value="">-- Seleccione un paìs --</option>
        <option v-for="pais in paises" :key="pais.codigo" :value="pais.codigo">
          {{ pais.nombre }}
        </option>
      </select>
    </div>
    <input type="submit" value="Consultar CLima" />
  </form>
</template>


