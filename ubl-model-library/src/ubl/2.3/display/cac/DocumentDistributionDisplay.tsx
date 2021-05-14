import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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

type Props<T> = {
  label: string
  value: DocumentDistribution
  meta: FieldMeta<T>
}

export default function DocumentDistributionDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-DocumentDistribution ubl-DocumentDistributionType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-DocumentDistribution ubl-UBLExtensions"
          meta={DocumentDistributionFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={DocumentDistributionFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DocumentDistribution ubl-Code ubl-DocumentTypeCode"
          meta={DocumentDistributionFieldMeta.DocumentTypeCode} 
          value={value.DocumentTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Document Type Code"
              value={itemValue}
              meta={DocumentDistributionFieldMeta.DocumentTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DocumentDistribution ubl-Text ubl-PrintQualifier"
          meta={DocumentDistributionFieldMeta.PrintQualifier} 
          value={value.PrintQualifier}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Print Qualifier"
              value={itemValue}
              meta={DocumentDistributionFieldMeta.PrintQualifier}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DocumentDistribution ubl-Numeric ubl-MaximumCopiesNumeric"
          meta={DocumentDistributionFieldMeta.MaximumCopiesNumeric} 
          value={value.MaximumCopiesNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Maximum Copies"
              value={itemValue}
              meta={DocumentDistributionFieldMeta.MaximumCopiesNumeric}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DocumentDistribution ubl-Numeric ubl-MaximumOriginalsNumeric"
          meta={DocumentDistributionFieldMeta.MaximumOriginalsNumeric} 
          value={value.MaximumOriginalsNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Maximum Originals"
              value={itemValue}
              meta={DocumentDistributionFieldMeta.MaximumOriginalsNumeric}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-DocumentDistribution ubl-Party"
          meta={DocumentDistributionFieldMeta.Party} 
          value={value.Party}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Party"
              value={itemValue}
              meta={DocumentDistributionFieldMeta.Party}
            />
          }
        />
        </div>
    </div>
  )
}
