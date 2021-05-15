import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { GoodsItemPassportCounterfoil } from  '../../model/cac/GoodsItemPassportCounterfoil'
import { GoodsItemPassportCounterfoilFieldMeta } from  '../../meta/cac/GoodsItemPassportCounterfoilMeta'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DocumentReferenceDisplay from './DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import GoodsItemDisplay from './GoodsItemDisplay'
import { GoodsItem } from '../../model/cac/GoodsItem'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import LocationDisplay from './LocationDisplay'
import { Location } from '../../model/cac/Location'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: GoodsItemPassportCounterfoil | undefined
  meta: FieldMeta<T>
}

export default function GoodsItemPassportCounterfoilDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-GoodsItemPassportCounterfoil">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={GoodsItemPassportCounterfoilFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={GoodsItemPassportCounterfoilFieldMeta.ID}
          />

          <IdentifierDisplay
            label="Goods Item Passport Identifier"
            value={value.GoodsItemPassportID?.[0]}
            meta={GoodsItemPassportCounterfoilFieldMeta.GoodsItemPassportID}
          />

          <DateDisplay
            label="Final Reexportation Date"
            value={value.FinalReexportationDate?.[0]}
            meta={GoodsItemPassportCounterfoilFieldMeta.FinalReexportationDate}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={GoodsItemPassportCounterfoilFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={GoodsItemPassportCounterfoilFieldMeta.Note}
              />
            }
          />

          <LocationDisplay
            label="Customs Office Location"
            value={value.CustomsOfficeLocation?.[0]}
            meta={GoodsItemPassportCounterfoilFieldMeta.CustomsOfficeLocation}
          />

          <GoodsItemDisplay
            label="Goods Item"
            value={value.GoodsItem?.[0]}
            meta={GoodsItemPassportCounterfoilFieldMeta.GoodsItem}
          />

          <ElementListDisplay
            className="ubl-cac ubl-DocumentReference ubl-ExportationDocumentReference"
            label="Exportation Document Reference"
            items={value.ExportationDocumentReference}
            meta={GoodsItemPassportCounterfoilFieldMeta.ExportationDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Exportation Document Reference"
                value={itemValue}
                meta={GoodsItemPassportCounterfoilFieldMeta.ExportationDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-DocumentReference ubl-ImportationDocumentReference"
            label="Importation Document Reference"
            items={value.ImportationDocumentReference}
            meta={GoodsItemPassportCounterfoilFieldMeta.ImportationDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Importation Document Reference"
                value={itemValue}
                meta={GoodsItemPassportCounterfoilFieldMeta.ImportationDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-DocumentReference ubl-ReexportationDocumentReference"
            label="Reexportation Document Reference"
            items={value.ReexportationDocumentReference}
            meta={GoodsItemPassportCounterfoilFieldMeta.ReexportationDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Reexportation Document Reference"
                value={itemValue}
                meta={GoodsItemPassportCounterfoilFieldMeta.ReexportationDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-DocumentReference ubl-ReimportationDocumentReference"
            label="Reimportation Document Reference"
            items={value.ReimportationDocumentReference}
            meta={GoodsItemPassportCounterfoilFieldMeta.ReimportationDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Reimportation Document Reference"
                value={itemValue}
                meta={GoodsItemPassportCounterfoilFieldMeta.ReimportationDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-DocumentReference ubl-VoucherDocumentReference"
            label="Voucher Document Reference"
            items={value.VoucherDocumentReference}
            meta={GoodsItemPassportCounterfoilFieldMeta.VoucherDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Voucher Document Reference"
                value={itemValue}
                meta={GoodsItemPassportCounterfoilFieldMeta.VoucherDocumentReference}
              />
            }
          />
        </div>
    </div>
  )
}
