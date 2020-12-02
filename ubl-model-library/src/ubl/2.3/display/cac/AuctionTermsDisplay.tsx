import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { AuctionTerms } from  '../../model/cac/AuctionTerms'
import { AuctionTermsFieldMeta } from  '../../meta/cac/AuctionTermsMeta'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: AuctionTerms
  meta: FieldMeta<T>
}

export default function AuctionTermsDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={AuctionTermsFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={AuctionTermsFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AuctionTermsFieldMeta.AuctionConstraintIndicator} 
          value={value.AuctionConstraintIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={AuctionTermsFieldMeta.AuctionConstraintIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AuctionTermsFieldMeta.JustificationDescription} 
          value={value.JustificationDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={AuctionTermsFieldMeta.JustificationDescription} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AuctionTermsFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={AuctionTermsFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AuctionTermsFieldMeta.ProcessDescription} 
          value={value.ProcessDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={AuctionTermsFieldMeta.ProcessDescription} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AuctionTermsFieldMeta.ConditionsDescription} 
          value={value.ConditionsDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={AuctionTermsFieldMeta.ConditionsDescription} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AuctionTermsFieldMeta.ElectronicDeviceDescription} 
          value={value.ElectronicDeviceDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={AuctionTermsFieldMeta.ElectronicDeviceDescription} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AuctionTermsFieldMeta.AuctionURI} 
          value={value.AuctionURI}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={AuctionTermsFieldMeta.AuctionURI} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
