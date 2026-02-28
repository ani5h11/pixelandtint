#!/bin/bash
imgDir="/Users/sunyanalungba/pixel&tint/public/assets"

for file in "$imgDir"/*.{jpg,png,jpeg}; do
    # Check if the glob expansion failed (i.e. no files matched)
    [ -e "$file" ] || continue
    
    filename=$(basename -- "$file")
    extension="${filename##*.}"
    filename="${filename%.*}"
    outputPath="$imgDir/$filename.webp"
    
    echo "Converting $file to $outputPath..."
    sips -s format webp "$file" --out "$outputPath" || echo "Failed to convert $file"
done
