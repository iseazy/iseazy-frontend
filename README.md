# Solución
Autor: Rodrigo Martín de Lamo
## Juego

Tal y como se pedía he seguido el flujo y los diseños proporcionados para realizar el juego. 

Cada vez que se inicia un nuevo juego las cartas se barajan.

## Estado del tablero

La solución que presento se apoya en 2 objetos, uno que mantiene el estado de las cartas descubiertas y otro que contiene la carta activa (la primera descubierta de cada par de cartas descubiertas).

Cada vez que se pulse en una carta se descubre; seguidamente se comprobará si tenemos una carta activa y en caso de no haberla, ésta pasa ser la activa. Si ya existe una carta activa comprobamos si son pareja, en caso de serlo ambas permanecen descubiertas, en caso contrario se les vuelve a dar la vuelta.

Dado que las cartas tienen una animación debemos esperar el tiempo que tarda la carta en descubrirse para volver a girarlas, sin embargo usando el callback para obtener el estado anterior se mantiene la integridad del mismo.

## Tests

He añadido tests unitarios a todos los componentes usando la librería ya instalada react-testing-library.

También he añadido un test unitario al método que genera el mazo de cartas.

# Prueba técnica

El objetivo de esta prueba es conocer un poco mejor cómo trabajas, las buenas prácticas que sigues y tu atención por el
detalle.

Para realizar el ejercicio te proporcionaremos un proyecto vacío creado con CRA y un diseño realizado con Adobe XD para
que puedas obtener los materiales necesarios de forma cómoda:

https://xd.adobe.com/view/2119e5a1-31d4-42e2-5edd-4e565781bb65-5728/flow/

Una vez implementado tendrás que ponernos un Pull Request para que podamos preguntarte por tu código o sugerir alguna
mejora. De esta manera nos podremos conocer un poco mejor, ya que las revisiones de código forman parte de nuestro día a
día :)

Te sugerimos que empieces implementando la mecánica básica del ejercicio y posteriormente añadas los detalles y mejoras
que consideres, de esta manera tendrás algo revisable aunque se te acabe el tiempo.

La duración de la prueba es de **dos días**. No se trata de hacer una prueba de velocidad, por lo que si te surge algún
imprevisto contacta con nosotros para que podamos ampliar el plazo. 

## Descripción del ejercicio

Se trata de implementar un juego clásico; el memory. La mecánica es bastante sencilla:

Al empezar la partida tienes una parrilla de tarjetas vistas del reverso. Las tarjetas contienen una serie de parejas de
imágenes que se colocan de forma aleatoria en cada tirada. Puedes descubrir dos tarjetas a la vez:

* Si las tarjetas son iguales se quedan descubiertas.
* Si las tarjetas son distintas se vuelven a poner del reverso para
que sigas buscando parejas. 
* El juego termina cuando hayas revelado todas las parejas.

## Pasos para preparar el entorno para realizar la prueba

1) Es necesario tener instalado node >= 10 y yarn.
2) Clonas este repo
3) Ejecutas "yarn" en la carpeta del proyecto
4) Ejecutas "yarn start" para comenzar a desarrollar en http://localhost:300
