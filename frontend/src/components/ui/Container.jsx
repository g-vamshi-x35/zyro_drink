import clsx from 'clsx'

export default function Container({ as: Tag = 'div', className, children, ...props }) {
  return (
    <Tag className={clsx('mx-auto w-full max-w-[1280px] px-6 lg:px-10', className)} {...props}>
      {children}
    </Tag>
  )
}
