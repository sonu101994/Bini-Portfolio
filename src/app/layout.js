import "./globals.css";

export const metadata = {
  title: "Bhawani Singh | Full Stack Developer",
  description: "Modern Full Stack Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}