 export const formatDateToDDMMYYYY = (dateString: string): string => {
    const date = new Date(dateString);

    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const year = date.getUTCFullYear();

    return `${day}/${month}/${year}`;
};

 /**
  * Formats a number as currency, rounded to two decimal places.
  * @param value - The amount to format.
  * @param locale - The locale to use (default is 'en-US').
  * @param currency - The currency code (default is 'USD').
  * @returns The formatted currency string.
  * @throws Error if the value is not a number.
  */
 export const formatCurrency = (value: number, locale: string = 'en-US', currency: string = 'USD'): string => {
     if (isNaN(value)) {
         throw new Error('The value must be a valid number.');
     }

     return new Intl.NumberFormat(locale, {
         style: 'currency',
         currency: currency,
         minimumFractionDigits: 2,
         maximumFractionDigits: 2
     }).format(value);
 }