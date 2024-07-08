import GlobalNavBar from "@/components/global/GlobalNavbar";

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col">
      <GlobalNavBar />

      <div className="overflow-hidden bg-transparent w-full">Hello</div>
    </main>
  );
}
