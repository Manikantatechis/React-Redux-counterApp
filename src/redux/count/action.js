export const INCREMENT = 'INCREMENT'
export function increment() {
   return {
      type: 'INCREMENT'
   }
}
export const DECREMENT = 'DECREMENT'
export function decrement() {
   return {
      type: 'DECREMENT'
   }
}
export const INCVALUE = 'INCVALUE'
export function incValue(val) {
   return { type: 'INCVALUE', count: val }
}