import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "New Equipment Integration Features Released",
      summary: "Latest update brings seamless integration with more fitness equipment brands.",
      date: "March 15, 2024",
      image: "/lovable-uploads/8edda396-e3ea-4832-a6bf-8dca4f919086.png"
    },
    {
      id: 2,
      title: "Mobile App Launch Announcement",
      summary: "Coming soon: Monitor your fitness equipment from anywhere with our new mobile app.",
      date: "March 10, 2024",
      image: "/lovable-uploads/68924b06-6ed9-4fae-9239-8ed67705b5ad.png"
    }
  ];

  return (
    <Card className="bg-gray-800 border-gray-700 p-6">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-white">Latest News</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-gray-700 p-4 rounded-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-white font-medium text-lg mb-2">{item.title}</h3>
              <p className="text-gray-300 mb-2">{item.summary}</p>
              <span className="text-sm text-gray-400">{item.date}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default News;