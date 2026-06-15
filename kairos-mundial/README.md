# Kairos · Mundial 23 — Banner Home + Pop-up + Sección + Carrito

Snippets listos para pegar en Shopify / PageFly. La sección Mundial vive en la
página con handle **`mundial`** → URL `https://kairos-brewing.com/pages/mundial`.

> Nota: el banner y el pop-up apuntan a `/pages/mundial`. Si tu página tiene
> otro handle, reemplaza `/pages/mundial` por el correcto en los 2 archivos.

---

## 1) Banner principal en el HOME → `01-home-banner.html`

Pégalo lo más arriba posible de la Home:

- **Tema Shopify**: *Personalizar* → en la Home, añade una sección **"Custom
  Liquid"** y muévela al tope → pega el contenido del archivo.
- **PageFly**: añade un elemento **"HTML / Custom Liquid"** como primera sección
  de la Home → pega el contenido.

Al hacer click lleva a la sección Mundial. Trae un botón dorado "Participar
ahora" (puedes borrar el `<span class="km-home-banner__cta">…</span>` si lo
quieres sin botón).

---

## 2) "Mundial" como PRIMER ítem del menú principal

Esto se hace en el admin (no es código):

1. **Admin** → *Tienda online* → **Navegación**.
2. Abre **Menú principal** (Main menu).
3. **Agregar elemento de menú**:
   - Nombre: `Mundial 23` (o `🏆 Mundial 23`)
   - Enlace: busca y selecciona la **página "Mundial"** (o pega `/pages/mundial`).
4. **Arrastra** ese ítem hasta dejarlo **primero** de la lista.
5. **Guardar**.

---

## 3) Pop-up al entrar a la página → `02-popup.html`

Para que aparezca al entrar a **toda** la tienda:

- **Tema Shopify**: *Acciones* → **Editar código** → `layout/theme.liquid` →
  pega el bloque completo justo **antes de `</body>`**.
- (Si lo quieres solo en la Home, pégalo en una sección **Custom Liquid** de la
  Home.)

Comportamiento: se muestra **1 vez cada 2 días** por visitante (localStorage),
con un pequeño retardo de 0,7 s. Para volver a mostrárselo a todos, cambia el
sufijo `v1` por `v2` en la línea `var KEY='km_pop_polla_img_v1';`.

---

## 4) Sección Mundial (con carrito correcto) → `03-mundial-section.html`

Pega el contenido en el elemento **"HTML / Custom Liquid"** de PageFly de la
página Mundial (NO dentro del Add-to-Cart nativo de PageFly).

### Carrito: "Comprar" → carrito estándar de Shopify + pronóstico

El botón **"🍺 Participar y añadir al carrito"** ahora:

1. Valida que el 12-pack sume exactamente 12 latas.
2. Agrega el producto con `fetch('/cart/add.js')` enviando el pronóstico como
   **propiedades del line item** (`1° Campeón`, `2° Subcampeón`,
   `3° Tercer lugar`, `4° Goleador`) **+** el detalle de estilos del pack.
3. Redirige a **`/cart`** (el carrito de siempre de Shopify).

Las **propiedades del line item** son visibles en el carrito, en el checkout y
en el pedido dentro del admin de Shopify — quedan asociadas a esa compra. Como
cada pack puede tener su propio pronóstico (participas las veces que quieras),
se usan propiedades por línea en vez de la "nota de pedido" global.

> Detalles técnicos
> - Se agregó `<input type="hidden" name="return_to" value="/cart">` como
>   respaldo para el caso sin JavaScript.
> - Si el `fetch` fallara, hace fallback a un POST nativo del formulario que
>   también agrega el producto y cae en `/cart`.
> - Esto evita que un "cart drawer"/AJAX del tema se quede con la compra sin
>   llevarte al carrito.

### Recordatorio: 2 reemplazos en la sección

1. **VARIANT ID** del producto en `<input type="hidden" name="id" value="…">`
   (Admin → Productos → la URL de la variante termina en `/variants/123456789`).
2. URL de la **foto del producto** (si la usas).

---

## Checklist de publicación

- [ ] Banner pegado en la Home y apunta a `/pages/mundial`.
- [ ] "Mundial 23" es el **primer** ítem del Menú principal.
- [ ] Pop-up pegado site-wide (antes de `</body>`).
- [ ] Sección Mundial publicada en `/pages/mundial` con el VARIANT ID correcto.
- [ ] Probar **Comprar**: agrega el pack, muestra el pronóstico en el carrito y
      te deja en `/cart`.
