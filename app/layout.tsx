import "./styles.css";

export const metadata = {
  title: "oMid Guftall — Software developer",
  description:
    "The personal website of oMid Guftall: software developer, builder, and lifelong learner.",
  metadataBase: new URL("https://guftall.ir"),
  openGraph: {
    title: "oMid Guftall — Software developer",
    description: "Thoughtful software, built with curiosity.",
    url: "https://guftall.ir",
    siteName: "guftall.ir",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
