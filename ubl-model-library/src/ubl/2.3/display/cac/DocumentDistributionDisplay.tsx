import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { DocumentDistribution } from  '../../model/cac/DocumentDistribution'
import { DocumentDistributionFieldMeta } from  '../../meta/cac/DocumentDistributionMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: DocumentDistribution
  meta: FieldMeta<T>
}

export default function DocumentDistributionDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={DocumentDistributionFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={DocumentDistributionFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentDistributionFieldMeta.DocumentTypeCode} 
          value={value.DocumentTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={DocumentDistributionFieldMeta.DocumentTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentDistributionFieldMeta.PrintQualifier} 
          value={value.PrintQualifier}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={DocumentDistributionFieldMeta.PrintQualifier} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentDistributionFieldMeta.MaximumCopiesNumeric} 
          value={value.MaximumCopiesNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={DocumentDistributionFieldMeta.MaximumCopiesNumeric} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentDistributionFieldMeta.MaximumOriginalsNumeric} 
          value={value.MaximumOriginalsNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={DocumentDistributionFieldMeta.MaximumOriginalsNumeric} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentDistributionFieldMeta.Party} 
          value={value.Party}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={DocumentDistributionFieldMeta.Party} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
