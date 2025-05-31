import { motion } from 'motion/react';
import { Card } from '@/components/ui/card';
import { Cloud, Sun } from 'lucide-react';

const LoadingSpinner = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex justify-center items-center py-12" data-id="gio0iqx9e" data-path="src/components/LoadingSpinner.tsx">

      <Card className="p-8 backdrop-blur-sm bg-white/20 border-white/30" data-id="iotfc0bsu" data-path="src/components/LoadingSpinner.tsx">
        <div className="flex flex-col items-center space-y-4" data-id="uq10chl1w" data-path="src/components/LoadingSpinner.tsx">
          <div className="relative" data-id="395qigira" data-path="src/components/LoadingSpinner.tsx">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }} data-id="x9d3naw49" data-path="src/components/LoadingSpinner.tsx">

              <Sun className="h-12 w-12 text-yellow-300" data-id="g2n5xdtkq" data-path="src/components/LoadingSpinner.tsx" />
            </motion.div>
            <motion.div
              className="absolute inset-0"
              animate={{ x: [0, 20, 0], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} data-id="1p1mjnscv" data-path="src/components/LoadingSpinner.tsx">

              <Cloud className="h-12 w-12 text-gray-300" data-id="8zag7p5rc" data-path="src/components/LoadingSpinner.tsx" />
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white text-lg font-medium" data-id="kcgx777vx" data-path="src/components/LoadingSpinner.tsx">

            Loading weather data...
          </motion.div>
          
          <motion.div
            className="flex space-x-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }} data-id="bfjdcsqwr" data-path="src/components/LoadingSpinner.tsx">

            {[0, 1, 2].map((index) =>
            <motion.div
              key={index}
              className="w-2 h-2 bg-white rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: index * 0.2
              }} data-id="vtuscunua" data-path="src/components/LoadingSpinner.tsx" />

            )}
          </motion.div>
        </div>
      </Card>
    </motion.div>);

};

export default LoadingSpinner;