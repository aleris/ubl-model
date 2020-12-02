import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: Capability
  meta: FieldMeta<T>
}

export default function CapabilityDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={CapabilityFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={CapabilityFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CapabilityFieldMeta.CapabilityTypeCode} 
          value={value.CapabilityTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={CapabilityFieldMeta.CapabilityTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CapabilityFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={CapabilityFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CapabilityFieldMeta.ValueAmount} 
          value={value.ValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={CapabilityFieldMeta.ValueAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CapabilityFieldMeta.ValueQuantity} 
          value={value.ValueQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={CapabilityFieldMeta.ValueQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CapabilityFieldMeta.EvidenceSupplied} 
          value={value.EvidenceSupplied}
          itemDisplay={ (itemValue: EvidenceSupplied, key: string | number) =>
            <EvidenceSuppliedDisplay key={key} meta={CapabilityFieldMeta.EvidenceSupplied} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CapabilityFieldMeta.ValidityPeriod} 
          value={value.ValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={CapabilityFieldMeta.ValidityPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CapabilityFieldMeta.WebSite} 
          value={value.WebSite}
          itemDisplay={ (itemValue: WebSite, key: string | number) =>
            <WebSiteDisplay key={key} meta={CapabilityFieldMeta.WebSite} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
