// Fichier de configuration de l'application
// Le problème des fichiers MultiWord ou dans le package.json
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // Rajouter cette ligne pour accepter les noms 
  // simple (not multiWord)
  lintOnSave: false
})
