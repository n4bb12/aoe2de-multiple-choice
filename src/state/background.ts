import { createSimpleGlobalState } from "./simpleGlobalState"

const { getValue, setValue, useValue } = createSimpleGlobalState("")

function initializeBackground(background: string) {
  if (!process.browser || !getValue()) {
    setValue(background)
  }
}

export {
  setValue as setBackground,
  useValue as useBackground,
  initializeBackground,
}
