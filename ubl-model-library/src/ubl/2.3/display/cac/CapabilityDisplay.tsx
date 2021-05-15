import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: Capability | undefined
  meta: FieldMeta<T>
}

export default function CapabilityDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-Capability">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={CapabilityFieldMeta.UBLExtensions}
          />

          <CodeDisplay
            label="Capability Type Code"
            value={value.CapabilityTypeCode?.[0]}
            meta={CapabilityFieldMeta.CapabilityTypeCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={CapabilityFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={CapabilityFieldMeta.Description}
              />
            }
          />

          <AmountDisplay
            label="Value"
            value={value.ValueAmount?.[0]}
            meta={CapabilityFieldMeta.ValueAmount}
          />

          <QuantityDisplay
            label="Value Quantity"
            value={value.ValueQuantity?.[0]}
            meta={CapabilityFieldMeta.ValueQuantity}
          />

          <ElementListDisplay
            className="ubl-cac ubl-EvidenceSupplied"
            label="Evidence Supplied"
            items={value.EvidenceSupplied}
            meta={CapabilityFieldMeta.EvidenceSupplied} 
            itemDisplay={ (itemValue: EvidenceSupplied, key: string | number) =>
              <EvidenceSuppliedDisplay
                key={key}
                label="Evidence Supplied"
                value={itemValue}
                meta={CapabilityFieldMeta.EvidenceSupplied}
              />
            }
          />

          <PeriodDisplay
            label="Validity Period"
            value={value.ValidityPeriod?.[0]}
            meta={CapabilityFieldMeta.ValidityPeriod}
          />

          <WebSiteDisplay
            label="Web Site"
            value={value.WebSite?.[0]}
            meta={CapabilityFieldMeta.WebSite}
          />
        </div>
    </div>
  )
}
