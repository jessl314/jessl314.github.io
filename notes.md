for server backend we can run: npm run devStart


to fix import errors

remove "type": "module" -> use "module": "commonjs" and "moduleResolution":"node" -> make ts/js imports extensionless

also removed: verbatimModuleSyntax: true and allowImportingTsExtensions: true