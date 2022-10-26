import { format } from 'date-fns'

export type TimeProps = React.TimeHTMLAttributes<HTMLElement> & {
  date: Date | number | string
  format?: string
}

const Time = ({
  children,
  date: initialDate,
  format: dateFormat = 'LLLL d, yyyy',
  ...props
}: TimeProps) => {
  const date = new Date(initialDate)
  const dateTime = date.toISOString()
  const title = format(date, `cccc, d MMMM 'at' H:mm:ss`)

  return (
    <time
      dateTime={dateTime}
      title={title}
      {...props}
    >
      {children || format(date, dateFormat)}
    </time>
  )
}

export default Time
