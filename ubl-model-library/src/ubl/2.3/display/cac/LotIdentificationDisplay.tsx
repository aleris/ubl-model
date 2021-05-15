import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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

type Props<T> = {
  label: string
  value: LotIdentification | undefined
  meta: FieldMeta<T>
}

export default function LotIdentificationDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-LotIdentification">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={LotIdentificationFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Lot Number"
            value={value.LotNumberID?.[0]}
            meta={LotIdentificationFieldMeta.LotNumberID}
          />

          <DateDisplay
            label="Expiry Date"
            value={value.ExpiryDate?.[0]}
            meta={LotIdentificationFieldMeta.ExpiryDate}
          />

          <ElementListDisplay
            className="ubl-cac ubl-ItemProperty ubl-AdditionalItemProperty"
            label="Additional Item Property"
            items={value.AdditionalItemProperty}
            meta={LotIdentificationFieldMeta.AdditionalItemProperty} 
            itemDisplay={ (itemValue: ItemProperty, key: string | number) =>
              <ItemPropertyDisplay
                key={key}
                label="Additional Item Property"
                value={itemValue}
                meta={LotIdentificationFieldMeta.AdditionalItemProperty}
              />
            }
          />
        </div>
    </div>
  )
}
