import {
  createState,
  SetPartialStateAction,
  useHookstate,
} from "@hookstate/core"

export function createSimpleGlobalState<T>(initialValue: T) {
  const state = createState<T>(initialValue)

  const getValue = () => state.get()
  const setValue = (value: T) => state.set(value)
  const mergeValue = (value: SetPartialStateAction<T>) => state.merge(value)
  const useValue = () => useHookstate(state).get()

  return {
    state,
    getValue,
    setValue,
    mergeValue,
    useValue,
  }
}
