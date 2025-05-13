"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { SearchIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"

export function CompetitorSearchForm() {
  const router = useRouter()
  const [handle, setHandle] = useState("")
  const [platform, setPlatform] = useState("twitter")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!handle) {
      toast({
        title: "Please enter a handle",
        description: "You need to provide a competitor's handle to analyze.",
        variant: "destructive",
      })
      return
    }

    // Remove @ symbol if included
    const cleanHandle = handle.startsWith("@") ? handle.substring(1) : handle

    setIsLoading(true)

    try {
      // Navigate to results page with the handle as a query parameter
      router.push(`/results?handle=${cleanHandle}&platform=${platform}`)
    } catch (error) {
      console.error("Error:", error)
      toast({
        title: "Something went wrong",
        description: "There was an error analyzing this account. Please try again.",
        variant: "destructive",
      })
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" id="search">
      <div className="space-y-2">
        <Label htmlFor="platform">Platform</Label>
        <Select value={platform} onValueChange={setPlatform}>
          <SelectTrigger>
            <SelectValue placeholder="Select platform" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="twitter">Twitter/X</SelectItem>
            <SelectItem value="tiktok">TikTok</SelectItem>
            <SelectItem value="instagram">Instagram</SelectItem>
            <SelectItem value="youtube">YouTube</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="handle">Competitor's Handle</Label>
        <div className="flex gap-2">
          <Input
            id="handle"
            placeholder="@TechWithTim"
            value={handle}
            onChange={(e) => setHandle(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              "Analyzing..."
            ) : (
              <>
                <SearchIcon className="mr-2 h-4 w-4" />
                Analyze
              </>
            )}
          </Button>
        </div>
      </div>
    </form>
  )
}
