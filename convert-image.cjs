const sharp = require("sharp");

const images = [
    "hospital.png",
    "plagiarism.png",
    "sign-Language.png"
];

async function convertImages() {
    for (const image of images) {
        const input = `src/assets/projects/${image}`;
        const output = `src/assets/projects/${image.replace(".png", ".webp")}`;

        await sharp(input)
            .webp({ quality: 80 })
            .toFile(output);

        console.log(`Converted: ${image} → ${output}`);
    }
}

convertImages()
    .then(() => console.log("All images converted successfully!"))
    .catch((error) => console.error(error));