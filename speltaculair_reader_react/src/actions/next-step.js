export const NEXT_STEP = 'NEXT_STEP'

export default function nextStep(step) {
  return {
    type: NEXT_STEP,
    payload: step
  }
}
