export const backgrounds = [
  "/wallpapers/age-of-empires-2-definitive-edition_6069379.jpg",
  "/wallpapers/age-of-empires-2-definitive-edition_6069380.jpg",
  "/wallpapers/age-of-empires-2-definitive-edition_6069381.jpg",
  "/wallpapers/age-of-empires-2-definitive-edition_6069382.jpg",
  "/wallpapers/age-of-empires-2-definitive-edition_6069383.jpg",
  "/wallpapers/age-of-empires-2-definitive-edition_6069384.jpg",
  "/wallpapers/age-of-empires-2-definitive-edition_6069385.jpg",
  "/wallpapers/age-of-empires-2-definitive-edition_6069386.jpg",
  "/wallpapers/age-of-empires-2-definitive-edition_6069387.jpg",
  "/wallpapers/age-of-empires-2-definitive-edition_6069388.jpg",
  "/wallpapers/age-of-empires-2-definitive-edition_6069389.jpg",
  "/wallpapers/age-of-empires-2-definitive-edition_6069390.jpg",
  "/wallpapers/age-of-empires-2-definitive-edition_6069391.jpg",
  "/wallpapers/age-of-empires-2-definitive-edition_6069392.jpg",
  "/wallpapers/age-of-empires-2-definitive-edition_6069395.jpg",
  "/wallpapers/age-of-empires-2-definitive-edition_6069396.jpg",
  "/wallpapers/age-of-empires-2-definitive-edition_6069397.jpg",
  "/wallpapers/age-of-empires-2-definitive-edition_6069398.jpg",
]

export function getRandomBackground() {
  return backgrounds[Math.floor(Math.random() * backgrounds.length)]
}
