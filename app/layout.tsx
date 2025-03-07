import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html>
      <body>
        <main>
          <nav>
            <Link href="/">Home</Link>
          </nav>

          <nav>
            <Link href="/notes">Notes</Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
