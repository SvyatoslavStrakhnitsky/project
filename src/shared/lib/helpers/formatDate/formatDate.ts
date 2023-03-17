type FormatDateType = 'fullDate' 


export const formatDate = (date?: Date | string, type?: FormatDateType) => {
    if (!date) return;

    const rawDate = new Date(date);

    switch(type) {
        case 'fullDate':
            return `${rawDate.getDate()}/${rawDate.getMonth()}/${rawDate.getFullYear()}`;

        default:
            return `${rawDate.getDate()}/${rawDate.getMonth()}/${rawDate.getFullYear()}`; 
    }
};