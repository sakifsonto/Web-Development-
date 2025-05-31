import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import CurrentWeather from '@/components/CurrentWeather';
import WeatherForecast from '@/components/WeatherForecast';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Search, MapPin } from 'lucide-react';

interface WeatherData {
  current: {
    location: string;
    temperature: number;
    description: string;
    icon: string;
    humidity: number;
    windSpeed: number;
    feelsLike: number;
  };
  forecast: Array<{
    date: string;
    temp: {
      min: number;
      max: number;
    };
    description: string;
    icon: string;
  }>;
}

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { toast } = useToast();

  // Mock weather data for demonstration
  const mockWeatherData: WeatherData = {
    current: {
      location: 'New York, NY',
      temperature: 22,
      description: 'Partly Cloudy',
      icon: 'partly-cloudy',
      humidity: 65,
      windSpeed: 12,
      feelsLike: 25
    },
    forecast: [
    {
      date: 'Today',
      temp: { min: 18, max: 25 },
      description: 'Partly Cloudy',
      icon: 'partly-cloudy'
    },
    {
      date: 'Tomorrow',
      temp: { min: 16, max: 23 },
      description: 'Sunny',
      icon: 'sunny'
    },
    {
      date: 'Wednesday',
      temp: { min: 19, max: 27 },
      description: 'Rainy',
      icon: 'rainy'
    },
    {
      date: 'Thursday',
      temp: { min: 21, max: 29 },
      description: 'Cloudy',
      icon: 'cloudy'
    },
    {
      date: 'Friday',
      temp: { min: 17, max: 24 },
      description: 'Sunny',
      icon: 'sunny'
    }]

  };

  const fetchWeatherData = async (location: string) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // For demo purposes, we'll use mock data
      const locationData = {
        ...mockWeatherData,
        current: {
          ...mockWeatherData.current,
          location: location || 'New York, NY'
        }
      };

      setWeatherData(locationData);

      toast({
        title: "Weather Updated",
        description: `Showing weather for ${locationData.current.location}`
      });
    } catch (error) {
      console.error('Error fetching weather data:', error);
      toast({
        title: "Error",
        description: "Failed to fetch weather data. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      await fetchWeatherData(searchQuery);
    }
  };

  const getCurrentLocation = async () => {
    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        async () => {
          // For demo, we'll just use a default location
          await fetchWeatherData('Current Location');
        },
        (error) => {
          console.error('Geolocation error:', error);
          toast({
            title: "Location Error",
            description: "Unable to get your location. Please search manually.",
            variant: "destructive"
          });
          setLoading(false);
        }
      );
    }
  };

  useEffect(() => {
    // Load default weather data on component mount
    fetchWeatherData('');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600" data-id="xzzv1r7ig" data-path="src/components/WeatherApp.tsx">
      <div className="container mx-auto px-4 py-8" data-id="h0ie7xp29" data-path="src/components/WeatherApp.tsx">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8" data-id="sb5ks0b29" data-path="src/components/WeatherApp.tsx">

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2" data-id="ka31m0ndp" data-path="src/components/WeatherApp.tsx">
            Weather Forecast
          </h1>
          <p className="text-blue-100 text-lg" data-id="09jjtgtex" data-path="src/components/WeatherApp.tsx">
            Get the latest weather updates for any location
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md mx-auto mb-8" data-id="ncacpo1k8" data-path="src/components/WeatherApp.tsx">

          <Card className="p-4 backdrop-blur-sm bg-white/20 border-white/30" data-id="9wm2ujw2w" data-path="src/components/WeatherApp.tsx">
            <form onSubmit={handleSearch} className="flex gap-2" data-id="j9t88x5n8" data-path="src/components/WeatherApp.tsx">
              <Input
                type="text"
                placeholder="Search for a city..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-blue-100" data-id="4l94xyvfv" data-path="src/components/WeatherApp.tsx" />

              <Button
                type="submit"
                disabled={loading}
                className="bg-white/20 hover:bg-white/30 border-white/30" data-id="yma0smi28" data-path="src/components/WeatherApp.tsx">

                <Search className="h-4 w-4" data-id="4aot2icpk" data-path="src/components/WeatherApp.tsx" />
              </Button>
              <Button
                type="button"
                onClick={getCurrentLocation}
                disabled={loading}
                className="bg-white/20 hover:bg-white/30 border-white/30" data-id="tcnnl801k" data-path="src/components/WeatherApp.tsx">

                <MapPin className="h-4 w-4" data-id="vkffsba94" data-path="src/components/WeatherApp.tsx" />
              </Button>
            </form>
          </Card>
        </motion.div>

        {loading ?
        <LoadingSpinner data-id="c7e8ctu63" data-path="src/components/WeatherApp.tsx" /> :
        weatherData ?
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-8" data-id="8aa9bkcru" data-path="src/components/WeatherApp.tsx">

            <CurrentWeather data={weatherData.current} data-id="npn2cejfp" data-path="src/components/WeatherApp.tsx" />
            <WeatherForecast forecast={weatherData.forecast} data-id="5jbupfykj" data-path="src/components/WeatherApp.tsx" />
          </motion.div> :
        null}
      </div>
    </div>);

};

export default WeatherApp;