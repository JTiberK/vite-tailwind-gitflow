### **Paso 1: Creación del Proyecto con Vite**
1. **Abre tu terminal** y navega al directorio donde deseas crear el proyecto.
2. Usa el siguiente comando para crear un nuevo proyecto React con Vite:
   ```bash
   npm create vite@latest mi-proyecto-react --template react
   ```
   - `mi-proyecto-react` es el nombre del proyecto (cámbialo según tus necesidades).
   - El flag `--template react` indica que queremos usar React como framework.

3. Cuando se te pida elegir una variante, selecciona **JavaScript** (no TypeScript).

4. Una vez creado el proyecto, navega al directorio del proyecto:
   ```bash
   cd mi-proyecto-react
   ```

5. Instala las dependencias básicas:
   ```bash
   npm install
   ```

---

### **Paso 2: Verificación del Proyecto**
1. Inicia el servidor de desarrollo con el siguiente comando:
   ```bash
   npm run dev
   ```

2. Abre tu navegador y navega a la URL proporcionada (generalmente `http://localhost:5173`).

3. Deberías ver una página de bienvenida de Vite con el logo de React girando.

4. Si todo funciona correctamente, detén el servidor presionando `Ctrl + C` en la terminal.

---

### **Paso 3: Reorganización de la Estructura de Carpetas**
1. Dentro de la carpeta `src`, crea las siguientes carpetas:
   - `components`
     - `common/`
     - `layout/`
     - `features/`
   - `hooks/`
   - `utils/`
   - `assets/`
     - `images/`
     - `styles/`
   - `services/`
   - `context/`

2. Elimina archivos innecesarios del template inicial:
   - Elimina `App.css` si no lo necesitas.
   - Elimina `logo.svg` o cualquier otro archivo que no vayas a usar.

3. Configura imports absolutos (opcional pero recomendado):
   - Crea un archivo llamado `jsconfig.json` en la raíz del proyecto y añade lo siguiente:
     ```json
     {
       "compilerOptions": {
         "baseUrl": "./src",
         "paths": {
           "@/*": ["*"]
         }
       }
     }
     ```
   - Esto permite importar archivos usando `@/` como alias de `src/`. Por ejemplo:
     ```javascript
     import MyComponent from '@/components/common/Button';
     ```

---

### **Paso 4: Configuración de Git**
1. **Inicializa un repositorio Git** en la raíz del proyecto:
   ```bash
   git init
   ```

2. Crea un archivo `.gitignore` en la raíz del proyecto y añade lo siguiente para ignorar archivos innecesarios:
   ```
   node_modules/
   dist/
   .env
   .DS_Store
   ```

3. Añade todos los archivos al repositorio:
   ```bash
   git add .
   ```

4. Crea un commit inicial:
   ```bash
   git commit -m "Project setup with Vite"
   ```

5. Si deseas conectar tu proyecto a un repositorio remoto (por ejemplo, GitHub), sigue estos pasos:
   - Crea un repositorio vacío en GitHub.
   - Copia la URL del repositorio remoto.
   - Conecta tu repositorio local al remoto:
     ```bash
     git remote add origin <URL_DEL_REPOSITORIO>
     ```
   - Sube los cambios al repositorio remoto:
     ```bash
     git branch -M main
     git push -u origin main
     ```

---

### **Resolución de Problemas Comunes**
1. **Puerto ocupado**: Si ves un error indicando que el puerto 5173 está ocupado, puedes especificar un puerto diferente:
   ```bash
   npm run dev -- --port 3000
   ```

2. **Errores de dependencias**: Si hay problemas con las dependencias, intenta reinstalarlas:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Verifica la estructura del proyecto**: Asegúrate de estar en la carpeta correcta antes de ejecutar comandos.

---

### **Resultado Final**
- Tendrás un proyecto React configurado con Vite.
- La estructura de carpetas estará organizada para facilitar el desarrollo.

---

### **¿Cómo funciona `npm create vite@latest`?**
1. Cuando ejecutas el comando:
   ```bash
   npm create vite@latest
   ```
   Este comando descarga e instala temporalmente el paquete `create-vite` (que es la herramienta oficial de Vite para inicializar proyectos) solo para la creación del proyecto.

2. Una vez que el proyecto ha sido creado, todas las dependencias necesarias (como Vite) se instalan localmente dentro de la carpeta del proyecto. Esto significa que Vite estará disponible como una **dependencia de desarrollo** en tu proyecto, pero no será instalado globalmente en tu sistema.

3. Las dependencias locales (como Vite) se gestionan automáticamente por npm dentro del archivo `package.json` y la carpeta `node_modules`.

---

### **Ventajas de no instalar Vite globalmente**
- **Menos conflictos**: Al evitar instalar herramientas globalmente, reduces el riesgo de conflictos entre versiones.
- **Proyectos independientes**: Cada proyecto puede usar su propia versión de Vite, lo que garantiza compatibilidad y consistencia.
- **Facilidad de uso**: No necesitas preocuparte por mantener herramientas globales actualizadas.

---

### **¿Cuándo necesitarías instalar Vite globalmente?**
Aunque no es necesario para crear proyectos, podrías considerar instalar Vite globalmente si deseas usarlo como una herramienta CLI general en tu sistema. Por ejemplo:
- Si quieres usar comandos como `vite` o `vite build` fuera del contexto de un proyecto específico.
- Para acceder rápidamente a Vite desde cualquier directorio.

Si decides instalar Vite globalmente, puedes hacerlo con el siguiente comando:
```bash
npm install -g vite
```

Sin embargo, esto **no es obligatorio** para trabajar con proyectos React creados con Vite.

---

### **Resumen**
- **No necesitas instalar Vite globalmente** para crear un proyecto con `npm create vite@latest`.
- El comando `npm create vite@latest` maneja todo por ti, incluyendo la instalación local de Vite en tu proyecto.
- Si prefieres usar Vite como una herramienta CLI global, puedes instalarlo con `npm install -g vite`, pero no es necesario para la mayoría de los casos.

¡Así que ya estás listo para comenzar sin preocupaciones! 🚀

**Respuesta final:**  
No, no necesitas tener Vite instalado globalmente. El comando `npm create vite@latest` gestiona todo por ti.