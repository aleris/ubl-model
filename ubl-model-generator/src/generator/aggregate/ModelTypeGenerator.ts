import { formatComment } from '../type-gen-utils'
import { AggregateType } from './AggregateType'
import { CodeFile, TypeCodeGenerator } from '../CodeGenerator'
import { ModelFieldGenerator } from './ModelFieldGenerator'

export class ModelTypeGenerator implements TypeCodeGenerator<AggregateType> {

  private readonly aggregateFieldModelCodeGenerator = new ModelFieldGenerator()

  globals(): CodeFile[] {
      return []
  }

  asCodeFiles(aggregateType: AggregateType) {
    const imports = this.aggregateFieldModelCodeGenerator.getImports(aggregateType)
    const code = `${imports}/**${
      formatComment(' * ', aggregateType.documentation.definition)
    }
 */
export interface ${aggregateType.typeName} {
${aggregateType
      .fields
      .map(field => this.aggregateFieldModelCodeGenerator.asCodeString(aggregateType, field))
      .join('\n\n')}
}
`
    return [{
      dirPath: `model/${aggregateType.module}`,
      fileName: `${aggregateType.typeName}.ts`,
      content: code
    }]
  }
}
