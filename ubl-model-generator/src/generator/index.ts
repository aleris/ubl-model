import { ModelGenerator } from './ModelGenerator'
import { FieldMapGenerator } from './FieldMapGenerator'

const versions = ['2.1', '2.2']

async function generate() {
  const modelGenerator = new ModelGenerator()
  const fieldMapGenerator = new FieldMapGenerator()
  for (const version of versions) {
    await modelGenerator.generateModels(version)
    await fieldMapGenerator.generateFieldMaps('2.2')
  }
}

generate().then()
