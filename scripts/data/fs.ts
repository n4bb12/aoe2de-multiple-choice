import { writeFile } from "fs/promises"

export async function writeJson(file: string, data: any) {
  await writeFile(file, JSON.stringify(data, null, 2), "utf8")
}
