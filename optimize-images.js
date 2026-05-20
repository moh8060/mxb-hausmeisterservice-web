const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = path.join(__dirname, "public", "comparisons");

fs.readdirSync(inputDir).forEach((file) => {
  const ext = path.extname(file).toLowerCase();

  // تجاهل ملفات webp الحالية
  if (ext === ".webp") {
    console.log("Skipped:", file);
    return;
  }

  // فقط الصور
  if (![".jpg", ".jpeg", ".png"].includes(ext)) {
    return;
  }

  const inputPath = path.join(inputDir, file);

  const outputPath = path.join(
    inputDir,
    path.parse(file).name + ".webp"
  );

  sharp(inputPath)
    .resize({
      width: 1200,
      withoutEnlargement: true,
    })
    .webp({
      quality: 82,
    })
    .toFile(outputPath)
    .then(() => console.log("Optimized:", outputPath))
    .catch(console.error);
});