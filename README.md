# login-app-edwin

Formulario de inicio de sesión desarrollado con HTML, CSS y JavaScript.
Proyecto integrador del taller de control de versiones - CECAR.

**Autor:** Edwin Diaz Arrieta

## Estrategia de ramas: GitHub Flow

- `main` siempre contiene una versión estable y desplegable.
- Cada funcionalidad nace en una rama corta (`feature/...`, `ci/...`) a partir de `main`.
- Los cambios se integran a `main` únicamente mediante Pull Request revisado por un compañero.
- Las ramas se eliminan una vez fusionadas.

### Por qué GitHub Flow

- **Equipo pequeño y proyecto corto:** no necesitamos las ramas `develop`, `release` y `hotfix` de Git Flow, que añaden ceremonia sin aportar valor aquí.
- **Integración frecuente:** las ramas viven poco y los conflictos son pequeños.
- **Se apoya en Pull Requests y en GitHub Actions**, que es lo que estamos practicando.
- **Trunk-based** exige una batería de pruebas automatizadas sólida que todavía no tenemos.

## Convención de commits (Conventional Commits)

| Prefijo | Uso |
|---|---|
| `feat:` | Nueva funcionalidad |
| `fix:` | Corrección de un error |
| `docs:` | Documentación |
| `style:` | Formato o estilos sin cambiar la lógica |
| `refactor:` | Reestructuración sin cambiar el comportamiento |
| `ci:` | Cambios en el pipeline |
