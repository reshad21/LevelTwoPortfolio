import Container from "@/components/UI/Container";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-[#020617] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] min-h-screen">
      {/* <Navbar /> */}
      <Container>{children}</Container>
    </div>
  );
}
