import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "The Future of Fitness Technology",
      date: "March 15, 2024",
      summary: "Explore how AI and IoT are transforming the fitness industry",
      image: "/lovable-uploads/8edda396-e3ea-4832-a6bf-8dca4f919086.png"
    },
    {
      id: 2,
      title: "Maximizing Gym Equipment Efficiency",
      date: "March 10, 2024",
      summary: "Learn how to optimize your equipment usage and maintenance",
      image: "/lovable-uploads/68924b06-6ed9-4fae-9239-8ed67705b5ad.png"
    },
    {
      id: 3,
      title: "Data-Driven Fitness Management",
      date: "March 5, 2024",
      summary: "Leveraging analytics to improve member experience",
      image: "/lovable-uploads/58e65cd8-c435-42a0-ae58-319603bffafb.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white p-6">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
          Blog
        </h1>
        <p className="text-lg text-gray-300">Latest insights and updates from Smart Fitness Hub</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Card key={post.id} className="bg-gradient-to-br from-blue-900 to-purple-900 border-none shadow-xl">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-t-lg" />
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {post.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">{post.summary}</p>
              <p className="text-sm text-gray-400">{post.date}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blog;