import { Server } from '@hocuspocus/server'
import { Logger } from '@hocuspocus/extension-logger'
import { SQLite } from '@hocuspocus/extension-sqlite'

const server = new Server({
  name: 'hocuspocus',
  port: 1234,
  timeout: 60000,
  debounce: 5000,
  maxDebounce: 30000,
  host: '0.0.0.0',
  quiet: true,
  websocketOptions: { maxPayload: 1024 * 1024 },
  extensions: [
    new Logger(),
    new SQLite({ database: 'collab.db' }),
  ]
})

server.listen()
console.log('Hocuspocus server running on ws://localhost:1234')