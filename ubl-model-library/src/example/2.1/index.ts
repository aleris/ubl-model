import fs from 'fs'
import { Invoice } from '../../ubl-model/2.1/doc/Invoice'

export function example21() {
    console.log('Example with UBL JSON version 2.1 model')
    const json = JSON.parse(fs.readFileSync(`./src/example/2.1/UBL-Invoice-2.1-Example.json`, 'utf8'))
    const model = json['Invoice'][0] as Invoice
    console.log('ID:', model.ID?.[0]?.IdentifierContent)
    console.log('Accounting Supplier Name:', model.AccountingSupplierParty?.[0]?.Party?.[0]?.PartyName?.[0]?.Name?.[0].TextContent)
    console.log('Payable Amount:', model.LegalMonetaryTotal?.[0].PayableAmount?.[0].AmountContent)
    console.log('Invoice Line 5 / Item Name:', model.InvoiceLine?.[4]?.Item?.[0]?.Name?.[0].TextContent)
    console.log('Due Date (undefined):', model.DueDate?.[0]?.DateContent)
}
