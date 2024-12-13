import Link from "next/link";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-200 to-slate-950 p-6">
      <div className="max-w-3xl mx-auto text-center space-y-20">
        <div className="space-y-2">
          <div className="inline-block px-3 py-1 bg-gray-600 rounded-full text-sm text-gray-100 mb-2">
            Welcome to F1sherman's Tech Blog
          </div>
          <h1 className="text-4xl font-semibold text-white tracking-tight">Code, Coffee, and Creativity: Navigating the Tech Universe</h1>
          <p className="text-gray-600">Here are our latest stories</p>
        </div>
        
      </div>
    </div>
  );
};

export default Index;
