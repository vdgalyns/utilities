import { readonly, ref } from 'vue'

export const useAsyncData = <T extends (...args: any[]) => Promise<any>>(fn: T) => {
  const isLoading = ref(false)
  const isError = ref(false)
  const isLoaded = ref(false)
  const execute = (...args: Parameters<T>) => {
    return new Promise<Awaited<ReturnType<T>>>((resolve, reject) => {
      isLoading.value = true
      fn(...args)
        .then((data) => {
          isLoading.value = false
          isError.value = false
          isLoaded.value = true
          resolve(data)
        }).catch((error) => {
          isLoading.value = false
          isError.value = true
          isLoaded.value = false
          reject(error)
        })
    })
  }
  return {
    execute,
    isError: readonly(isError),
    isLoaded: readonly(isLoaded),
    isLoading: readonly(isLoading)
  }
}
