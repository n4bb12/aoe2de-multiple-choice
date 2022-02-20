import { writeFileSync } from "fs"
import https from "https"
import { Stream } from "stream"

export async function downloadImage({
  url,
  file,
}: {
  url: string
  file: string
}) {
  return new Promise<void>((resolve) => {
    https
      .request(url, function (response) {
        var data = new Stream.Transform()

        response.on("data", function (chunk) {
          data.push(chunk)
        })

        response.on("end", function () {
          writeFileSync(file, data.read())
          resolve()
        })
      })
      .end()
  })
}
