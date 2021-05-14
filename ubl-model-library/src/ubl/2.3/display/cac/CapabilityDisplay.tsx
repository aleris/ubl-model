import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Capability } from  '../../model/cac/Capability'
import { CapabilityFieldMeta } from  '../../meta/cac/CapabilityMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import EvidenceSuppliedDisplay from './EvidenceSuppliedDisplay'
import { EvidenceSupplied } from '../../model/cac/EvidenceSupplied'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'
import WebSiteDisplay from './WebSiteDisplay'
import { WebSite } from '../../model/cac/WebSite'

type Props<T> = {
  label: string
  value: Capability
  meta: FieldMeta<T>
}

export default function CapabilityDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-Capability ubl-CapabilityType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-Capability ubl-UBLExtensions"
          meta={CapabilityFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={CapabilityFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Capability ubl-Code ubl-CapabilityTypeCode"
          meta={CapabilityFieldMeta.CapabilityTypeCode} 
          value={value.CapabilityTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Capability Type Code"
              value={itemValue}
              meta={CapabilityFieldMeta.CapabilityTypeCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Capability ubl-Text ubl-Description"
          meta={CapabilityFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={CapabilityFieldMeta.Description}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Capability ubl-Amount ubl-ValueAmount"
          meta={CapabilityFieldMeta.ValueAmount} 
          value={value.ValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Value"
              value={itemValue}
              meta={CapabilityFieldMeta.ValueAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Capability ubl-Quantity ubl-ValueQuantity"
          meta={CapabilityFieldMeta.ValueQuantity} 
          value={value.ValueQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Value Quantity"
              value={itemValue}
              meta={CapabilityFieldMeta.ValueQuantity}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Capability ubl-EvidenceSupplied"
          meta={CapabilityFieldMeta.EvidenceSupplied} 
          value={value.EvidenceSupplied}
          itemDisplay={ (itemValue: EvidenceSupplied, key: string | number) =>
            <EvidenceSuppliedDisplay
              key={key}
              label="Evidence Supplied"
              value={itemValue}
              meta={CapabilityFieldMeta.EvidenceSupplied}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Capability ubl-Period ubl-ValidityPeriod"
          meta={CapabilityFieldMeta.ValidityPeriod} 
          value={value.ValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Validity Period"
              value={itemValue}
              meta={CapabilityFieldMeta.ValidityPeriod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Capability ubl-WebSite"
          meta={CapabilityFieldMeta.WebSite} 
          value={value.WebSite}
          itemDisplay={ (itemValue: WebSite, key: string | number) =>
            <WebSiteDisplay
              key={key}
              label="Web Site"
              value={itemValue}
              meta={CapabilityFieldMeta.WebSite}
            />
          }
        />
        </div>
    </div>
  )
}
