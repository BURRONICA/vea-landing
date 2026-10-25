export const metadata = {
  title: 'VEA+ Landing Page',
  description: 'La solución inteligente B2B para tu óptica',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
