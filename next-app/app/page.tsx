import Link from "next/link"
import { SearchIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CompetitorSearchForm } from "@/components/competitor-search-form"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Viral Audit
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Discover which trends are driving engagement for your competitors
                </p>
              </div>

              <div className="w-full max-w-md mx-auto">
                <CompetitorSearchForm />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Analyze your competitors' content in three simple steps
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">
                      1
                    </div>
                    <span>Enter a Handle</span>
                  </CardTitle>
                  <CardDescription>Input your competitor's social media handle</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Simply enter any creator's handle (e.g., @TechWithTim) to start analyzing their content strategy.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">
                      2
                    </div>
                    <span>Analyze Content</span>
                  </CardTitle>
                  <CardDescription>We scan their recent posts and videos</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Our algorithm analyzes their recent content to identify trends, hashtags, and content formats.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">
                      3
                    </div>
                    <span>Get Insights</span>
                  </CardTitle>
                  <CardDescription>Discover what's driving their engagement</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    See which trends and content types are generating the most likes, comments, and shares.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center mt-12">
              <Button size="lg" className="gap-2" asChild>
                <Link href="#search">
                  <SearchIcon className="w-4 h-4" />
                  Try It Now
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
