import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center pt-32 pb-20">

      {/* BACKGROUND IMAGES */}
      <div className="absolute inset-0 pointer-events-none z-0">

        {/* LEFT BOUQUET */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 0.45, y: 0, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            absolute
            top-[24%]
            left-[-22%]
            sm:left-[-10%]
            md:left-[2%]
            w-[220px]
            sm:w-[280px]
            md:w-[420px]
          "
        >
          <img
            src="/hero_bouquet.png"
            alt="Luxury Bouquet"
            className="
              w-full
              h-auto
              object-cover
              rounded-[2rem]
              border border-white/5
              shadow-2xl
            "
          />
        </motion.div>

        {/* RIGHT FRAME */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          animate={{ opacity: 0.9, y: 0, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            absolute
            bottom-[5%]
            right-[-20%]
            sm:right-[-8%]
            md:right-[4%]
            w-[220px]
            sm:w-[260px]
            md:w-[360px]
          "
        >
          <img
            src="/hero_frame.png"
            alt="LED Frame"
            className="
              w-full
              h-auto
              object-cover
              rounded-[2rem]
              border border-white/10
              shadow-2xl
            "
          />
        </motion.div>
      </div>

      {/* MAIN CONTENT */}
      <div className="container mx-auto px-6 lg:px-12 relative z-20">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="
            flex
            flex-col
            items-center
            text-center
            gap-8
            max-w-6xl
            mx-auto
          "
        >

          {/* TOP BADGE */}
          <motion.div
            variants={itemVariants}
            className="
              inline-flex
              items-center
              gap-2
              px-6
              py-3
              rounded-full
              border
              border-white/10
              bg-black/40
              backdrop-blur-md
            "
          >
            <span className="w-2 h-2 rounded-full bg-brand-gold"></span>

            <span className="
              text-xs
              sm:text-sm
              font-satoshi
              font-medium
              text-white/80
              tracking-[0.25em]
              uppercase
            ">
              The Art Of Gifting
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h1
            variants={itemVariants}
            className="
              text-[4rem]
              sm:text-[5rem]
              md:text-[8rem]
              leading-[0.85]
              tracking-tighter
              uppercase
              font-clash
              font-bold
              text-white
              relative
            "
          >
            Create Memories
            <span className="text-brand-gold">.</span>

            <br />

            <span className="text-white/30">
              Not Just Gifts.
            </span>
          </motion.h1>

          {/* SUBTEXT */}
          <motion.p
            variants={itemVariants}
            className="
              max-w-2xl
              text-base
              sm:text-lg
              md:text-2xl
              text-white/60
              font-satoshi
              leading-relaxed
              font-light
            "
          >
            Immerse yourself in a world of premium handcrafted luxury.
            We turn your most cherished moments into timeless masterpieces.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            variants={itemVariants}
            className="
              flex
              flex-col
              sm:flex-row
              items-center
              gap-5
              mt-4
            "
          >

            <button
              className="
                flex
                items-center
                gap-3
                px-8
                md:px-10
                py-4
                md:py-5
                rounded-full
                bg-white
                text-black
                font-semibold
                hover:bg-brand-gold
                transition-all
                duration-300
                hover:scale-[1.02]
              "
            >
              <MessageCircle size={20} />
              <span
  className="
    text-base
    md:text-lg
    font-semibold
    tracking-wide
    relative
    z-10
  "
>
                Order on WhatsApp
              </span>
            </button>

            <button
              className="
                flex
                items-center
                gap-3
                px-8
                md:px-10
                py-4
                md:py-5
                rounded-full
                border
                border-white/10
                bg-black/40
                text-white
                hover:bg-white/10
                transition-all
                duration-300
                group
              "
            >
              <span className="text-base md:text-lg">
                Explore Collection
              </span>

              <ArrowRight
                size={20}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </button>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}