import { contextBridge, ipcRenderer } from 'electron'

// 接收渲染进程的消息，并返回主进程处理结果
contextBridge.exposeInMainWorld('electronAPI', {
  message: (message: string) => {
    // 向主进程发送消息，单向通信方式
    ipcRenderer.send('message', message)
  },
  receiveAndReturn: (message: string) => {
    // 向主进程发送消息，并返回处理结果，双向通信方式
    return ipcRenderer.invoke('receiveAndReturn', message)
  }
})
