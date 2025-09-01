import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { MainContent } from "@/components/main-content"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="mx-auto max-w-7xl px-3 md:px-3 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.4fr_0.6fr] gap-8 md:gap-12 lg:gap-16">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </div>
  )
}
