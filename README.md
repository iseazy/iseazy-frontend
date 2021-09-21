# MeMemory

Para instalar todas las dependencias del proyecto, ejecuta el comando:
```
yarn
```
A continuación, para iniciar la aplicación, ejecuta el comando:
```
yarn start
```
Para ejecutar la pila de tests, y comprobar el estado del coverage, ejecuta:
```
yarn test -- --coverage
```

## Notas del desarrollador

Existen innumerables maneras de resolver esta prueba.

Usar las mejores y últimas tecnologías sin duda es una buena opción. Poder elegir el stack tecnológico es perfecto para disfrutar de la comodidad y de la rutina.

Pero salir de la zona de confort, evitar caer en instalar todas esas librerías con las que se trabaja a diario, y aceptar la simpleza de la arquitectura más básica, puede ser un reto y a la vez una manera de mostrar que lo importante son los patrones, la técnica, la organización.

### Sin elementos añadidos. KEEP IT SIMPLE

He decidido realizar esta prueba de la manera más simple posible (no por ello la más sencilla). Como resultado, el archivo `package.json` puede verse inalterado, salvo la excepción de una pequeña librería complementaria para el testeo de hooks.

No obstante, escribo estas notas para poder mostrar que opciones, mejoras, futuros pasos, podrían ser llevados a cabo, para convertir al proyecto en una aplicación mucho más escalable y segura.

## Siguientes pasos

### Webpack

La primera decisión que tomaría sería **eyectar** la configuración de webpack. Ya vale de usar referencias relativas, o absolutas. Me decanto por la idea de **crear alias** para los distintos ficheros clave: `@components, @containers, @utils, @hooks, @reducers...` De esta manera su acceso desde las áreas de test y, en general, desde cualquier lugar, será infinitamente menos engorrosa, y menos sensible a cambios en la organización.

### Estilos

Continuando con la organización, instalaría un **preprocesador de estilos**, `node-sass` es el que más uso, y por ello me decantaría por ese. En cualquier caso, elegiría cualquier sistema de estilos que me permita mantener el patrón **BEM** (o **VBEM** ), reusando código y simplificando el fichero (o ficheros de estilos). Para una aplicación tan pequeña como esta, no me he planteado una modularizacion de estilos.

### Tests

Estoy en mi salsa con `react testing library`. No alteraría las librerías de test, pero si que organizaría mejor las rutas y especficaría mejor que archivos marcar como testeables y cuales no, a través de una buena configuración.

### Static type checking

Ya que hablamos de tests, el pilar del testing no son los test unitarios, sino un buen amigo interprete, transpilador, extensión... Lo que sea, pero que monte guardia en durante el proceso de desarrollo.

Usaría `Typescript` si. Llevaría más tiempo hacer la aplicación al ir escribiendo tipos aqui y allá, si. ¿Pero acaso no se considera una buena inversion tener un stack de tests que te aseguren la aplicación?

### Responsive

Una vez que se disponga de un buen sistema de estilos preprocesados, comenzar a meter mano a la interfaz para que se vea perfecta en cualquier sistema, es un MUST

### Animaciones

Tratándose de un juego con un componente de velocidad, he tratado de **recompensar al usuario cuando acierta una pareja**, y de castigar con un pequeño lapso de tiempo cuando las dos cartas elegidas han sido incorrectas. 

Desarrollar un sistema de tiempo, animaciones, es complicado. Y disponer de esos tiempos, segregados por distintas partes de la aplicación, como en la hoja de estilos o en el hook, es un error.

Usar una librería de animación de componentes que facilite la vida, estaría muy bien. Existen  opciones varias, pero hay que andar con pies de plomo para ver cual es la que mejor se integra con los sistemas de test.

### Lógica del juego

Las cartas con las que se juega, se leen de un array hardcodeado en memoria. Poco costaría realizar una llamada asincrona a un sistema externo, que nos mande la información de las imagenes (o los propios binarios).

Teniendo en cuenta que las cartas pueden ser un número indeterminado. ¿Por qué limitarse a ahcer parejas? Con un pequeño cambio, el juego está diseñado para ser escalable y programar trios, o más.

## Conclusiones

Todo se puede mejorar, complejizar. Pero finalmente, la sencillez y la pulcritud del código han sido mi objetivo de esta prueba.

Gracias por el tiempo dedicado a leer este documento y revisar cualquier trozo de código.
