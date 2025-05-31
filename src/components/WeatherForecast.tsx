import { motion } from 'motion/react';
import { Card } from '@/components/ui/card';
import WeatherIcon from '@/components/WeatherIcon';

interface ForecastData {
  date: string;
  temp: {
    min: number;
    max: number;
  };
  description: string;
  icon: string;
}

interface WeatherForecastProps {
  forecast: ForecastData[];
}

const WeatherForecast = ({ forecast }: WeatherForecastProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto" data-id="910yzo8hf" data-path="src/components/WeatherForecast.tsx">

      <h3 className="text-2xl font-bold text-white text-center mb-6" data-id="2jkg35h9s" data-path="src/components/WeatherForecast.tsx">
        5-Day Forecast
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4" data-id="8g1i41uec" data-path="src/components/WeatherForecast.tsx">
        {forecast.map((day, index) =>
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 }
          }} data-id="8ho1tgai5" data-path="src/components/WeatherForecast.tsx">

            <Card className="p-4 backdrop-blur-sm bg-white/20 border-white/30 text-white text-center hover:bg-white/30 transition-colors duration-300" data-id="zi2akud3k" data-path="src/components/WeatherForecast.tsx">
              <div className="font-semibold text-lg mb-3" data-id="n4z9va2vn" data-path="src/components/WeatherForecast.tsx">
                {day.date}
              </div>
              
              <div className="flex justify-center mb-3" data-id="mx8h2entq" data-path="src/components/WeatherForecast.tsx">
                <WeatherIcon icon={day.icon} size="medium" data-id="b5j8shmny" data-path="src/components/WeatherForecast.tsx" />
              </div>
              
              <div className="text-sm text-blue-100 mb-2 capitalize" data-id="m22qm0hc3" data-path="src/components/WeatherForecast.tsx">
                {day.description}
              </div>
              
              <div className="space-y-1" data-id="mfzbiatrs" data-path="src/components/WeatherForecast.tsx">
                <div className="text-xl font-bold" data-id="rvsdf3pu5" data-path="src/components/WeatherForecast.tsx">
                  {Math.round(day.temp.max)}°
                </div>
                <div className="text-sm text-blue-200" data-id="rle9758f7" data-path="src/components/WeatherForecast.tsx">
                  {Math.round(day.temp.min)}°
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </div>
    </motion.div>);

};

export default WeatherForecast;