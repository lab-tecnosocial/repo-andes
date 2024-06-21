#!/bin/bash

# Carpeta donde están las imágenes
IMAGES_DIR="./repo"

# Subcarpeta para guardar las imágenes marcadas
OUTPUT_DIR="$IMAGES_DIR/watermarked"

# Imagen de la firma
SIGNATURE="firma.png"

# Crear la subcarpeta si no existe
mkdir -p "$OUTPUT_DIR"

# Para cada imagen en la carpeta
for IMAGE in "$IMAGES_DIR"/*.{jpg,jpeg,png}; do
  # Verifica si el archivo existe para evitar errores
  if [ -f "$IMAGE" ]; then
    # Obtener el nombre del archivo sin la extensión
    FILENAME=$(basename "$IMAGE")
    # Crear la imagen con la marca de agua ajustando solo el ancho
    convert "$SIGNATURE" -resize 200x "$SIGNATURE.resized.png"
    convert "$IMAGE" "$SIGNATURE.resized.png" -gravity southeast -geometry +10+10 -composite "$OUTPUT_DIR/$FILENAME"
    echo "Imagen $FILENAME marcada con éxito."
  fi
done

# Limpiar la imagen temporal redimensionada
rm "$SIGNATURE.resized.png"
