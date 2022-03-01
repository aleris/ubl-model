import { TypeMeta, UblModule } from '../Meta'

export const AmountTypeMeta: TypeMeta = {
  name: 'Amount',
  label: 'Amount',
  typeName: 'Amount',
  module: UblModule.cbc,
  definition: 'A number of monetary units specified in a currency where the unit of the currency is explicit or implied.',
}
