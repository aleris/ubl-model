import { FieldMapGenerator } from './FieldMapGenerator'
import { MetaAllGenerator } from './MetaAllGenerator'
import { ModelGenerator } from './ModelGenerator'
import { AllUblVersions } from './UblSchema'

async function generate(targetPath: string, addVersionToPath: boolean) {
  // const modelGenerator = new ModelGenerator()
  // const fieldMapGenerator = new FieldMapGenerator()
  // for (const version of AllUblVersions) {
  //   await modelGenerator.generateModels(targetPath, version, addVersionToPath)
  //   await fieldMapGenerator.generateFieldMaps(targetPath, version, addVersionToPath)
  // }
  const metaAllGenerator = new MetaAllGenerator()
  await metaAllGenerator.generateModels(targetPath)
}

// generate('../ubl-model-library/src/ubl', true).then()
generate('/Users/adriantosca/Adi/semanticmart/semanticmart--htmlpdf/src/ubl', true).then()
