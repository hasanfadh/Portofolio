import "./globals.css";

export const metadata = {
  title: "Hasan Fadhlurrahman | Portofolio",
  description: "Portofolio pribadi Hasan Fadhlurrahman — menampilkan karya, pengalaman, dan kontak.",
  manifest: "/manifest.json",
  icons: {
    icon: "/star.png",
    shortcut: "/star.png",
    apple: "/star.png",
  },
  themeColor: "#16a34a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        {/* SEO + PWA support */}
        <meta name="robots" content="index, follow" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/star.png" />
        <meta name="theme-color" content="#16a34a" />
      </head>

      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "#000000",
          color: "#ffffff",
          fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          overflowX: "hidden",
        }}
      >
        {children}
      </body>
    </html>
  );
}
