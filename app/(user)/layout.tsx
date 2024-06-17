import Banner from "@/components/Banner";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <Header />
        <Banner />
        {children}
      </body>
    </html>
  );
}
