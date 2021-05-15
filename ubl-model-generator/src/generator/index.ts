import { ModelGenerator } from './ModelGenerator'
import { FieldMapGenerator } from './FieldMapGenerator'

const versions = ['2.3'] // ['2.1', '2.2', '2.3']

async function generate(targetPath: string, addVersionToPath: boolean) {
  const modelGenerator = new ModelGenerator()
  const fieldMapGenerator = new FieldMapGenerator()
  for (const version of versions) {
    await modelGenerator.generateModels(targetPath, version, addVersionToPath)
    await fieldMapGenerator.generateFieldMaps(targetPath, version, addVersionToPath)
  }
}

generate('../ubl-model-library/src/ubl', true).then()
// generate('/Users/adriantosca/Adi/test-pdf-rederer/src/ubl', false).then()
