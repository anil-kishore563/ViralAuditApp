"use client"

import { useEffect, useState } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { analyzeCompetitor } from "@/lib/analyze-competitor"

interface CompetitorResultsProps {
  handle: string
  platform: string
  type: "trends" | "hashtags" | "formats"
}

export function CompetitorResults({ handle, platform, type }: CompetitorResultsProps) {
  const [results, setResults] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        // In a real app, this would call an API endpoint
        const data = await analyzeCompetitor(handle, platform, type)
        setResults(data)
      } catch (error) {
        console.error("Error fetching results:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [handle, platform, type])

  if (isLoading) {
    return <div>Loading analysis...</div>
  }

  if (!results.length) {
    return <div>No data available for this competitor.</div>
  }

  // Find the highest engagement value for percentage calculations
  const maxEngagement = Math.max(...results.map((item) => item.engagement))

  return (
    <div className="space-y-8">
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={results} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              formatter={(value, name) => [
                `${value.toLocaleString()} ${name === "engagement" ? "interactions" : name}`,
                "Engagement",
              ]}
            />
            <Bar dataKey="engagement" name="Engagement" radius={[4, 4, 0, 0]}>
              {results.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getColorByIndex(index)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Rank</TableHead>
            <TableHead>{getColumnTitle(type)}</TableHead>
            <TableHead>Engagement</TableHead>
            <TableHead>Performance</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {results.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>
                {type === "hashtags" ? <Badge variant="secondary">#{item.name}</Badge> : item.name}
                {item.example && <div className="text-xs text-gray-500 mt-1">Example: "{item.example}"</div>}
              </TableCell>
              <TableCell>{item.engagement.toLocaleString()}</TableCell>
              <TableCell className="w-[200px]">
                <div className="flex items-center gap-2">
                  <Progress value={(item.engagement / maxEngagement) * 100} className="h-2" />
                  <span className="text-xs font-medium">{Math.round((item.engagement / maxEngagement) * 100)}%</span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

function getColumnTitle(type: string): string {
  switch (type) {
    case "trends":
      return "Trend"
    case "hashtags":
      return "Hashtag"
    case "formats":
      return "Content Format"
    default:
      return "Item"
  }
}

function getColorByIndex(index: number): string {
  const colors = [
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#ff8042",
    "#0088fe",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#a4de6c",
    "#d0ed57",
  ]
  return colors[index % colors.length]
}
