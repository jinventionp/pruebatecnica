[![React](https://wiki.uqbar.org/img/languages/React-logo.png "React")](# "React")

## PRUEBA TÉCNICA DESARROLLADOR FRONT-END

###Descripción
Por favor escriba un programa utilizando JS, HTML y CSS, que cumpla con los siguientes requerimientos funcionales:
1. Consumir el API de xkcd: https://xkcd.com/json.html
2. Crear la siguiente pantalla mostrando un comic aleatorio de xkcd.
3. Permitir que el usuario califique el comic. 
[![Layout](https://raw.githubusercontent.com/jinventionp/pruebatecnica/main/src/assets/img/layout.png "Layout")](# "Layout")

La pantalla debe tener como mínimo las siguientes partes:
1. Titulo del comic.
2. Imagen del comic.
3. Alguna forma interactiva para que el usuario pueda clasificar el comic.

### Desarrollo
Al consumir el API de xkcd: https://xkcd.com/json.html obtuve el siguiente Error de CORS policy (NO 'Access-Control-Allow-Origin') y se ejecutaron las siguientes configuraciones:
- Se gregó proxy en el package.json "proxy": "https://xkcd.com"
- Se instaló una extensión en el navegador llamada Moesif Orign & CORS
- Se habilitó el CORS como parametros adicionales en la petición fetch
```javascript
const response = await fetch('https://xkcd.com/info.0.json', {
	        'mode': 'cors',
	        'headers': {
            	'Access-Control-Allow-Origin': '*',
        	}
    	});
```
Y no logré solucionarlo ya que le estoy haciendo peticiones desde el localhost o que permisos debe tener el servidor donde esta el endpoint propuesto.

La API se ha consumido con el siguiente endpoint de ejemplo publico en internet https://api.randomuser.me/ para desarrollar la solución.

Se ha creado el comic aleatorio con el endpoint  https://api.randomuser.me/

La calificación por el usuario se ha creado implementando el framework material ui https://material-ui.com/ con el componente llamado Rating https://material-ui.com/api/rating/

### Bonus
Se otorgarán puntos extras en la prueba si en la implementación se utiliza una o más de las siguientes tecnologías/herramientas:
- Vue, Angular o React.
- Saas, Less.
- Webpack.

### Desarrollo
La prueba ha sido desarrollada con **Html5m Css3, React, Sass** y , se ejecuta **npm run build** lo cual crea una compilación optimizada de tu aplicación en el directorio build. 

### Pasos para ejecutar la solución
1. Descargar e instalar [node.js](https://nodejs.org/ "node.js")
2. Descargar la solución del repositorio https://github.com/jinventionp/pruebatecnica/
3. Dentro de la carpeta descargada pruebatecnica ejecutar el comando **npm start**

### Ejecución de la solución
![Layout Solution](https://raw.githubusercontent.com/jinventionp/pruebatecnica/main/src/assets/img/LayoutSolution.png "Layout Solution")
