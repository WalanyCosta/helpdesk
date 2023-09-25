export const getDateAndHoursFormated = (date: Date): string => {
  const dateTimeFormat = new Intl.DateTimeFormat('pt-br', { dateStyle: 'short' })
  const dateFormated = dateTimeFormat.format(date)
  return `${dateFormated} às ${date.getHours()}h`
}
