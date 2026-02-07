import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HeartLogo from './components/HeartLogo'

export default function App() {
  const [step, setStep] = useState<'landing' | 'question' | 'celebration'>('landing')
  const [noClicked, setNoClicked] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 to-red-300 p-4">
      <AnimatePresence mode="wait">
        {step === 'landing' && (
          <motion.div
            key="landing"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="text-center"
          >
            <HeartLogo />
            <h1 className="text-3xl md:text-4xl font-bold text-pink-700 mt-6">
              Hey baby 💖 I have something to ask you...
            </h1>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setStep('question')}
              className="mt-6 bg-pink-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-pink-600 transition-all"
            >
              Open
            </motion.button>
          </motion.div>
        )}

        {step === 'question' && (
          <motion.div
            key="question"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-pink-700">
              Will you be my Valentine?
            </h2>

            {!noClicked ? (
              <div className="mt-6 flex flex-col gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setStep('celebration')}
                  className="bg-pink-500 text-white py-3 rounded-full font-semibold shadow-lg hover:bg-pink-600 transition-all"
                >
                  Yes! 💖
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setNoClicked(true)}
                  className="border border-pink-600 text-pink-600 py-3 rounded-full font-semibold hover:bg-pink-100 transition-all"
                >
                  No 😢
                </motion.button>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 text-pink-600 font-semibold space-y-4"
              >
                <p>I knew you’d say yes eventually 😉</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setStep('celebration')}
                  className="bg-pink-500 text-white py-3 rounded-full font-semibold shadow-lg hover:bg-pink-600 transition-all"
                >
                  Continue 💕
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        )}

        {step === 'celebration' && (
          <motion.div
            key="celebration"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex flex-col items-center justify-center text-center space-y-6"
          >
            <motion.div
              className="text-white text-5xl md:text-7xl animate-pulse"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              ❤️
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Yay! I love you 💕
            </h2>
            <p className="text-white max-w-md">
              You just made me the happiest person alive! Every beat of my heart is for you 💖
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
      }
