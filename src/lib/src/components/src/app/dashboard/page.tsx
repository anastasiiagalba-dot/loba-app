import BottomNav from "@/components/BottomNav";

export default function DashboardPage() {
      return (
            <div className="pb-20 px-4 pt-6">
                      <h1 className="text-2xl font-bold text-purple-800 mb-4">Welcome to LOBA</h1>
                            <p className="text-gray-600 mb-6">Your wellness companion by Feral Madre</p>
                                  <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-purple-50 rounded-xl p-4"><h3 className="font-semibold text-purple-700">Habits</h3><p className="text-sm text-gray-500">Track daily</p></div>
                                                    <div className="bg-pink-50 rounded-xl p-4"><h3 className="font-semibold text-pink-700">Mood</h3><p className="text-sm text-gray-500">Log feelings</p></div>
                                                            <div className="bg-blue-50 rounded-xl p-4"><h3 className="font-semibold text-blue-700">Journal</h3><p className="text-sm text-gray-500">Write thoughts</p></div>
                                                                    <div className="bg-green-50 rounded-xl p-4"><h3 className="font-semibold text-green-700">Profile</h3><p className="text-sm text-gray-500">Your settings</p></div>
                                                                          </div>
                                                                                <BottomNav />
                                                                                    </div>
      );
    }