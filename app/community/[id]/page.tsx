"use client"

import { useEffect, useState, use } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useUser } from "@/contexts/UserContext"

type Post = {
  id: string
  urlImg: string | null
  title: string
  content: string
  userId: string
}

async function getPost(id: string) {
  const response = await fetch(
    `https://662dd683a7dda1fa378b6471.mockapi.io/get/AllProducts/Post/${id}`
  )
  if (!response.ok) throw new Error("Failed to fetch post")
  return response.json()
}

export default function PostDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const router = useRouter()
  const { user } = useUser()
  const { id } = use(params)
  const [post, setPost] = useState<Post | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await getPost(id)
        setPost(data)
        setError(null)
      } catch (error) {
        console.error("Error fetching post:", error)
        setError("Failed to load post")
      } finally {
        setIsLoading(false)
      }
    }

    fetchPost()
  }, [id])

  if (isLoading) {
    return (
      <div className="max-w-md mx-auto min-h-screen bg-background p-4">
        <div className="text-center py-4">Loading post...</div>
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="max-w-md mx-auto min-h-screen bg-background p-4">
        <Button
          variant="ghost"
          className="mb-4"
          onClick={() => router.back()}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <div className="text-center py-4 text-destructive">
          {error || "Post not found"}
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto min-h-screen bg-background p-4">
      <Button
        variant="ghost"
        className="mb-4"
        onClick={() => router.back()}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <Avatar>
              <AvatarFallback>
                {post.userId.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold">User {post.userId}</div>
              {post.title && (
                <CardTitle className="text-lg mt-1">{post.title}</CardTitle>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-muted-foreground mb-4">
            {post.content}
          </div>
          {post.urlImg && (
            <div className="mt-4">
              <img
                src={post.urlImg}
                alt={post.title || "Post image"}
                className="w-full rounded-lg"
              />
            </div>
          )}
          <div className="flex gap-4 mt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <span>❤️</span>
              <span>0</span>
            </div>
            <div className="flex items-center gap-1">
              <span>💬</span>
              <span>0</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 