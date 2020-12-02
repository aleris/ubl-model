import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { LotIdentification } from  '../../model/cac/LotIdentification'
import { LotIdentificationFieldMeta } from  '../../meta/cac/LotIdentificationMeta'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import ItemPropertyDisplay from './ItemPropertyDisplay'
import { ItemProperty } from '../../model/cac/ItemProperty'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: LotIdentification
  meta: FieldMeta<T>
}

export default function LotIdentificationDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={LotIdentificationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={LotIdentificationFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LotIdentificationFieldMeta.LotNumberID} 
          value={value.LotNumberID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={LotIdentificationFieldMeta.LotNumberID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LotIdentificationFieldMeta.ExpiryDate} 
          value={value.ExpiryDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={LotIdentificationFieldMeta.ExpiryDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LotIdentificationFieldMeta.AdditionalItemProperty} 
          value={value.AdditionalItemProperty}
          itemDisplay={ (itemValue: ItemProperty, key: string | number) =>
            <ItemPropertyDisplay key={key} meta={LotIdentificationFieldMeta.AdditionalItemProperty} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
