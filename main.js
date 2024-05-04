export const fn = (a, b, c) => {
   //Reglas:
   // 1. No pueden haber numeros negativos
   // 2. El total de las empanadas deber ser multiplo de 3
   // 3. El total de las empanadas deber ser menor a 40
   const nEmpanadas = a + b + c;

   if (a < 0 || b < 0 || c < 0) throw new Error("No se aceptan numeros negativos");

   if ((nEmpanadas % 3) != 0) throw new Error("La suma no es multiplo de 3");

   if (nEmpanadas > 40) throw new Error("La suma no puede ser mayor a 40");

   const subTotal = (a * 12) + (b * 14) + (c * 16);
   return Math.ceil(subTotal / 3); // Se uso ceil, porque round redondea hacia el entero más cercano en cambio ceil siempre redonde hacia arriba.
};

console.log(fn(1, 1, 1)); //14
console.log(fn(3, 3, 0)); //26
console.log(fn(2, 0, 1)); //14
console.log(fn(9, 10, 11));//142
console.log(fn(11, 10, 9)); //139

