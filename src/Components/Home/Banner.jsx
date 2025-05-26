import React from 'react';
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="hero mt-10 mb-10 rounded-2xl border-2 bg-base-100 overflow-hidden">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10 h-auto lg:h-[400px]">

        {/* Image Section */}
        <div className="flex-1">
          {/* First floating image */}
          <motion.img
            animate={{ y: [0, 50, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            src="/assets/group-business-executives-giving-high-five.jpg"
            className="w-64 -ml-22 border-blue-500 border-s-8 border-b-8 rounded-t-[50px] rounded-br-[50px] shadow-2xl z-10"
            alt="executives"
          />
          <motion.img
            animate={{ x: [0, 50, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            src="/assets/happy-subordinates-giving-high-five-after-successfully-undertaking-new-project-boardroom.jpg"
            className="w-64 -ml-4 border-blue-500 border-s-8 border-b-8 rounded-t-[50px] rounded-br-[50px] shadow-2xl z-10"
            alt="executives"
          />

        </div>

        {/* Text Section */}
        <div className="flex-1">
          <h1 className="text-5xl font-bold leading-snug">
            Remote{" "}
            <motion.span
              animate={{
                color: ["#ff5733", "#ffce33", "#33f6ff"],
                transition: { duration: 4, repeat: Infinity },
              }}
              className="inline-block"
            >
              Jobs
            </motion.span>{" "}
            For You!
          </h1>
          <p className="py-6 text-gray-600">
            Find your dream job from the comfort of your home. Join thousands of remote workers already earning online. Your opportunity awaits!
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>

      </div>
    </div>
  );
};

export default Banner;
