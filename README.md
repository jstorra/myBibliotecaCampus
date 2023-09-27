# Creación de JSON Server

- Ir directamente a [Clonación de repositorio y .gitignore](#clonarRepo)

Primero que todo crearemos dos archivos los cuales seran `main.js` y `db.json`, estos archivos seran fundamentales para este proceso. Ahora en el archivo `db.json` debemos poner la siguiente estructura de ejemplo:

```
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```

Finalizados estos pasos, procederemos a la creación del JSON Server ejecutando los siguientes comandos **(solamente los enumerados)** y modificaciones:

1. `npm init -y`:

   - `npm init` es un comando que se utiliza para inicializar un proyecto de Node.js y crear un archivo `package.json`. El archivo `package.json` es un archivo de configuración que contiene información sobre el proyecto, sus dependencias y scripts personalizados.
   - El flag `-y` o `--yes` se utiliza para aceptar automáticamente todas las opciones predeterminadas al crear el `package.json`, lo que significa que no te pedirá que confirmes cada una de las opciones, sino que utilizará las opciones predeterminadas para todo.

   En resumen, `npm init -y` crea un archivo `package.json` en el directorio actual con las opciones predeterminadas sin preguntarte nada.

   Al ejecutarse el comando se creara un archivo `package.json` con una estructura predefinida de la siguiente manera:

   ```
   {
      "name": "tu-proyecto",
      "version": "1.0.0",
      "description": "",
      "main": "main.js",
      "scripts": {
          "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": [],
      "author": "",
      "license": "ISC"
   }
   ```

   Ten en cuenta que las propiedades `main` y `name` pueden tener un valor distinto ya que sus valores se toman automaticamente por el sistema, por lo general en la propiedad `main` ira nuestro archivo principal ya sea `app.js`, `index.js` o `main.js`.

---

2. `npm -E -D install json-server`:

   - `npm install` se utiliza para instalar paquetes de Node.js y sus dependencias. En este caso, se está intentando instalar un paquete llamado `json-server`.
   - El flag `-E` o `--save-exact` se utiliza para fijar la versión exacta del paquete en el `package.json`. Esto significa que la versión especificada del paquete se registrará en el archivo `package.json` con un prefijo `=` antes de la versión para indicar que es una versión exacta.
   - El flag `-D` o `--save-dev` se utiliza para indicar que el paquete se debe agregar como una dependencia de desarrollo en el archivo `package.json`. Las dependencias de desarrollo son aquellas que se utilizan solo durante el desarrollo, como herramientas de construcción, pruebas, etc.

   En resumen, `npm -E -D install json-server` instala el paquete `json-server` en el proyecto, fija la versión exacta en el `package.json` y lo registra como una dependencia de desarrollo. Esto significa que el paquete `json-server` será necesario para el desarrollo del proyecto, pero no se incluirá en las dependencias de producción cuando se distribuya el proyecto.

   Una vez ejecutado el comando se creara un archivo `package-lock.json` y una carpeta `node_modules`, ademas nuestro archivo `package.json` se modificara y tendremos que agregarle una nueva propiedad llamada `type`, quedando de la siguiente manera:

   ```
   {
      "name": "tu-proyecto",
      "version": "1.0.0",
      "description": "",
      "main": "main.js",
      "type": "module",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "devDependencies": {
        "json-server": "0.17.3"
      }
   }
   ```

   Ahora debemos declarar que al ejecutar el comando `npm run dev` se ejecuten de forma instantanea todos los scripts previamente declarados, para finalizar con la creación del JSON Server debemos usar el comando `json-server --watch db.json` dentro de la propiedad `scripts` y renombrando su propiedad interna por `dev`:

   ```
   {
      "name": "tu-proyecto",
      "version": "1.0.0",
      "description": "",
      "main": "main.js",
      "type": "module",
      "scripts": {
        "dev": "json-server --watch db.json"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "devDependencies": {
        "json-server": "0.17.3"
      }
   }
   ```

   Ahora ejecutaremos el siguiente comando en la terminal `npm run dev`, sí no hubo errores en los pasos anteriores nos saldra el siguiente mensaje:

   ```
    \{^_^}/ hi!

    Loading db.json
    Done

    Resources
    http://localhost:3000/posts
    http://localhost:3000/comments
    http://localhost:3000/profile

    Home
    http://localhost:3000
   ```

   En caso de querer modificar el puerto y el host usamos `CTRL + C` para salir del `json-server --watch` y usaremos `--port` y `--host` quedando de la siguiente manera:

   ```
   "scripts": {
   "dev": "json-server --watch db.json --port 5010 --host 127.0.0.1"
   },
   ```

   Ejecutamos nuevamente `npm run dev` y nos saldra el siguiente mensaje:

   ```
   Resources
   http://127.0.0.1:5010/posts
   http://127.0.0.1:5010/comments
   http://127.0.0.1:5010/profile

   Home
   http://127.0.0.1:5010
   ```

Completada la creación del JSON Server ahora podemos hacer diferentes peticiones, usaremos como ejemplo `GET`, `POST`, `PUT` y `DELETE`, las cuales se encuentran en el archivo [main.js](main.js) comentadas para que se ejecuten una por una y ver su funcionamiento.

<div name="clonarRepo"></div>

# Clonación de repositorio y `.gitignore`

```bash
git clone https://github.com/jstorra/myBibliotecaCampus.git
```

Al clonarse el repositorio el archivo `.gitignore` impedira que se cargen los archivos allí declarados como lo son `node_modules` y `package-lock.json` debido a que son archivos demasiado grandes que podrian generar conflictos al clonarse ó pushearse.

Para que nos muestre estos dos archivos necesarios para el funcionamiento de nuestro proyecto debemos usar el comando por consola `npm i` el cual analizara a `package.json` e instalara las dependencias allí registradas, en este caso la de `json-server` y su versión correspondiente.

---

<p align="center">Developed by <a href="https://github.com/jstorra">@jstorra</a></p>
