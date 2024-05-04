# Las Empanadirris. :dumpling:

Este proyecto nos brinda una solucion al enunciado de las [empanadas challenge](https://github.com/GeeksHubsAcademy/javascript-empanadas-challenge)

## Contenido 🗂️

- [Stack 🛠️](#stack)
- [Solución :unlock:](#solucion)
- [Explicación :memo:](#explicacion)
- [Instalación :gear:](#instalacion)
- [Instrucciones :open_book:](#instrucciones)
- [Autora :woman_technologist:](#autora)

## <a id="stack">Stack 🛠️</a>

- **Javascript**  - Logica y validaciones.

## <a id="solucion">Solución :unlock:</a>
``` javascript
export const fn = (a, b, c) => {
   const nEmpanadas = a + b + c;

   if (a < 0 || b < 0 || c < 0) throw new Error("No se aceptan numeros negativos");

   if ((nEmpanadas % 3) != 0) throw new Error("La suma no es multiplo de 3");

   if (nEmpanadas > 40) throw new Error("La suma no puede ser mayor a 40");

   const subTotal = (a * 12) + (b * 14) + (c * 16);
   return Math.ceil(subTotal / 3);
};
```

## <a id="explicacion">Explicación :memo:</a>

La fórmula toma en cuenta el precio más alto y el más bajo de las empanadas seleccionadas. Luego, considera la proporción entre estos precios para determinar un valor relativo para cada tipo de empanada. Esto se hace multiplicando el número de cada tipo por su precio correspondiente. Después de sumar estos valores para tres empanadas y dividir por el total de tipos (3), obtenemos un total mínimo que refleja el valor relativo de cada tipo de empanada en cualquier combinación, No obstante pueden haber ocasiones en las que el total sea un numero decimal por lo que tendremos que redondearlo al valor siguiente.

## <a id="instalacion">Instalación :gear:</a>
Para poder usar este proyecto sigue los siguientes pasos:
 - Abre tu terminal o línea de comandos y ejecuta el siguiente comando para clonar el repositorio desde GitHub 
   ```bash
    git clone https://github.com/NeylaP/Empanadas.git
   ```
- Una vez clonado el repositorio, accede al directorio del proyecto.
- Abre la carpeta del proyecto en tu editor de texto o IDE favorito, ahora ya puedes interactuar con el y modificarlo a tu gusto. 

## <a id="instrucciones">Instrucciones de uso :open_book:</a>

1. Instalar las dependencias:

    ```bash
    npm install
    ```

2. Ejecutar los test:
    ```bash
    npm run test
    ```
## <a id="autora">Autora :woman_technologist:</a>

- **Neyla Peña M.** - Developer
  - [GitHub](https://github.com/NeylaP) - [LinkedIn](https://www.linkedin.com/in/neyla-pm/) 

 
