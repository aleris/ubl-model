import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: LotsGroup | undefined
  meta: FieldMeta<T>
}

export default function LotsGroupDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-LotsGroup">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={LotsGroupFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Lot Lots Group"
            value={value.LotLotsGroupID?.[0]}
            meta={LotsGroupFieldMeta.LotLotsGroupID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-ProcurementProjectLot"
            label="Procurement Project Lot"
            items={value.ProcurementProjectLot}
            meta={LotsGroupFieldMeta.ProcurementProjectLot} 
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
