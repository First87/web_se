import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-full flex-1 flex-col items-center justify-center gap-8 bg-background px-4">
      <h1 className="text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
        Hello World
      </h1>
      <Link
        href="/compare"
        className="border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-muted hover:text-foreground"
      >
        ดูการเปรียบเทียบ
      </Link>
    </main>
  );
}
