import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[85vh] items-center bg-ink pb-24 pt-44 text-paper">
      <Container className="flex flex-col items-center gap-7 text-center">
        <span className="text-[12px] font-semibold uppercase tracking-[0.24em] text-gold">Page not found</span>
        <h1 className="m-0 max-w-4xl font-display text-display-1 font-extrabold uppercase">
          That shot <span className="accent accent-gradient">didn&apos;t</span> make the final cut
        </h1>
        <p className="m-0 max-w-md text-lg text-mist">The page you were looking for isn&apos;t here. Let&apos;s get you back to set.</p>
        <Button href="/">Back to home</Button>
      </Container>
    </section>
  );
}
