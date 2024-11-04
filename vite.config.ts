import mkcert from 'vite-plugin-mkcert'
import path from 'path'
import react from '@vitejs/plugin-react-swc'
import tsconfig from './tsconfig.aliases.json'
import { defineConfig } from 'vite'

const { compilerOptions } = tsconfig
const { paths, baseUrl } = compilerOptions

export const alias = Object.entries(paths).reduce(
  (acc: Record<string, string>, [key, value]) => {
    const aliasKey = key.replace('/*', '')
    const aliasPath = value[0].replace('/*', '')
    acc[aliasKey] = path.resolve(__dirname, baseUrl, aliasPath)
    return acc
  },
  {},
)

export default defineConfig(() => {
  return {
    plugins: [react(), mkcert()].filter(Boolean),
    build: {
      terserOptions: {
        format: {
          comments: false,
        },
        compress: {
          drop_console: true,
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
        css: {
          api: 'modern-compiler',
        },
      },
    },
    resolve: {
      alias,
    },
  }
})
