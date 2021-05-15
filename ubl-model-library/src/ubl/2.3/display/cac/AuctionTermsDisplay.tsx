import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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

type Props<T> = {
  label: string
  value: AuctionTerms | undefined
  meta: FieldMeta<T>
}

export default function AuctionTermsDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-AuctionTerms">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={AuctionTermsFieldMeta.UBLExtensions}
          />

          <IndicatorDisplay
            label="Auction Constraint"
            value={value.AuctionConstraintIndicator?.[0]}
            meta={AuctionTermsFieldMeta.AuctionConstraintIndicator}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-JustificationDescription"
            label="Justification Description"
            items={value.JustificationDescription}
            meta={AuctionTermsFieldMeta.JustificationDescription} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Justification Description"
                value={itemValue}
                meta={AuctionTermsFieldMeta.JustificationDescription}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={AuctionTermsFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={AuctionTermsFieldMeta.Description}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-ProcessDescription"
            label="Process Description"
            items={value.ProcessDescription}
            meta={AuctionTermsFieldMeta.ProcessDescription} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Process Description"
                value={itemValue}
                meta={AuctionTermsFieldMeta.ProcessDescription}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-ConditionsDescription"
            label="Conditions Description"
            items={value.ConditionsDescription}
            meta={AuctionTermsFieldMeta.ConditionsDescription} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Conditions Description"
                value={itemValue}
                meta={AuctionTermsFieldMeta.ConditionsDescription}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-ElectronicDeviceDescription"
            label="Electronic Device Description"
            items={value.ElectronicDeviceDescription}
            meta={AuctionTermsFieldMeta.ElectronicDeviceDescription} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Electronic Device Description"
                value={itemValue}
                meta={AuctionTermsFieldMeta.ElectronicDeviceDescription}
              />
            }
          />

          <IdentifierDisplay
            label="Auction URI"
            value={value.AuctionURI?.[0]}
            meta={AuctionTermsFieldMeta.AuctionURI}
          />
        </div>
    </div>
  )
}
