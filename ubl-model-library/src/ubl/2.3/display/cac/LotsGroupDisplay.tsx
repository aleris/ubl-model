import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { LotsGroup } from  '../../model/cac/LotsGroup'
import { LotsGroupFieldMeta } from  '../../meta/cac/LotsGroupMeta'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import ProcurementProjectLotDisplay from './ProcurementProjectLotDisplay'
import { ProcurementProjectLot } from '../../model/cac/ProcurementProjectLot'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: LotsGroup
  meta: FieldMeta<T>
}

export default function LotsGroupDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-LotsGroup ubl-LotsGroupType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-LotsGroup ubl-UBLExtensions"
          meta={LotsGroupFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={LotsGroupFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-LotsGroup ubl-Identifier ubl-LotLotsGroupID"
          meta={LotsGroupFieldMeta.LotLotsGroupID} 
          value={value.LotLotsGroupID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Lot Lots Group"
              value={itemValue}
              meta={LotsGroupFieldMeta.LotLotsGroupID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-LotsGroup ubl-ProcurementProjectLot"
          meta={LotsGroupFieldMeta.ProcurementProjectLot} 
          value={value.ProcurementProjectLot}
          itemDisplay={ (itemValue: ProcurementProjectLot, key: string | number) =>
            <ProcurementProjectLotDisplay
              key={key}
              label="Procurement Project Lot"
              value={itemValue}
              meta={LotsGroupFieldMeta.ProcurementProjectLot}
            />
          }
        />
        </div>
    </div>
  )
}
