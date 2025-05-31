import { motion } from 'motion/react';
import { Card } from '@/components/ui/card';
import WeatherIcon from '@/components/WeatherIcon';
import { Droplets, Wind, Thermometer, MapPin } from 'lucide-react';

interface CurrentWeatherProps {
  data: {
    location: string;
    temperature: number;
    description: string;
    icon: string;
    humidity: number;
    windSpeed: number;
    feelsLike: number;
  };
}

const CurrentWeather = ({ data }: CurrentWeatherProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto" data-id="imcovrnj0" data-path="src/components/CurrentWeather.tsx">

      <Card className="p-8 backdrop-blur-sm bg-white/20 border-white/30 text-white" data-id="rinzcz0ax" data-path="src/components/CurrentWeather.tsx">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-6" data-id="apu6lm0et" data-path="src/components/CurrentWeather.tsx">

          <div className="flex items-center justify-center gap-2 mb-2" data-id="2i7a6ap1z" data-path="src/components/CurrentWeather.tsx">
            <MapPin className="h-5 w-5 text-blue-100" data-id="ttbcsx6fj" data-path="src/components/CurrentWeather.tsx" />
            <h2 className="text-2xl font-semibold" data-id="d15jhu7xu" data-path="src/components/CurrentWeather.tsx">{data.location}</h2>
          </div>
          <p className="text-blue-100 capitalize" data-id="44zypo5ba" data-path="src/components/CurrentWeather.tsx">{data.description}</p>
        </motion.div>

        <div className="flex items-center justify-center gap-8 mb-8" data-id="imwnmyzxp" data-path="src/components/CurrentWeather.tsx">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center" data-id="ww7a9pkpv" data-path="src/components/CurrentWeather.tsx">

            <WeatherIcon icon={data.icon} size="large" data-id="p4m6oewqa" data-path="src/components/CurrentWeather.tsx" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center" data-id="644hum42c" data-path="src/components/CurrentWeather.tsx">

            <div className="text-6xl md:text-7xl font-bold mb-2" data-id="dmg73km2v" data-path="src/components/CurrentWeather.tsx">
              {Math.round(data.temperature)}°
            </div>
            <div className="text-blue-100" data-id="o06sl2b9c" data-path="src/components/CurrentWeather.tsx">
              Feels like {Math.round(data.feelsLike)}°
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 gap-6" data-id="o86gkhqr8" data-path="src/components/CurrentWeather.tsx">

          <div className="flex items-center gap-3 p-4 rounded-lg bg-white/10" data-id="p2sldpzno" data-path="src/components/CurrentWeather.tsx">
            <Droplets className="h-6 w-6 text-blue-200" data-id="bg0xj5i7w" data-path="src/components/CurrentWeather.tsx" />
            <div data-id="s7zpql2p4" data-path="src/components/CurrentWeather.tsx">
              <div className="text-sm text-blue-100" data-id="o6w9gemyc" data-path="src/components/CurrentWeather.tsx">Humidity</div>
              <div className="text-xl font-semibold" data-id="nktpi5oba" data-path="src/components/CurrentWeather.tsx">{data.humidity}%</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-4 rounded-lg bg-white/10" data-id="fkmkka2ua" data-path="src/components/CurrentWeather.tsx">
            <Wind className="h-6 w-6 text-blue-200" data-id="m4t06glxd" data-path="src/components/CurrentWeather.tsx" />
            <div data-id="gz9y11afb" data-path="src/components/CurrentWeather.tsx">
              <div className="text-sm text-blue-100" data-id="bqxzrsm9g" data-path="src/components/CurrentWeather.tsx">Wind Speed</div>
              <div className="text-xl font-semibold" data-id="dp0jwurz2" data-path="src/components/CurrentWeather.tsx">{data.windSpeed} km/h</div>
            </div>
          </div>
        </motion.div>
      </Card>
    </motion.div>);

};

export default CurrentWeather;