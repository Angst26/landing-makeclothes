import './globals.scss';

export const metadata = {
  title: 'Производство мерча и одежды — Делаем вещи',
  description: 'Производство одежды для брендов и корпоративного мерча под ключ',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
