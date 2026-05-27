/* ═══════════════════════════════════════════════════════════════════════════════
   SYCCORO · ARCHIVO DE IMÁGENES DE MODELOS  (opcional)
   ═══════════════════════════════════════════════════════════════════════════════

   Este archivo es OPCIONAL. La calculadora funciona perfectamente sin él.
   Si está presente en la misma carpeta que el archivo HTML de la calculadora,
   las imágenes de los modelos se mostrarán al reconocer una referencia.

   ─── CÓMO AÑADIR UNA IMAGEN ──────────────────────────────────────────────────
   Cada entrada es:   "CLAVE": "data:image/webp;base64,...........",

   - CLAVE: el código del modelo. Ejemplos:
       Cibeles      → "SB-C316"
       Neptuno      → "SB-N305"
       Giratorias   → "SGI-2565"
   - El valor es la imagen convertida a base64 (formato webp recomendado por peso).
     Puedes convertir una imagen a base64 en cualquier conversor online
     ("image to base64") y pegar el resultado completo, incluyendo el
     prefijo "data:image/webp;base64,".

   ─── EJEMPLO ─────────────────────────────────────────────────────────────────
   window.SYCCORO_IMGS = {
     "SB-C316": "data:image/webp;base64,UklGRn4MA....",
     "SB-N305": "data:image/webp;base64,UklGRxyZ....",
     "SGI-2565": "data:image/webp;base64,UklGRabc...."
   };

   ─── IMPORTANTE ──────────────────────────────────────────────────────────────
   - Mantén este archivo en la MISMA CARPETA que la calculadora HTML.
   - Si renombras la calculadora no pasa nada, pero este archivo debe llamarse
     siempre exactamente 'syccoro_assets.js'.
   ═══════════════════════════════════════════════════════════════════════════════ */

window.SYCCORO_IMGS = {
  // Añade aquí las imágenes de los modelos, una por línea.
  // "SB-C316": "data:image/webp;base64,........",
};
