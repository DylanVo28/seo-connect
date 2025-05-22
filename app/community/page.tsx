"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Plus } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useUser } from "@/contexts/UserContext"

type Post = {
  id: string
  urlImg: string | null
  title: string
  content: string
  userId: string
}

export default function CommunityPage() {
  const router = useRouter()
  const { user } = useUser()
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://662dd683a7dda1fa378b6471.mockapi.io/get/AllProducts/Post"
        )
        if (!response.ok) throw new Error("Failed to fetch posts")
        const data = await response.json()
        setPosts(data)
      } catch (error) {
        console.error("Error fetching posts:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [])

  return (
    <div className="max-w-md mx-auto min-h-screen bg-background relative pb-20">
      <Tabs defaultValue="onpage" className="w-full">
        <TabsList className="w-full flex justify-between mb-2">
          <TabsTrigger value="onpage">On-Page</TabsTrigger>
          <TabsTrigger value="offpage">Off-Page</TabsTrigger>
          <TabsTrigger value="technical">Technical</TabsTrigger>
          <TabsTrigger value="general">General</TabsTrigger>
        </TabsList>
        <TabsContent value="onpage">
          <div className="flex flex-col gap-3">
            {isLoading ? (
              <div className="text-center py-4">Loading posts...</div>
            ) : posts.length === 0 ? (
              <div className="text-center py-4">No posts yet</div>
            ) : (
              posts.map((post) => (
                <Card 
                  key={post.id}
                  className="cursor-pointer hover:bg-accent/50 transition-colors"
                  onClick={() => router.push(`/community/${post.id}`)}
                >
                  <CardContent className="flex gap-3 py-3">
                    <Avatar>
                      <AvatarFallback>
                        {post.userId.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-semibold">User {post.userId}</div>
                      {post.title && (
                        <div className="font-medium">{post.title}</div>
                      )}
                      <div className="text-sm text-muted-foreground">
                        {post.content}
                      </div>
                      {post.urlImg && (
                        <div className="mt-2">
                          <img
                            src={post.urlImg}
                            alt={post.title || "Post image"}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col items-end gap-1 text-xs text-muted-foreground">
                      <span>❤️ 0</span>
                      <span>💬 0</span>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </TabsContent>
      </Tabs>
      <Button
        className="rounded-full w-14 h-14 flex items-center justify-center fixed bottom-8 right-8 shadow-lg"
        size="icon"
        onClick={() => router.push("/community/create-post")}
      >
        <Plus size={28} />
      </Button>
    </div>
  )
} 