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
4) Ejecutas "yarn start" para comenzar a desarrollar en http://localhost:3000


## Implementación

Para resolver el problema propuesto y ser una aplicación tan pequeña posiblemente se haya hecho algo de sobreingeniería. Se ha dado una solución un poco más compleja para poder hacer uso de diferentes hooks y de esta manera mostrar su funcionamiento. 

También se ha añadido una dependencia (__flip-card-react__ para las animaciones de las cartas) como prueba del uso de librerías de terceros, así como varias dependencias de desarrollo para facilitar las buenas prácticas a la hora de escalar la aplicación:

- __react-app-rewired__: usada para sobreescribir la configuración de Webpack y poder hacer uso de los _alias_
- __path__: la usa el fichero _config-overrides.js_ para poder resolver rutas
- __@testing-library/react-hooks__: bastante útil a la hora de testear __hooks__
- __husky__: sirve para ejecutar comandos antes de un _git commit_ o un _git push_, en este caso se usa para que los desarrolladores no puedan hacer commit si no pasan todos los test o si ESLint da algún error
- __lint-staged__: es usada por _husky_ para poder ejecutar comandos

La aplicación es _responsive_ y se puede visualizar correctamente en dispositivos móviles, tablets y pantallas de ordenador.
