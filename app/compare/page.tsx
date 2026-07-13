import Link from "next/link";

const comparisons = [
  {
    name: "GitHub Pages",
    points: [
      "ใช้งานฟรี ไม่มีค่าใช้จ่าย",
      "ผูกกับ GitHub repository โดยตรง",
      "เหมาะกับเว็บ static (HTML/CSS/JS)",
      "deploy ผ่าน Git หรือ GitHub Actions",
      "ไม่รองรับ server-side / serverless โดยตรง",
    ],
  },
  {
    name: "Vercel",
    points: [
      "deploy อัตโนมัติเมื่อ push โค้ด",
      "รองรับ framework สมัยใหม่ เช่น Next.js",
      "มี Serverless Functions / Edge Functions",
      "มี Preview URL สำหรับแต่ละ branch/PR",
      "ฟรีสำหรับ personal project (Hobby plan)",
    ],
  },
];

const reasons = [
  "Deploy อัตโนมัติเมื่อ push ขึ้น GitHub",
  "รองรับ framework สมัยใหม่ เช่น Next.js",
  "มี Preview URL ให้ทดสอบก่อนขึ้น production",
  "ใช้ฟรีสำหรับ personal project",
  "รองรับทั้ง static และ serverless ได้ในที่เดียว",
];

export default function ComparePage() {
  return (
    <div className="flex flex-1 flex-col bg-background text-foreground">
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-5 py-10 sm:px-6 sm:py-14">
        <Link
          href="/"
          className="mb-10 w-fit text-sm text-muted transition-colors hover:text-foreground"
        >
          ← กลับหน้าแรก
        </Link>

        <section className="mb-12 sm:mb-14">
          <h1 className="mb-8 text-xl font-medium tracking-tight text-foreground sm:text-2xl">
            เปรียบเทียบเทคโนโลยี Server
          </h1>

          <div className="grid gap-px bg-border sm:grid-cols-2">
            {comparisons.map((item) => (
              <article key={item.name} className="bg-background p-5 sm:p-6">
                <h2 className="mb-4 text-sm font-medium text-foreground">
                  {item.name}
                </h2>
                <ul className="space-y-2 text-sm leading-relaxed text-muted">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-5 text-xl font-medium tracking-tight text-foreground sm:text-2xl">
            บริการที่เลือกใช้ Vercel
          </h2>
          <ul className="space-y-2.5 border-t border-border pt-5 text-sm leading-relaxed text-muted">
            {reasons.map((reason) => (
              <li key={reason}>{reason}</li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="border-t border-border py-5 text-center text-xs text-muted">
        <p>นายอภิสิทธิ์ ปัญญา รหัสนักศึกษา 6401025453</p>
        <p className="mt-1">สาขาวิศวกรรมซอฟต์แวร์ และระบบสารสนเทศ</p>
        <p className="mt-1">สถาบันเทคโนโลยีปทุมวัน</p>
      </footer>
    </div>
  );
}
