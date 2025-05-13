import { Suspense } from "react"
import Link from "next/link"
import { ArrowLeft, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"
import { CompetitorResults } from "@/components/competitor-results"
import { CompetitorSearchForm } from "@/components/competitor-search-form"

export default function ResultsPage({
  searchParams,
}: {
  searchParams: { handle: string; platform: string }
}) {
  const { handle, platform } = searchParams

  if (!handle) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h1 className="text-3xl font-bold">No Handle Provided</h1>
          <p className="text-gray-500">Please provide a competitor's handle to analyze.</p>
          <Button asChild>
            <Link href="/">Go Back Home</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Button variant="ghost" asChild className="mb-4">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Competitor Analysis</h1>
            <p className="text-gray-500">
              Analyzing trends for <span className="font-medium">@{handle}</span> on {getPlatformName(platform)}
            </p>
          </div>

          <div className="w-full md:w-auto">
            <CompetitorSearchForm />
          </div>
        </div>
      </div>

      <Tabs defaultValue="trends">
        <TabsList className="mb-4">
          <TabsTrigger value="trends">Trending Content</TabsTrigger>
          <TabsTrigger value="hashtags">Top Hashtags</TabsTrigger>
          <TabsTrigger value="formats">Content Formats</TabsTrigger>
        </TabsList>

        <TabsContent value="trends">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Top Performing Trends
              </CardTitle>
              <CardDescription>The trends that are driving the most engagement for @{handle}</CardDescription>
            </CardHeader>
            <CardContent>
              <Suspense fallback={<ResultsSkeleton />}>
                <CompetitorResults handle={handle} platform={platform} type="trends" />
              </Suspense>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="hashtags">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Most Effective Hashtags
              </CardTitle>
              <CardDescription>Hashtags that are generating the highest engagement</CardDescription>
            </CardHeader>
            <CardContent>
              <Suspense fallback={<ResultsSkeleton />}>
                <CompetitorResults handle={handle} platform={platform} type="hashtags" />
              </Suspense>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="formats">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Top Content Formats
              </CardTitle>
              <CardDescription>The types of content that perform best</CardDescription>
            </CardHeader>
            <CardContent>
              <Suspense fallback={<ResultsSkeleton />}>
                <CompetitorResults handle={handle} platform={platform} type="formats" />
              </Suspense>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function ResultsSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex items-center gap-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2 flex-1">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
          <Skeleton className="h-8 w-24" />
        </div>
      ))}
    </div>
  )
}

function getPlatformName(platform: string): string {
  const platforms: Record<string, string> = {
    twitter: "Twitter/X",
    tiktok: "TikTok",
    instagram: "Instagram",
    youtube: "YouTube",
  }

  return platforms[platform] || platform
}
