
type SnackProp = {
  context: string,
  severity: 'error' | 'info' | 'success' | 'warning',
  show: boolean,
  handleCloseSnack: () => void,
}

export type {
  SnackProp
}