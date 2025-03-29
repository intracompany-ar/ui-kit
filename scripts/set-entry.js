// PAra cambiar la configuración del packages cuando hago el deplot => cambiar src por dist
import fs from 'fs'

const mode = process.argv[2] // "dev" o "prod"
const pkgPath = new URL('../package.json', import.meta.url)
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'))

if (mode === 'dev') {
  pkg.main = 'src/index.ts'
  pkg.exports = {
    '.': {
      import: './src/index.ts'
    }
  }
  console.log('🛠️ Seteado en modo desarrollo (src/)')
} else if (mode === 'prod') {
  pkg.main = 'dist/index.js'
  pkg.exports = {
    '.': {
      import: './dist/index.js',
      types: './dist/index.d.ts'
    }
  }
  console.log('🚀 Seteado en modo producción (dist/)')
} else {
  console.error('❌ Modo no reconocido. Usá "dev" o "prod".')
  process.exit(1)
}

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2))