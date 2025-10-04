import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import MetricStat from "@/components/MetricStat";

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavBar />
      
      <Hero />
      
      <BentoGrid />
      
      {/* Metrics Dashboard Strip */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricStat
              title="Post→Award"
              value="3.2h"
              trend="down"
              trendValue="-12%"
              description="median time"
            />
            <MetricStat
              title="ETA Accuracy"
              value="94.6%"
              trend="up"
              trendValue="+2.1%"
              description="last 30 days"
            />
            <MetricStat
              title="CO₂ Intensity"
              value="0.82"
              trend="down"
              trendValue="-5.3%"
              description="kg/mi average"
            />
            <MetricStat
              title="Risk Alerts"
              value="12"
              trend="neutral"
              description="last 7 days"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}