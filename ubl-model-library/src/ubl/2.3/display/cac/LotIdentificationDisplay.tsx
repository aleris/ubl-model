import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: LotIdentification
  meta: FieldMeta<T>
}

export default function LotIdentificationDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-LotIdentification ubl-LotIdentificationType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-LotIdentification ubl-UBLExtensions"
          meta={LotIdentificationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={LotIdentificationFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-LotIdentification ubl-Identifier ubl-LotNumberID"
          meta={LotIdentificationFieldMeta.LotNumberID} 
          value={value.LotNumberID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Lot Number"
              value={itemValue}
              meta={LotIdentificationFieldMeta.LotNumberID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-LotIdentification ubl-Date ubl-ExpiryDate"
          meta={LotIdentificationFieldMeta.ExpiryDate} 
          value={value.ExpiryDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Expiry Date"
              value={itemValue}
              meta={LotIdentificationFieldMeta.ExpiryDate}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-LotIdentification ubl-ItemProperty ubl-AdditionalItemProperty"
          meta={LotIdentificationFieldMeta.AdditionalItemProperty} 
          value={value.AdditionalItemProperty}
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
