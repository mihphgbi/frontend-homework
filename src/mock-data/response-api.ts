export const mockApiCall = async (values: any, status: number, code: string, errorMsg?: string) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: {values},
                status,
                code,
                errorMsg
            });
        }, 1000);
    });
};