import { readFile } from "fs/promises"
const steamLibraryDir = "D:/Spiele/SteamLibrary"

export async function readGameStrings() {
  const languageFile = `${steamLibraryDir}/steamapps/common/AoE2DE/resources/de/strings/key-value/key-value-strings-utf8.txt`
  const languageFileContent = await readFile(languageFile, "utf8")

  const strings = languageFileContent
    .split(/[\r\n]/g)
    .filter(Boolean)
    .reduce<Record<string, string>>((result, line) => {
      const matchResult = line.match(/^(\d+) "(.*)"$/)
      if (matchResult) {
        const [match, id, text] = matchResult
        result[id] = text
      }
      return result
    }, {})

  return strings
}
