import dayjs from 'dayjs';

export const formatDate = (date) => date.split(`.`).reverse().join(`.`).replaceAll(`.`, `-`);

export const isToday = (date) => date === dayjs().format(`DD.MM.YYYY`);
