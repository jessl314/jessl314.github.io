for server backend we can run: npm run devStart


# to fix import errors

remove "type": "module" -> use "module": "commonjs" and "moduleResolution":"node" -> make ts/js imports extensionless

also removed: verbatimModuleSyntax: true and allowImportingTsExtensions: true


# other notes
require('crypto').randomBytes(64).toString('hex') -> command for generating secrets lol


backend endpoint: https://jesslpersonalwebsite.onrender.com