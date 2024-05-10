/**
 * Electron API 类型支持应与 preload.ts 中的API一致
 */
export default interface ElectronApi {
  message: (file: string) => void
  receiveAndReturn: (characters: string) => string
}

declare global {
  interface Window {
    electronAPI: ElectronApi
  }
}
