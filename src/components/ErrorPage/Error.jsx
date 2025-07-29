import error_404 from '../../assets/error/404_img.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFoundImage() {
  return (
    <div className="bg-primary-900 min-h-screen w-full flex items-center justify-center">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
        >
          <div className="text-center lg:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl lg:text-6xl font-bold text-white mb-6"
            >
              Something is not right...
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-white/70 mb-8 leading-relaxed"
            >
              Page you are trying to open does not exist. You may have mistyped the address, or the
              page has been moved to another URL. If you think this is an error contact support.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link to="/">
                <button className="bg-secondary-600 hover:bg-secondary-700 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 focus:ring-offset-primary-900">
                  Get back to home page
                </button>
              </Link>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <img 
              src={error_404} 
              alt="404 Error" 
              className="max-w-full h-auto max-h-96 lg:max-h-none"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}