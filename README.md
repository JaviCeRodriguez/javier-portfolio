# Javier Rodriguez - Portfolio 💼

## 📦 Instalación

```sh
git clone https://github.com/JaviCeRodriguez/javier-portfolio.git
cd ./javier-portfolio
yarn install # or npm install
yarn dev
```

## 📝 Endpoints

> `/api/posts`: Obtengo todos los posts a partir de la query realizada.

**Ejemplo**: `/api/posts?limit=3&page=1`. Por defecto: `limit = 6` y `page = 1`.

**Response**: 
```json
{
  "data": [...],
  "total": 3,
  "page": "1"
}
```

> `/api/postsPages`: Obtengo la cantidad de páginas según el límite de posts por página.

**Ejemplo**: `/api/postsPages?limit=3`. Por defecto: `limit = 6`.

**Response**:
```json
{
  "totalPages": 6,
  "limit": "3"
}
```