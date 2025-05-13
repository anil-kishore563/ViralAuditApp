import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl">Viral Audit</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Features
            </Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Pricing
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                    Home
                  </Link>
                  <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
                    Features
                  </Link>
                  <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
                    Pricing
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
    </header>
  )
}
