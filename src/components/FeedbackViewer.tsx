import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FeedbackViewer = () => {
  const feedbacks = [
    {
      id: 1,
      user: "John Doe",
      rating: 5,
      comment: "Great equipment and tracking features!",
      date: "2024-03-15"
    },
    {
      id: 2,
      user: "Sarah Smith",
      rating: 4,
      comment: "Very intuitive interface, would recommend.",
      date: "2024-03-14"
    },
    {
      id: 3,
      user: "Mike Johnson",
      rating: 5,
      comment: "The analytics features are incredibly helpful.",
      date: "2024-03-13"
    }
  ];

  return (
    <Card className="bg-gray-800 border-gray-700 p-6">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-white">Latest Feedback</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {feedbacks.map((feedback) => (
            <div key={feedback.id} className="bg-gray-700 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-medium">{feedback.user}</span>
                <div className="flex items-center">
                  {Array.from({ length: feedback.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-300">{feedback.comment}</p>
              <span className="text-sm text-gray-400">{feedback.date}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FeedbackViewer;