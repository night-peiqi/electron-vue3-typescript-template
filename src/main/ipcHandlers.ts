import { ipcMain } from 'electron'

// 进程间通信文档：https://www.electronjs.org/zh/docs/latest/tutorial/ipc
export const registerIpcHandlers = () => {
  // 单向通信：接收渲染进程的消息
  ipcMain.on('message', (event, message: string) => {
    console.log('Received message', message)
  })

  // 双向通信：接收渲染进程的消息，并返回结果
  ipcMain.handle('receiveAndReturn', (event, message: string) => {
    console.log('receiveAndReturn', message)

    // 想返回什么都可以
    const ret = {
      rawData: message,
      newData: `neight-peiqi：${message}`
    }
    return ret
  })
}
