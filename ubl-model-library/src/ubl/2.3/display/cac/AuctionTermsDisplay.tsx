import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: AuctionTerms
  meta: FieldMeta<T>
}

export default function AuctionTermsDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-AuctionTerms ubl-AuctionTermsType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-AuctionTerms ubl-UBLExtensions"
          meta={AuctionTermsFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={AuctionTermsFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AuctionTerms ubl-Indicator ubl-AuctionConstraintIndicator"
          meta={AuctionTermsFieldMeta.AuctionConstraintIndicator} 
          value={value.AuctionConstraintIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Auction Constraint"
              value={itemValue}
              meta={AuctionTermsFieldMeta.AuctionConstraintIndicator}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-AuctionTerms ubl-Text ubl-JustificationDescription"
          meta={AuctionTermsFieldMeta.JustificationDescription} 
          value={value.JustificationDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Justification Description"
              value={itemValue}
              meta={AuctionTermsFieldMeta.JustificationDescription}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-AuctionTerms ubl-Text ubl-Description"
          meta={AuctionTermsFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={AuctionTermsFieldMeta.Description}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-AuctionTerms ubl-Text ubl-ProcessDescription"
          meta={AuctionTermsFieldMeta.ProcessDescription} 
          value={value.ProcessDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Process Description"
              value={itemValue}
              meta={AuctionTermsFieldMeta.ProcessDescription}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-AuctionTerms ubl-Text ubl-ConditionsDescription"
          meta={AuctionTermsFieldMeta.ConditionsDescription} 
          value={value.ConditionsDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Conditions Description"
              value={itemValue}
              meta={AuctionTermsFieldMeta.ConditionsDescription}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-AuctionTerms ubl-Text ubl-ElectronicDeviceDescription"
          meta={AuctionTermsFieldMeta.ElectronicDeviceDescription} 
          value={value.ElectronicDeviceDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Electronic Device Description"
              value={itemValue}
              meta={AuctionTermsFieldMeta.ElectronicDeviceDescription}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AuctionTerms ubl-Identifier ubl-AuctionURI"
          meta={AuctionTermsFieldMeta.AuctionURI} 
          value={value.AuctionURI}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Auction URI"
              value={itemValue}
              meta={AuctionTermsFieldMeta.AuctionURI}
            />
          }
        />
        </div>
    </div>
  )
}
