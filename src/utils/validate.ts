export const isRequiredInvalid = (value: any) => {
    return !value || String(value)?.trim() === '';
};
