let translations = {}
translations['en'] = {
  billingAddressRequired: 'Billing address is required',
  billingAddressStreet: 'Street',
  billingAddressHouseNumber: 'House Number',
  billingAddressCity: 'City',
  billingAddressZip: 'Zip',
  billingAddressState: 'State',
  billingAddressCountry: 'Country',
  billingAddressDistrict: 'District',
  billingAddressAdditional: 'Additional Information',
}

translations['es'] = {
  billingAddressRequired: 'Se requiere la dirección de facturación',
  billingAddressStreet: 'Calle',
  billingAddressHouseNumber: 'Número de casa',
  billingAddressCity: 'Ciudad',
  billingAddressZip: 'Código postal',
  billingAddressState: 'Estado',
  billingAddressCountry: 'País',
  billingAddressDistrict: 'Distrito',
  billingAddressAdditional: 'Información adicional',
}

translations['pt'] = {
  billingAddressRequired: 'Billing address is required',
  billingAddressStreet: 'Street',
  billingAddressHouseNumber: 'HouseNumber',
  billingAddressCity: 'City',
  billingAddressZip: 'Zip',
  billingAddressState: 'State',
  billingAddressCountry: 'Country',
  billingAddressDistrict: 'District',
  billingAddressAdditional: 'Additional',
}


class SDK_i18n {
  static get_label(locale, label) {
    const allowed_locales = ['en', 'es', 'pt']
    locale = !allowed_locales.includes(locale) ? 'en' : locale
    return translations[locale][label] || label
  }
}
