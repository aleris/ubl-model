import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: GoodsItemPassportCounterfoil
  meta: FieldMeta<T>
}

export default function GoodsItemPassportCounterfoilDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-GoodsItemPassportCounterfoil ubl-GoodsItemPassportCounterfoilType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-GoodsItemPassportCounterfoil ubl-UBLExtensions"
          meta={GoodsItemPassportCounterfoilFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={GoodsItemPassportCounterfoilFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsItemPassportCounterfoil ubl-Identifier ubl-ID"
          meta={GoodsItemPassportCounterfoilFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={GoodsItemPassportCounterfoilFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsItemPassportCounterfoil ubl-Identifier ubl-GoodsItemPassportID"
          meta={GoodsItemPassportCounterfoilFieldMeta.GoodsItemPassportID} 
          value={value.GoodsItemPassportID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Goods Item Passport Identifier"
              value={itemValue}
              meta={GoodsItemPassportCounterfoilFieldMeta.GoodsItemPassportID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsItemPassportCounterfoil ubl-Date ubl-FinalReexportationDate"
          meta={GoodsItemPassportCounterfoilFieldMeta.FinalReexportationDate} 
          value={value.FinalReexportationDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Final Reexportation Date"
              value={itemValue}
              meta={GoodsItemPassportCounterfoilFieldMeta.FinalReexportationDate}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-GoodsItemPassportCounterfoil ubl-Text ubl-Note"
          meta={GoodsItemPassportCounterfoilFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={GoodsItemPassportCounterfoilFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-GoodsItemPassportCounterfoil ubl-Location ubl-CustomsOfficeLocation"
          meta={GoodsItemPassportCounterfoilFieldMeta.CustomsOfficeLocation} 
          value={value.CustomsOfficeLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay
              key={key}
              label="Customs Office Location"
              value={itemValue}
              meta={GoodsItemPassportCounterfoilFieldMeta.CustomsOfficeLocation}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-GoodsItemPassportCounterfoil ubl-GoodsItem"
          meta={GoodsItemPassportCounterfoilFieldMeta.GoodsItem} 
          value={value.GoodsItem}
          itemDisplay={ (itemValue: GoodsItem, key: string | number) =>
            <GoodsItemDisplay
              key={key}
              label="Goods Item"
              value={itemValue}
              meta={GoodsItemPassportCounterfoilFieldMeta.GoodsItem}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-GoodsItemPassportCounterfoil ubl-DocumentReference ubl-ExportationDocumentReference"
          meta={GoodsItemPassportCounterfoilFieldMeta.ExportationDocumentReference} 
          value={value.ExportationDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Exportation Document Reference"
              value={itemValue}
              meta={GoodsItemPassportCounterfoilFieldMeta.ExportationDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-GoodsItemPassportCounterfoil ubl-DocumentReference ubl-ImportationDocumentReference"
          meta={GoodsItemPassportCounterfoilFieldMeta.ImportationDocumentReference} 
          value={value.ImportationDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Importation Document Reference"
              value={itemValue}
              meta={GoodsItemPassportCounterfoilFieldMeta.ImportationDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-GoodsItemPassportCounterfoil ubl-DocumentReference ubl-ReexportationDocumentReference"
          meta={GoodsItemPassportCounterfoilFieldMeta.ReexportationDocumentReference} 
          value={value.ReexportationDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Reexportation Document Reference"
              value={itemValue}
              meta={GoodsItemPassportCounterfoilFieldMeta.ReexportationDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-GoodsItemPassportCounterfoil ubl-DocumentReference ubl-ReimportationDocumentReference"
          meta={GoodsItemPassportCounterfoilFieldMeta.ReimportationDocumentReference} 
          value={value.ReimportationDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Reimportation Document Reference"
              value={itemValue}
              meta={GoodsItemPassportCounterfoilFieldMeta.ReimportationDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-GoodsItemPassportCounterfoil ubl-DocumentReference ubl-VoucherDocumentReference"
          meta={GoodsItemPassportCounterfoilFieldMeta.VoucherDocumentReference} 
          value={value.VoucherDocumentReference}
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
