import { motion } from 'motion/react';
import {
  Sun,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudDrizzle } from
'lucide-react';

interface WeatherIconProps {
  icon: string;
  size?: 'small' | 'medium' | 'large';
}

const WeatherIcon = ({ icon, size = 'medium' }: WeatherIconProps) => {
  const sizeClasses = {
    small: 'h-8 w-8',
    medium: 'h-12 w-12',
    large: 'h-20 w-20'
  };

  const getIcon = () => {
    switch (icon) {
      case 'sunny':
        return (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }} data-id="d99wbgm2w" data-path="src/components/WeatherIcon.tsx">

            <Sun className={`${sizeClasses[size]} text-yellow-300`} data-id="xldua6f2z" data-path="src/components/WeatherIcon.tsx" />
          </motion.div>);


      case 'partly-cloudy':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative" data-id="yqnuzgyo4" data-path="src/components/WeatherIcon.tsx">

            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} data-id="ztpcz7sr4" data-path="src/components/WeatherIcon.tsx">

              <Cloud className={`${sizeClasses[size]} text-gray-300`} data-id="14smfksu8" data-path="src/components/WeatherIcon.tsx" />
            </motion.div>
            <motion.div
              className="absolute -top-1 -right-1"
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }} data-id="34ijubz9t" data-path="src/components/WeatherIcon.tsx">

              <Sun className={`${size === 'large' ? 'h-8 w-8' : size === 'medium' ? 'h-6 w-6' : 'h-4 w-4'} text-yellow-300`} data-id="43yivm8uw" data-path="src/components/WeatherIcon.tsx" />
            </motion.div>
          </motion.div>);


      case 'cloudy':
        return (
          <motion.div
            animate={{ x: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} data-id="929kdckg5" data-path="src/components/WeatherIcon.tsx">

            <Cloud className={`${sizeClasses[size]} text-gray-400`} data-id="s6yqx4e09" data-path="src/components/WeatherIcon.tsx" />
          </motion.div>);


      case 'rainy':
        return (
          <motion.div className="relative" data-id="uw3gjw32b" data-path="src/components/WeatherIcon.tsx">
            <Cloud className={`${sizeClasses[size]} text-gray-500`} data-id="8o26n6i6n" data-path="src/components/WeatherIcon.tsx" />
            <motion.div
              className="absolute top-full left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} data-id="ebjfok9ck" data-path="src/components/WeatherIcon.tsx">

              <CloudRain className={`${size === 'large' ? 'h-6 w-6' : size === 'medium' ? 'h-4 w-4' : 'h-3 w-3'} text-blue-400`} data-id="rw0ab6dvk" data-path="src/components/WeatherIcon.tsx" />
            </motion.div>
          </motion.div>);


      case 'snowy':
        return (
          <motion.div className="relative" data-id="lt412bq2m" data-path="src/components/WeatherIcon.tsx">
            <CloudSnow className={`${sizeClasses[size]} text-gray-300`} data-id="ho4xhgs7o" data-path="src/components/WeatherIcon.tsx" />
            <motion.div
              className="absolute inset-0"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} data-id="mo7gbu8jn" data-path="src/components/WeatherIcon.tsx">

              {/* Snowflake effect */}
              <div className="w-full h-full relative" data-id="g4cnup3wk" data-path="src/components/WeatherIcon.tsx">
                <motion.div
                  className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full"
                  animate={{ y: [0, 20], opacity: [1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0 }} data-id="79ncu1omi" data-path="src/components/WeatherIcon.tsx" />

                <motion.div
                  className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full"
                  animate={{ y: [0, 20], opacity: [1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} data-id="y30zpyohl" data-path="src/components/WeatherIcon.tsx" />

              </div>
            </motion.div>
          </motion.div>);


      case 'thunderstorm':
        return (
          <motion.div className="relative" data-id="919syliep" data-path="src/components/WeatherIcon.tsx">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }} data-id="t386gjd7p" data-path="src/components/WeatherIcon.tsx">

              <CloudLightning className={`${sizeClasses[size]} text-gray-600`} data-id="3lpu4ohym" data-path="src/components/WeatherIcon.tsx" />
            </motion.div>
            <motion.div
              className="absolute inset-0"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 2 }} data-id="621wj4g2p" data-path="src/components/WeatherIcon.tsx">

              <div className="w-full h-full bg-yellow-300 rounded-full opacity-30 blur-sm" data-id="4tnig31cd" data-path="src/components/WeatherIcon.tsx" />
            </motion.div>
          </motion.div>);


      case 'drizzle':
        return (
          <motion.div className="relative" data-id="15f1qqxwq" data-path="src/components/WeatherIcon.tsx">
            <CloudDrizzle className={`${sizeClasses[size]} text-gray-400`} data-id="4dpjkiw6o" data-path="src/components/WeatherIcon.tsx" />
            <motion.div
              className="absolute top-full left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 8, 0], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }} data-id="5bdls5qdg" data-path="src/components/WeatherIcon.tsx">

              <div className="flex space-x-1" data-id="ujkh1r9b0" data-path="src/components/WeatherIcon.tsx">
                <div className="w-0.5 h-2 bg-blue-300 rounded-full" data-id="ynua7o8p2" data-path="src/components/WeatherIcon.tsx" />
                <div className="w-0.5 h-2 bg-blue-300 rounded-full" data-id="szyjymmgm" data-path="src/components/WeatherIcon.tsx" />
              </div>
            </motion.div>
          </motion.div>);


      default:
        return (
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} data-id="gok3wy2ir" data-path="src/components/WeatherIcon.tsx">

            <Cloud className={`${sizeClasses[size]} text-gray-300`} data-id="nphgdipsm" data-path="src/components/WeatherIcon.tsx" />
          </motion.div>);

    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center" data-id="pzj4dfaje" data-path="src/components/WeatherIcon.tsx">

      {getIcon()}
    </motion.div>);

};

export default WeatherIcon;