import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Users, 
  MessageSquare, 
  Clock, 
  Phone, 
  Globe, 
  Shield, 
  Zap,
  Activity,
  ArrowUp,
  ArrowDown
} from "lucide-react";

interface MetricCard {
  id: string;
  title: string;
  value: string | number;
  change: number;
  trend: 'up' | 'down' | 'stable';
  icon: React.ReactNode;
  color: string;
  target?: number;
}

const LiveMetricsDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [animatedValues, setAnimatedValues] = useState<Record<string, number>>({});
  const [isVisible, setIsVisible] = useState(false);

  // Simulated real-time metrics
  const metrics: MetricCard[] = [
    {
      id: 'active-conversations',
      title: 'Active Conversations',
      value: 1247,
      change: 12.5,
      trend: 'up',
      icon: <MessageSquare className="w-5 h-5" />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'response-time',
      title: 'Avg Response Time',
      value: '1.2s',
      change: -15.3,
      trend: 'down',
      icon: <Clock className="w-5 h-5" />,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'satisfaction',
      title: 'Customer Satisfaction',
      value: 94.7,
      change: 2.1,
      trend: 'up',
      icon: <TrendingUp className="w-5 h-5" />,
      color: 'from-purple-500 to-purple-600',
      target: 100
    },
    {
      id: 'resolution-rate',
      title: 'First Contact Resolution',
      value: 87.3,
      change: 5.2,
      trend: 'up',
      icon: <Shield className="w-5 h-5" />,
      color: 'from-orange-500 to-orange-600',
      target: 100
    },
    {
      id: 'total-agents',
      title: 'AI Agents Online',
      value: 156,
      change: 0,
      trend: 'stable',
      icon: <Users className="w-5 h-5" />,
      color: 'from-teal-500 to-teal-600'
    },
    {
      id: 'calls-handled',
      title: 'Calls Handled Today',
      value: 8943,
      change: 18.7,
      trend: 'up',
      icon: <Phone className="w-5 h-5" />,
      color: 'from-pink-500 to-pink-600'
    },
    {
      id: 'global-coverage',
      title: 'Countries Served',
      value: 67,
      change: 3,
      trend: 'up',
      icon: <Globe className="w-5 h-5" />,
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      id: 'uptime',
      title: 'System Uptime',
      value: '99.97%',
      change: 0.02,
      trend: 'up',
      icon: <Activity className="w-5 h-5" />,
      color: 'from-emerald-500 to-emerald-600'
    }
  ];

  // Counter animation effect
  useEffect(() => {
    if (!isVisible) return;

    const animateCounter = (targetValue: number, key: string) => {
      const duration = 2000;
      const steps = 60;
      const stepValue = targetValue / steps;
      let currentValue = 0;

      const timer = setInterval(() => {
        currentValue += stepValue;
        if (currentValue >= targetValue) {
          setAnimatedValues(prev => ({ ...prev, [key]: targetValue }));
          clearInterval(timer);
        } else {
          setAnimatedValues(prev => ({ ...prev, [key]: currentValue }));
        }
      }, duration / steps);

      return timer;
    };

    const timers: NodeJS.Timeout[] = [];
    
    metrics.forEach(metric => {
      if (typeof metric.value === 'number') {
        const timer = animateCounter(metric.value, metric.id);
        timers.push(timer);
      }
    });

    return () => {
      timers.forEach(timer => clearInterval(timer));
    };
  }, [isVisible]);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Intersection observer for animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('metrics-dashboard');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const formatValue = (metric: MetricCard) => {
    if (typeof metric.value === 'string') return metric.value;
    
    const animatedValue = animatedValues[metric.id] || 0;
    
    if (metric.id === 'satisfaction' || metric.id === 'resolution-rate' || metric.id === 'uptime') {
      return `${animatedValue.toFixed(1)}%`;
    }
    
    return Math.floor(animatedValue).toLocaleString();
  };

  return (
    <section id="metrics-dashboard" className="w-full py-20 sm:py-32 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
            <Activity className="w-4 h-4 mr-2" />
            Live Dashboard
          </Badge>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-foreground mb-6">
            Real-Time Analytics
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Monitor your AI assistant performance with comprehensive real-time metrics and insights
          </p>
          
          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Live data • Last updated: {currentTime.toLocaleTimeString()}
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <Card 
              key={metric.id} 
              className="group hover:shadow-elegant-hover transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${metric.color} text-white`}>
                    {metric.icon}
                  </div>
                  <div className={`flex items-center gap-1 text-sm ${
                    metric.trend === 'up' ? 'text-green-600' : 
                    metric.trend === 'down' ? 'text-red-600' : 
                    'text-muted-foreground'
                  }`}>
                    {metric.trend === 'up' && <ArrowUp className="w-3 h-3" />}
                    {metric.trend === 'down' && <ArrowDown className="w-3 h-3" />}
                    {metric.change !== 0 && `${Math.abs(metric.change)}%`}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  {formatValue(metric)}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{metric.title}</p>
                
                {metric.target && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Progress</span>
                      <span>{((animatedValues[metric.id] || 0) / metric.target * 100).toFixed(0)}%</span>
                    </div>
                    <Progress 
                      value={(animatedValues[metric.id] || 0) / metric.target * 100} 
                      className="h-2"
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Performance Indicators */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">Peak Performance</h3>
              <p className="text-green-700 text-sm mb-4">All systems operating at optimal levels</p>
              <Badge className="bg-green-500 text-white hover:bg-green-600">
                Excellent Status
              </Badge>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Global Coverage</h3>
              <p className="text-blue-700 text-sm mb-4">24/7 support across all time zones</p>
              <Badge className="bg-blue-500 text-white hover:bg-blue-600">
                Worldwide Active
              </Badge>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-purple-800 mb-2">Security Status</h3>
              <p className="text-purple-700 text-sm mb-4">Enterprise-grade protection active</p>
              <Badge className="bg-purple-500 text-white hover:bg-purple-600">
                Fully Secured
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LiveMetricsDashboard;